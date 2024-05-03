import React from "react";
import aboutImg from "../../assets/about/about-img.png";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about container">
                <div className="about__left">
                    <img src={aboutImg} alt="img" />
                </div>
                <div className="about__right">
                    <div>
                        <p className="subtitle">ABOUT US</p>
                        <h2 className="title">
                            Food Stalls with Persons but to Product marketing
                            plane catlogues etc to.
                        </h2>
                    </div>
                    <p className="desc ">
                        There are many things are needed to start the Fast Food
                        Business. You need not only Just Food Stalls with
                        Persons but also equipment make your marketing plane
                        Effective.
                    </p>
                    <button className="btn">Read more</button>
                </div>
            </div>
        </>
    );
};

export default About;
