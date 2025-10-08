import React, {type ReactElement} from "react";
import type {HomeSection} from "../../types";
import {usePageData} from "@hooks/usePageData.ts";
import * as images from "@modules/home/locales/paths.json";
import "./style.css";

interface AboutSectionProps {
    content: HomeSection;
}

const TurnIcon: React.FC<{ size: number, color: string }> = ({size, color}) => (
    <svg id="svg" fill={color} width={`${size}px`} height={`${size}px`} version="1.1" viewBox="144 144 512 512"
         xmlns="http://www.w3.org/2000/svg">
        <g id="IconSvg_bgCarrier" stroke-width="0"></g>
        <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
        <g id="IconSvg_iconCarrier">
            <g xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m400 169.09c-127.53 0-230.91 103.39-230.91 230.91s103.39 230.91 230.91 230.91 230.91-103.39 230.91-230.91c-0.003906-127.53-103.39-230.91-230.91-230.91zm0 440.83c-115.98 0-209.92-93.938-209.92-209.92 0-115.98 93.938-209.92 209.92-209.92 115.98 0 209.92 93.941 209.92 209.92-0.003906 115.98-93.941 209.92-209.92 209.92z"></path>
                <path
                    d="m400 358.02c5.7734 0 10.496-4.7227 10.496-10.496v-104.96c0-5.7734-4.7227-10.496-10.496-10.496s-10.496 4.7227-10.496 10.496v104.96c0 5.7734 4.7227 10.496 10.496 10.496z"></path>
                <path
                    d="m451.95 290.84c-5.2461-2.625-11.547 0-14.168 5.2461-2.625 5.2461 0 11.547 5.2461 14.168 34.113 16.273 56.68 51.434 56.68 89.746 0 55.105-44.609 99.711-99.711 99.711-55.105 0-99.711-44.609-99.711-99.711 0-38.309 22.566-73.473 57.203-90.266 5.2461-2.625 7.3477-8.9219 5.2461-14.168-2.625-5.2461-8.9219-7.3477-14.168-5.2461-41.988 20.461-69.277 63.496-69.277 109.68 0 66.648 54.055 120.7 120.7 120.7 66.648 0 120.7-54.055 120.7-120.7 0.003906-46.184-27.285-89.219-68.746-109.16z"></path>
            </g>

        </g>
    </svg>
);

const AboutSection: React.FC<AboutSectionProps> = ({content}): ReactElement => {
    const [isLightOn, setLightOn] = React.useState<boolean>(false);
    const [currentStandsID, setCurrentStandsID] = React.useState<number[]>([4, 5]);
    const {currentLocale} = usePageData();
    const nextButtonText = currentLocale === 'ru' ? "Следующий" : "Келесі";

    const handleNextImages = () => {
        if (currentStandsID[0] === 4 && currentStandsID[1] === 5) return setCurrentStandsID([0, 1]);
        setCurrentStandsID(([a, b]) => [a + 2, b + 2]);
    };

    const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setLightOn((prev) => !prev);
    };

    return (
        <section id="home-about" className="home-section about-section">
            <div className={`about-stands ${isLightOn ? "light-on" : "light-off"}`}>
                <div className="lamp-overlay" aria-hidden>
                    <div className="lamp">
                        <div className="gonna-give-light"/>
                    </div>
                </div>

                <div className="about-stands-content">
                    <div className="about-stands-img-wrapper">
                        <img
                            className="about-img"
                            src={images.stands[currentStandsID[0]]}
                            alt="stand"
                            style={{opacity: 0.6}}
                        />
                        <img
                            className="about-img-turned"
                            src={images.stands[currentStandsID[1]]}
                            alt="stand"
                            style={{opacity: isLightOn ? 0.95 : 0}}
                        />
                    </div>

                    <div className="about-stands-controls">
                        <div
                            className={`toggle ${isLightOn ? "toggle-on" : ""}`}
                            id="switch"
                            onClick={handleToggle}
                            role="switch"
                            aria-checked={isLightOn}
                            aria-label="lamp"
                        >
                            <div className="toggle-text-off">
                                Выкл
                            </div>
                            <div className="glow-comp"/>
                            <div className="toggle-button"></div>
                            <div className="toggle-text-on">
                                {isLightOn && <TurnIcon size={24} color='rgba(255, 255, 255, 0.8)'/>}
                            </div>
                        </div>

                        <button className="btn-next" onClick={handleNextImages}>
                            {nextButtonText}
                        </button>
                    </div>

                    <div className="about-stands-text">
                        <h2>{content.title}</h2>
                        <p>{content.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
