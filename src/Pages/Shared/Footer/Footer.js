import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-3">
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="right-footer-container">
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div className="p-3">
                                        <h5>+88012687654</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>
                                        16, Gulshan-2, Dhaka, 10038,
                                        <br /> 102 1st Avenue, Dhaka, DHK 100
                                        </p>
                                    </div>
                                </div>
                                <h5>Sign up for the newsletter</h5>
                                <input
                                className="footer-input"
                                type="text"
                                placeholder="Enter Your Email"
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Explore</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu">About us</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="left-container text-start">
                                <h1>Watch Shop</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>
                                <p className="mt-5">
                                <small>Watch Shop © All rights reserved.</small>
                                </p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;