import React from "react";
import { Link } from "react-router-dom";
import Ucard from "./Ucard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SampleArrowProps = {
    onClick: () => void;
};

const SampleNextArrow: React.FC<SampleArrowProps> = ({ onClick }) => {
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    );
};

const SamplePrevArrow: React.FC<SampleArrowProps> = ({ onClick }) => {
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-chevron-left"></i>
            </button>
        </div>
    );
};

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

const Upcomming: React.FC<UpcommingProps> = ({ items, title }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow onClick={() => {}} />,
        prevArrow: <SamplePrevArrow onClick={() => {}} />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="upcome">
            <div className="container">
                <div className="heading flexSB">
                    <h1>{title}</h1>
                    <Link to="/">View All</Link>
                </div>
                <div className="content">
                    <Slider {...settings}>
                        {items.map((item) => (
                            <Ucard key={item.id} item={item} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Upcomming;
