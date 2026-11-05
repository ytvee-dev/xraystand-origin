import React from "react";
import { type ReactElement } from "react";
import * as paths from "../../locales/paths.json";
import "./style.css";

interface SystemProps {
    firstTitle: string;
    secondTitle: string;
}

interface CoverSectionProps {
    content: SystemProps;
}

const CoverSection: React.FC<CoverSectionProps> = ({ content }): ReactElement => {
    return (
        <section className="physical-culture-cover-section">
            <img className="physical-culture-cover-bg" src={paths.coverBg} alt="" />

            <div className="physical-culture-cover-title-container">
                <h1 className="physical-culture-first-title">{content.firstTitle}</h1>
                <h1 className="physical-culture-second-title">{content.secondTitle}</h1>
            </div>
        </section>
    );
};

export default CoverSection;
