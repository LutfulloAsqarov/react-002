import React from "react";
import { NAVBAR_ITEMS } from "../../static";
import logo from "../../assets/navbar/logo.svg";
import "./Navbar.css";
const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav className="header__navbar container">
                    <div className="header__left">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                        <ul className="header__list">
                            {NAVBAR_ITEMS.map((item) => {
                                return (
                                    <li key={item.id} className="header__item">
                                        <a className="header__link" href="#">
                                            {item.link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <button className="btn">Booking now</button>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
