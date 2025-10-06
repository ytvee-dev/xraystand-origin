import React, {type ReactElement, useEffect} from "react";
import type {HomeSection} from "../../types";
import * as images from "@modules/home/locales/paths.json";
import "./style.css";

interface AboutSectionProps {
    content: HomeSection;
}

const AboutSection: React.FC<AboutSectionProps> = ({content}): ReactElement => {
    const [isLightOn, setLightOn] = React.useState<boolean>(false);
    const [currentStandsID, setCurrentStandsID] = React.useState<number[]>([4, 5]);

    const handleNextImages = () => {
        if (currentStandsID[0] === 4 && currentStandsID[1] === 5) {
            return setCurrentStandsID([0, 1]);
        }
        setCurrentStandsID(
            [
                currentStandsID[0] + 2,
                currentStandsID[1] + 2,
            ]
        );
    }

    useEffect(() => {
        const toggle = document.getElementById('switch');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.toggle('toggle-on');
                setLightOn(prev => !prev);
            });
        }
    }, []);

    return (
        <section id="home-about" className="home-section about-section">
            <div className="lamp-container">
                <div className='toggle' id='switch'>
                    <div className='toggle-text-off'>Выкл</div>
                    <div className='glow-comp'></div>
                    <div className='toggle-button'></div>
                    <div className='toggle-text-on'>Вкл</div>
                </div>

                <div className='about-stands-next-button'>
                    <button onClick={handleNextImages}>Следующий</button>
                </div>

                <div id="lamp">
                    <div className="lamp">
                        <div className="gonna-give-light"></div>
                    </div>
                </div>
            </div>

            <div className={`about-stands ${isLightOn ? 'light-on' : 'light-off'}`}>
                <div className='about-stands-img-wrapper'>
                    <img
                        className='about-img' 
                        src={images.stands[currentStandsID[0]]}
                        alt='stand'
                        style={{opacity: 0.6}}
                    />
                    <img 
                        className='about-img-turned'
                        src={images.stands[currentStandsID[1]]}
                        alt='stand'
                        style={{ opacity: isLightOn ? 0.95 : 0 }}
                    />
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