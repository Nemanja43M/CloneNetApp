import React from "react";

import Header from "./Header";
import Upcomming from "./Upcoming/Upcoming";
import Footer from "./Footer/Footer";

export interface Item {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    inFavorites: boolean;
}

type UpcommingProps = {
    items: Item[];
    title: string;
};

const ViewAllMovies: React.FC<UpcommingProps> = ({ items, title }) => {
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
