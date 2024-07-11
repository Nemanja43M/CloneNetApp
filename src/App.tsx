import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Upcomming from "./components/Upcoming/Upcoming";
import { upcome } from "./assets/dummyData";

const App: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [items, setItems] = useState(upcome);
    return (
        <>
            <Router>
                <Header />
                <Hero />
                <Upcomming items={items} title="Upcomming Movies" />
            </Router>
        </>
    );
};

export default App;
