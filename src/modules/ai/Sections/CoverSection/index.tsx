import React from "react";
import * as paths from "../../locales/paths.json";
import { type ReactElement } from "react";
import "./style.css";

interface AiProps {
    title: string;
}

interface CoverSectionProps {
    content: AiProps;
}

const CoverSection: React.FC<CoverSectionProps> = ({ content }): ReactElement => {
    return (
        <section className="ai-cover-section">
            <img className="ai-cover-bg" src={paths.coverBg} alt="" />
            <h1 className="ai-title">{content.title}</h1>
        </section>
    );
};

export default CoverSection;
