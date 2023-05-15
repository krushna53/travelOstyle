import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="footer-wrapper">
                    <div className="footer-background-folder">
                        <span>DOING GOOD, TOGETHER</span>
                        <h2>Get Inspired to The Collaboration</h2>
                        <div className="Get-Inspired-call-folder">
                            <div className="call-folder">
                                <a href="/"><i className="fa-solid fa-phone"></i></a>
                                <a href="/" className="call-btn">9987547773</a>
                            </div>
                            <div className="Appointment-folder">
                                <a href="/"><i className="fa-solid fa-arrow-right"></i></a>
                                <a href="/" className="Appointment-btn">Appointment</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-container-wrapper">
                        <div className="footer-conatiner">
                            <div className="footer-folder1">
                                <h2>Travleostyle</h2>
                                <p>internatios is international, non profit, professional organization founded
                                    by a group
                                </p>
                                <div className="footer-iocn">
                                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                </div>
                            </div>
                            <div className="footer-folder2">
                                <h2>Company</h2>
                                <a href="/">Business</a>
                                <a href="/">Compare</a>
                                <a href="/">Feature</a>
                                <a href="/">Pricing</a>
                            </div>
                            <div className="footer-folder2">
                                <h2>Search Ride</h2>
                                <a href="/">Business</a>
                                <a href="/">Compare</a>
                                <a href="/">Feature</a>
                                <a href="/">Pricing</a>
                            </div>
                            <div className="footer-folder2">
                                <h2>List a Ride</h2>
                                <a href="/">Business</a>
                                <a href="/">Compare</a>
                                <a href="/">Feature</a>
                                <a href="/">Pricing</a>
                            </div>
                        </div>
                        <span>Copyright @ 2023 | <NavLink to="/basicpage/terms-and-conditions">Terms and conditions</NavLink> | <NavLink to="/basicpage/privacy-policy">Privacy Policy</NavLink> | <NavLink to="/basicpage/refund-policy">Refund Policy</NavLink></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;