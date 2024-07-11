import React from "react";
// import { Link } from "react-router-dom";
import "./heroParts.css";
import cover from "../assets/images/hero-slide-4.jpeg";
import play from "../assets/images/play.png";
import playBtn from "../assets/images/play-button.png";
import { Item } from "./Upcoming/Upcoming";

interface HeroPartsProps {
    item: Item;
}

const HeroParts: React.FC<HeroPartsProps> = ({ item: { title, poster_path, release_date, inFavorites } }) => {
    return (
        <div className="swiper-slide">
            <div className="container-fluid swiper-slide-content" style={{ backgroundImage: `url(${cover})` }}>
                <div className="row section-hero__content">
                    <div className="col-12 section-hero__content-title">
                        <div className="headline">
                            {/* <button className="hero-btn primary-btn">
                                <i className="fas fa-play"></i> PLAY NOW
                            </button> */}
                            <h1>{title}</h1>
                        </div>
                        <div className="rating flex">
                            <div className="rate">
                                <i className="fas fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half"></i>
                            </div>
                            <label>2.5(Imdb)</label>
                            <span>GP</span>
                            {/* <label>{item.time}</label> */}
                        </div>

                        {/* <p>{item.desc}</p> */}
                        <div className="cast">
                            <div className="palyButton row">
                                {/* <Link to={`/singlepage/${item.id}`}> */}
                                <button>
                                    <div className="img">
                                        <img src={playBtn} alt="" />

                                        <img src={play} className="change" alt="" />
                                    </div>
                                    WATCH TRAILER
                                </button>
                                {/* </Link> */}
                            </div>

                            <div>
                                <h4>
                                    <span>Release Date </span>
                                    {release_date}
                                </h4>
                                {/* <h4>
                                    <span>Starring </span>
                                    {item.starring}
                                </h4> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroParts;
