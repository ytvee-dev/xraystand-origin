import React, { type ReactElement } from "react";
import * as paths from "@modules/ai/locales/paths.json";
// import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard"
import { type AiProps } from "@modules/ai/types/index";
import "./style.css";

const FirstSection: React.FC<AiProps> = ({ content }): ReactElement => {
    return (
        <section className="ai-first-section">
            <img src={paths.otherSectionsBg} alt="" className="ai-first-bg"/>
            
            <img src={paths.figures.brown} alt="" className="ai-first-figure"/>
            <img src={paths.yellowRobot} alt="" className="ai-first-yellow-robot"/>

            <div className="ai-first-content-wrapper">
                <div className="ai-title-wrapper">
                    <h2 className="ai-first-title">{content.title}</h2>
                    <p className="ai-first-subtitle">{content.subTitle}</p>
                </div>

                {/* <div className="ai-first-cards-wrapper">
                    {content.content.map(card => (
                        <TextFormatterCard 
                            items={card}
                            theme="other"
                            className="ai-first-section-cards"
                            key={card.title}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default FirstSection;
