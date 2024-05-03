import React from "react";
import { MENU } from "../../static";
import "./Menu.css";
import starGold from "../../assets/menu/stargold.svg";
import starSilver from "../../assets/menu/starsilver.svg";

const Menu = () => {
    return (
        <>
            <div className="menu container">
                <div className="menu__top">
                    <p className="subtitle">MENU</p>
                    <h2 className="title">Food Full of treaty Love</h2>
                    <p className="desc">
                        There are many things are needed to start the Fast Food
                        Business. You need not only Just Food Stalls with
                        Persons but also specialized equipment, Skills to manage
                        Customers,
                    </p>
                </div>
                <div className="menu__cards">
                    {MENU.map((card) => {
                        return (
                            <div key={card.id} className="menu__card">
                                <div className="menu__card__img">
                                    <img src={card.image} alt="image" />
                                </div>
                                <div className="menu__card__info">
                                    <div className="menu__card__title">
                                        <h3>{card.title}</h3>
                                        <p>{card.price}$</p>
                                    </div>
                                    <p className="desc">{card.description}</p>
                                    <div className="menu__card__rate">
                                        <button className="menu__card__btn">
                                            +
                                        </button>
                                        <div className="menu__card__stars">
                                            {getFullStar(card.rate)}
                                            {getEmptyStar(5 - card.rate)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

function getFullStar(count) {
    let arr = new Array(count).fill(1);
    return (
        <div>
            {arr.map((v, i) => (
                <img key={i} src={starGold} alt="star" />
            ))}
        </div>
    );
}
function getEmptyStar(count) {
    let arr = new Array(count).fill(1);
    return (
        <div>
            {arr.map((v, i) => (
                <img key={i} src={starSilver} alt="star" />
            ))}
        </div>
    );
}

export default Menu;
