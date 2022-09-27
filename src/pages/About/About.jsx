import React from 'react';
import "./About.css";
import aboutImg from '../../images/pexels-nubia-navarro-(nubikini)-1517355.jpg';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>
                <div className="about-content grid">
                    <div className="about-img">
                        <img src = {aboutImg} alt = ""/>
                    </div>
                    <div className="about-text">
                        <h2 className="about-text fs-26 ls-1">About BookFinder</h2>
                        <p className="fs-17">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque enim doloremque voluptas inventore unde assumenda ut excepturi necessitatibus. Esse fuga aliquid dolore! Ipsam expedita quam repellat quod nostrum blanditiis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About