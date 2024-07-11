import React, { useState } from "react";
import "./header.css";
import img from "../../assets/images/united_cloud_logo_1_.svg";

const Header: React.FC = () => {
    const [Mobile, setMobile] = useState<boolean>(false);
    return (
        <>
            <header>
                <div className="container flexSB">
                    <nav className="flexSB">
                        <div className="logo">
                            <img className="logo-img" src={img} alt="" />
                        </div>
                        <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Series</a>
                            </li>
                            <li>
                                <a href="/">Movies</a>
                            </li>
                            <li>
                                <a href="/">MyFavorites</a>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                    </nav>
                    <div className="account flexSB">
                        <i className="fa fa-search"></i>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-user"></i>
                        <button className="live">Subscribe Now</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
