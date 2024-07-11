import React from "react";

import Header from "./Layout/Header";
import Upcomming from "./Upcoming/Upcoming";
import Footer from "./Layout/Footer";
import { ViewAllMoviesProps } from "../interfaces/interfaces";

const ViewAllMovies: React.FC<ViewAllMoviesProps> = ({ items, title }) => {
    return (
        <>
            <Header />
            <Upcomming items={items} title={title} />
            <Upcomming items={items} title="" />
            <Footer />
        </>
    );
};

export default ViewAllMovies;
