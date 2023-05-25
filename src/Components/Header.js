import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const showButtonClass = modal ? "show-btn active" : "show-btn";
    return (
        <>
            <a onClick={toggleModal} href="#" className={showButtonClass}>
                <i className="fa-solid fa-bars"></i>
            </a>
            {modal && (
                <div className="top-header-section">
                    <div className="top-header-wrapper">
                        <div className="logo">
                            <h2>Travleostyle</h2>
                        </div>
                        <ul onClick={toggleModal} className="menu">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/basicpage/about-us-detials">About Us</NavLink></li>

                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            )}
            <div className="top-header-section-folder">
                <div className="top-header-wrapper-folder">
                    <div className="logo-folder">
                        <h2>Travleostyle</h2>
                    </div>
                    <ul onClick={toggleModal} className="menu-folder">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/basicpage/about-us-detials">About Us</NavLink></li>

                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;