import React from "react";
import { UcardProps } from "../../interfaces/interfaces";

// import cover from "../../assets/images/hero-slide-2.jpeg";

const Ucard: React.FC<UcardProps> = ({ item: { title, poster_path, release_date, inFavorites } }) => {
    const imageUrl = poster_path
        ? `${process.env.REACT_APP_BASE_IMG_URL}${poster_path}`
        : "path/to/default/cover/image.jpg"; // Use a default image path if cover is not available
    return (
        <div className="MovieBox">
            <div className="img">
                <img src={imageUrl} alt={title} />
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
