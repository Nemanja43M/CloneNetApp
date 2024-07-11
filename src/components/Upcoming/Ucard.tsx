import React from "react";
import { Item } from "./Upcoming";
import cover from "../../assets/images/hero-slide-2.jpeg";

type UcardProps = {
    item: Item;
};

const Ucard: React.FC<UcardProps> = ({ item: { title, poster_path, release_date, inFavorites } }) => {
    return (
        <div className="MovieBox">
            <div className="img">
                <img src={cover} alt={title} />
            </div>
            <div className="text">
                <h3>{title}</h3>
                <span>{release_date}</span> <br />
                {/* <span>{inFavorites ? "In Favorites" : "Not in Favorites"}</span> */}
                <button className="primary-btn">
                    <i className="fa fa-play"></i> Play Now
                </button>
            </div>
        </div>
    );
};

export default Ucard;
