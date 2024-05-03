import React from "react";
import heroImg from "../../assets/hero/hero.svg";
import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="hero container">
                <div className="hero__left">
                    <h1 className="hero__title">
                        Making time a good time by making food the good food.
                    </h1>
                    <p className="hero__desc">
                        There are many things are needed to start the Fast Food
                        Business. You need not only Just Food Stalls with
                        Persons but also specialized equipment,
                    </p>
                    <div className="hero__btns">
                        <button className="hero__btn-order btn">
                            Order now
                        </button>
                        <button className="hero__btn-details btn ">
                            Food Details
                        </button>
                    </div>
                </div>
                <div className="hero__right">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Hero;
