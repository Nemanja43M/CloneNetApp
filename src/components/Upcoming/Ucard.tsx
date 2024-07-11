import React from "react";
import { UcardProps } from "../../interfaces/interfaces";

const Ucard: React.FC<UcardProps> = ({ item: { title, poster_path, release_date, inFavorites } }) => {
    const imageUrl = poster_path ? `${process.env.REACT_APP_BASE_IMG_URL}${poster_path}` : "none";
    return (
        <div className="MovieBox">
            <div className="img">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="text">
                <h3>{title}</h3>
                <span>{release_date}</span> <br />
                <button className="primary-btn">
                    <i className="fa fa-play"></i> Play Now
                </button>
            </div>
        </div>
    );
};

export default Ucard;
