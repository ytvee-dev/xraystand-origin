import React, {type ReactElement, useEffect} from "react";
import type {HomeSection} from "../../types";
import * as images from "@modules/home/locales/paths.json";
import "./style.css";

interface AboutSectionProps {
    content: HomeSection;
}

const AboutSection: React.FC<AboutSectionProps> = ({content}): ReactElement => {
    useEffect(() => {
        const toggle = document.getElementById('switch');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.toggle('toggle-on');
            });
        }
    }, []);

    return (
        <section id="home-about" className="home-section about-section">
            <div className="left-decoration">
                <img src={'./public/assets/drops/drop_1.png'} />
            </div>

            <div className="lamp-container">
                <div className='toggle' id='switch'>
                    <div className='toggle-text-off'>Выкл</div>
                    <div className='glow-comp'></div>
                    <div className='toggle-button'></div>
                    <div className='toggle-text-on'>Вкл</div>
                </div>

                <div id="lamp">
                    <div className="lamp">
                        <div className="gonna-give-light"></div>
                    </div>
                </div>
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