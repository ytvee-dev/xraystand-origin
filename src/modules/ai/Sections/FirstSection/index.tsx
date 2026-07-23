import React from "react";
import * as paths from "@modules/ai/locales/paths.json";
import * as textContentKz from "@modules/ai/locales/kaz.json";
import * as textContentRu from "@modules/ai/locales/rus.json";
import { useLocaleContent } from "@hooks/useLocale";
import "./style.css";

const FirstSection: React.FC = () => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className="ai-first-section">
            <img src={paths.otherSectionsBg} alt="" />
            <img src={paths.figures.brown} alt="" />
            <img src={paths.yellowRobot} alt="" />

            <div className="ai-first-content-wrapper">
                <h2>{textContent.firstSection.title}</h2>
                <p>{textContent.firstSection.subTitle}</p>
            </div>
        </section>
    );
};

export default FirstSection;
