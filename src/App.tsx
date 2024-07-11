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
}

const App: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const data: Item[] = movieData.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            inFavorites: false,
        }));

        const uniqueData: Item[] = Array.from(new Set(data.map((movie) => movie.id)))
            .map((id) => data.find((movie) => movie.id === id))
            .filter((movie): movie is Item => movie !== undefined);

        setItems(uniqueData);
        console.log(uniqueData[0]);
    }, []);
    return (
        <Router>
            <Header />
            <Hero items={items} />
            <Upcomming items={items} title="Favorites Movies" />
            <Upcomming items={items} title="Upcoming Movies" />
            <Hero items={items} />
            <Footer />
        </Router>
    );
};

export default App;
