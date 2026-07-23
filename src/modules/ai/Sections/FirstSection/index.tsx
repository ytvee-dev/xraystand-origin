import React, { type ReactElement } from "react";
import * as paths from "@modules/ai/locales/paths.json";
import { type AiProps } from "@modules/ai/types/index";
import "./style.css";

const FirstSection: React.FC<AiProps> = ({ content }): ReactElement => {
    return (
        <section className="ai-first-section">
            <img src={paths.otherSectionsBg} alt="" />
            
            <img src={paths.figures.brown} alt="" />
            <img src={paths.yellowRobot} alt="" />

            <div className="ai-first-content-wrapper">
                <h2>{content.title}</h2>
                <p>{content.subTitle}</p>

                <div className="ai-first-cards-wrapper">

                </div>
            </div>
        </section>
    );
};

export default FirstSection;
