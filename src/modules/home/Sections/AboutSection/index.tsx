import React, {type ReactElement} from "react";
import type {HomeSection} from "../../types";
import * as images from "@modules/home/locales/paths.json";
import "./style.css";

interface AboutSectionProps {
    content: HomeSection;
}

// https://uiverse.io/Musab-boaidani/funny-ladybug-18
// https://uiverse.io/3bdel3ziz-T/proud-squid-15

const AboutSection: React.FC<AboutSectionProps> = ({content}): ReactElement => {
    return (
        <section id="home-about" className="home-section about-section">
            <div className="lamp">
                <div className="lamp-body"></div>
                <div className="lamp-bulb"></div>
            </div>

            <div className='about-stands'>
                <div className='about-stands-img-wrapper'>
                    <img className='about-img' src={images.stands[0]} alt=''/>
                    <img className='about-img' src={images.stands[2]} alt=''/>
                    <img className='about-img' src={images.stands[4]} alt=''/>
                </div>
                <div className='about-stands-next-button'>
                    <button>
                        next stand
                    </button>
                </div>
            </div>
            <div className='about-text-content'>
                <h2>{content.title}</h2>
                <p>{content.description}</p>
            </div>
        </section>
    );
};

export default AboutSection;