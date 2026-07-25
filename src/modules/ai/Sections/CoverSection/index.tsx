import React from "react";
import * as paths from "../../locales/paths.json";
import "./style.css";

interface AiProps {
    title: string;
}

export interface CoverSectionProps {
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
