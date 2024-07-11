import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { setFavorites } from "./slices/Favorites";
import { useDispatch } from "react-redux";

import Header from "./components/Layout/Header";
import Hero from "./components/Hero/Hero";
import Upcomming from "./components/Upcoming/Upcoming";
import movieData from "./assets/movie.json";
import Footer from "./components/Layout/Footer";
import { Item } from "./interfaces/interfaces";

const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [items2, setItems2] = useState<Item[]>([]);
    const [sortedByImdb, setSortedByImdb] = useState<Item[]>([]);
    // const [favoriteItems, setFavoriteItems] = useState<Item[]>([]);

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

        const uniqueData: Item[] = Array.from(new Set(data.map((movie) => movie.id)))
            .map((id) => data.find((movie) => movie.id === id))
            .filter((movie): movie is Item => movie !== undefined);

        const movies = uniqueData.slice(5, 17);
        setItems(movies);
        const movies2 = uniqueData.slice(10, 20);
        setItems2(movies2);
        const sortedData = [...uniqueData].sort((a, b) => {
            const ratingA = a.ratings.find((rating) => rating.id === "imdb")?.rating ?? 0;
            const ratingB = b.ratings.find((rating) => rating.id === "imdb")?.rating ?? 0;
            return ratingB - ratingA;
        });

        const top9Movies = sortedData.slice(0, 9);
        setSortedByImdb(top9Movies);
        // const favoritesFromStorage = JSON.parse(sessionStorage.getItem("favorites") || "[]");

        // const favoriteMovies = uniqueData.filter((movie) => favoritesFromStorage.includes(movie.id));
        // setFavoriteItems(favoriteMovies);
    }, []);

    return (
        <Router>
            <Header />
            <Hero items={items} onSelectFavorite={handleFavorites} />
            <Upcomming items={sortedByImdb} title="Most popular in IMBD" />
            <Upcomming items={items} title="My Favorites" />
            <Hero items={items2} onSelectFavorite={handleFavorites} />
            <Footer />
        </Router>
    );
};

export default App;
