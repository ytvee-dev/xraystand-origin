import React from "react";
import * as paths from "../../locales/path.json";
import { type ReactElement } from "react";
import "./style.css";

interface SystemProps {
    title: string;
}

interface CoverSectionProps {
    content: SystemProps;
}

const CoverSection: React.FC<CoverSectionProps> = ({ content }): ReactElement => {
    const [firstLine, secondLine] = content.title.split('\n');

    return (
        <section className="cardiovascular-system-cover-section">
            <img className="cardiovascular-system-cover-bg" src={paths.backgrounds.background_cover} alt="" />
            <img className="cardiovascular-system-cover-heart" src={paths.backgrounds.cover} alt="" />
            <img className="cardiovascular-system-cover-pulse" src={paths.backgrounds.cover_pulse} alt="" />

            <div className="cardiovascular-system-cover-title-container">
                <h1 className="title-first-line">{firstLine}</h1>
                <h1 className="title-second-line">{secondLine}</h1>
            </div>
        </section>
    );
};

export default CoverSection;
