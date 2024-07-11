import React, { useEffect, useState } from "react";
import "./heroParts.css";
import cover from "../../assets/images/hero-slide-1.jpeg";
import play from "../../assets/images/play.png";
import playBtn from "../../assets/images/play-button.png";
import { HeroPartsProps, Item } from "../../interfaces/interfaces";

const HeroParts: React.FC<HeroPartsProps> = ({ item, onSelectFavorite }) => {
    const [isFavorite, setIsFavorite] = useState(item.inFavorites);

    useEffect(() => {
        const favorites = JSON.parse(sessionStorage.getItem("favorites") || "[]");
        const isItemFavorite = favorites.includes(item.id);
        setIsFavorite(isItemFavorite);
    }, [item.id]);

    const handleSelectFavorite = (item: Item) => {
        const favorites = JSON.parse(sessionStorage.getItem("favorites") || "[]");

        if (favorites.includes(item.id)) {
            sessionStorage.setItem("favorites", JSON.stringify(favorites.filter((id: number) => id !== item.id)));
            setIsFavorite(false);
        } else {
            favorites.push(item.id);
            sessionStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
        }

        onSelectFavorite(item);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleSelectFavorite(item);
        }
    };

    return (
        <div className="swiper-slide" tabIndex={0} onKeyDown={handleKeyPress}>
            <div
                className="container-fluid swiper-slide-content"
                style={{
                    backgroundImage: item.poster_path
                        ? `url(${process.env.REACT_APP_BASE_IMG_URL}${item.poster_path})`
                        : `url(${cover})`,
                }}
            >
                <div className="row section-hero__content">
                    <div className="col-12 section-hero__content-title">
                        <div className="headline">
                            <h1>{item.title}</h1>
                        </div>
                        <div className="rating flex">
                            <div className="rate">
                                <i className="fas fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half"></i>
                            </div>
                            <label>
                                {item.ratings[0].rating} {item.ratings[0].id}
                            </label>
                            <span>Add me to MyFavorites</span>
                            <span onClick={() => handleSelectFavorite(item)}>
                                {isFavorite ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                            </span>
                            <span>Click on heart</span>
                        </div>

                        <div className="cast">
                            <div className="palyButton row">
                                <button>
                                    <div className="img">
                                        <img src={playBtn} alt="" />
                                        <img src={play} className="change" alt="" />
                                    </div>
                                    WATCH TRAILER
                                </button>
                            </div>
                            <div>
                                <h4>
                                    <span>Release Date </span>
                                    {item.release_date}
                                </h4>
                                <h4 className="overview">
                                    <span>Overview </span>
                                    {item.overview}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroParts;
