import React from "react";
import { FEATURES_CARDS } from "../../static";
import "./Features.css";

const Features = () => {
    return (
        <>
            <div className="features container">
                <div className="features__top">
                    <p className="subtitle">FEATURES</p>
                    <h2 className="title">Food with a New Passion</h2>
                </div>
                <div className="features__cards">
                    {FEATURES_CARDS.map((card) => {
                        return (
                            <div key={card.id} className="features__card">
                                <img src={card.image} alt="" />
                                <h3>{card.title}</h3>
                                <p className="desc">{card.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Features;
