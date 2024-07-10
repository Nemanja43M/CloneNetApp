import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <Hero />
            </Router>
        </>
    );
};

export default App;
