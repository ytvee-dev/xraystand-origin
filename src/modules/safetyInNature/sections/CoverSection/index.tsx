import React, { type ReactElement } from "react";
import * as paths from "@modules/safetyInNature/locales/paths.json";
import "./style.css";

interface CoverContent {
    title: string;
    description: string;
}

interface CoverSectionProps {
    content: CoverContent;
}

const CoverSection: React.FC<CoverSectionProps> = ({ content }): ReactElement => {
    return (
        <section className="safety-in-nature-cover-section">
            <img className="safety-in-nature-cover-bg" src={paths.coverBg} alt="" />

            <div className="safety-in-nature-content">
                <img src={paths.coverTree} alt="" className="safety-in-nature-cover-content-tree"/>

                <div className="safety-in-nature-text-wrapper">
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                </div>
            </div>
        </section>
    );
};

export default CoverSection;