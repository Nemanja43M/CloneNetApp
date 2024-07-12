import React, { useState } from 'react';
import './header.css';
import img from '../../assets/images/united_cloud_logo_1_.svg';
import { Link } from 'react-router-dom';

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
                        <ul
                            className={Mobile ? 'navMenu-list' : 'flexSB'}
                            onClick={() => setMobile(false)}
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/series">Series</Link>
                            </li>
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                        </ul>
                        <button
                            className="toggle"
                            onClick={() => setMobile(!Mobile)}
                        >
                            {Mobile ? (
                                <i className="fa fa-times"></i>
                            ) : (
                                <i className="fa fa-bars"></i>
                            )}
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
