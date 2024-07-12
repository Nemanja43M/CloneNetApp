import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { setFavorites } from './slices/Favorites';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import Upcomming from './components/Upcoming/Upcoming';
import movieData from './assets/movie.json';
import Footer from './components/Layout/Footer';
import { Item } from './interfaces/interfaces';
import ViewAllMovies from './components/ViewAllMovies';
export interface RootFavorites {
    favorites: { list: Item[] };
}
const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [items2, setItems2] = useState<Item[]>([]);
    const [sortedByImdb, setSortedByImdb] = useState<Item[]>([]);

    const favorites = useSelector(
        (state: RootFavorites) => state.favorites.list
    );
    console.log(favorites);
    const dispatch = useDispatch();
    const handleFavorites = (item: Item) => {
        try {
            dispatch(setFavorites(item));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const data: Item[] = movieData.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            inFavorites: false,
            ratings: movie.ratings,
            overview: movie.overview,
        }));

        const uniqueData: Item[] = Array.from(
            new Set(data.map((movie) => movie.id))
        )
            .map((id) => data.find((movie) => movie.id === id))
            .filter((movie): movie is Item => movie !== undefined);

        const movies = uniqueData.slice(5, 17);
        setItems(movies);
        const movies2 = uniqueData.slice(10, 20);
        setItems2(movies2);
        const sortedData = [...uniqueData].sort((a, b) => {
            const ratingA =
                a.ratings.find((rating) => rating.id === 'imdb')?.rating ?? 0;
            const ratingB =
                b.ratings.find((rating) => rating.id === 'imdb')?.rating ?? 0;
            return ratingB - ratingA;
        });

        const top9Movies = sortedData.slice(1, 9);
        setSortedByImdb(top9Movies);
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero
                                items={items}
                                onSelectFavorite={handleFavorites}
                            />
                            <Upcomming
                                items={sortedByImdb}
                                title="Most popular in IMDb"
                            />
                            <Upcomming items={items2} title="Upcoming Movies" />
                            <Hero
                                items={items2}
                                onSelectFavorite={handleFavorites}
                            />
                        </>
                    }
                />
                <Route
                    path="/series"
                    element={<ViewAllMovies items={items} title="Series" />}
                />
                <Route
                    path="/movies"
                    element={<ViewAllMovies items={items2} title="Movies" />}
                />
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
