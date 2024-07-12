import React from 'react';

import Upcomming from './Upcoming/Upcoming';
import { ViewAllMoviesProps } from '../interfaces/interfaces';

const ViewAllMovies: React.FC<ViewAllMoviesProps> = ({ items, title }) => {
    const list = items.slice(0, 6);
    const list2 = items.slice(6, 12);
    return (
        <>
            <Upcomming items={list} title={title} />
            <Upcomming items={list2} title="" />
        </>
    );
};

export default ViewAllMovies;
