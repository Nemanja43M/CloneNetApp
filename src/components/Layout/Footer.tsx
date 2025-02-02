import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box">
                        <ul className="flex">
                            <li>Terms of Use</li>
                            <li>Privacy-Policy</li>
                            <li>Blog</li>
                        </ul>
                        <p>
                            © 2024 United Cloud. All Rights Reserved. All
                            videos and shows on this platform are trademarks of,
                            and all related images and content are the property
                            of, United Cloud Inc. Duplication and copy of this
                            is strictly prohibited. All rights reserved.
                        </p>
                    </div>
                    <div className="box">
                        <h3>Follow Us</h3>

                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="box">
                        <h3>United Cloud App</h3>
                        <div className="img">
                            <img
                                src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"
                                alt=""
                            />

                            <img
                                src="https://img.icons8.com/fluency/48/000000/google-play.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
