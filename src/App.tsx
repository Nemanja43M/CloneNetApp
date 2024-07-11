import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Upcomming from "./components/Upcoming/Upcoming";
import movieData from "./assets/movie.json";
import Footer from "./components/Footer/Footer";

interface Item {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    inFavorites: boolean;
    ratings: { id: string; rating: number }[];
}

const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [items2, setItems2] = useState<Item[]>([]);
    const [sortedByImdb, setSortedByImdb] = useState<Item[]>([]);

    useEffect(() => {
        const data: Item[] = movieData.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            inFavorites: false,
            ratings: movie.ratings,
        }));

        const uniqueData: Item[] = Array.from(new Set(data.map((movie) => movie.id)))
            .map((id) => data.find((movie) => movie.id === id))
            .filter((movie): movie is Item => movie !== undefined);

        const movies = uniqueData.slice(0, 10);
        setItems(movies);
        const movies2 = uniqueData.slice(10, 20);
        setItems2(movies2);
        const sortedData = [...uniqueData].sort((a, b) => {
            // Sortiranje po "imdb" ocjeni od najvišeg ka najnižem
            const ratingA = a.ratings.find((rating) => rating.id === "imdb")?.rating ?? 0;
            const ratingB = b.ratings.find((rating) => rating.id === "imdb")?.rating ?? 0;
            return ratingB - ratingA;
        });

        const top9Movies = sortedData.slice(0, 9);
        setSortedByImdb(top9Movies);
    }, []);

    return (
        <Router>
            <Header />
            <Hero items={items} />
            <Upcomming items={sortedByImdb} title="Most popular in IMBD" />
            <Upcomming items={items} title="My Favorites" />
            <Hero items={items2} />
            <Footer />
        </Router>
    );
};

export default App;
