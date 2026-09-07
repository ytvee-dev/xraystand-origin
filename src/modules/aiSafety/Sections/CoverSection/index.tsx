import React, { type ReactElement } from "react";
import * as paths from "@modules/aiSafety/locales/path.json";
import "./style.css";

interface AiSafetyProps {
    title: string;
}

interface CoverSectionProps {
    сontent: AiSafetyProps;
}

const CoverSection: React.FC<CoverSectionProps> = ({ сontent }): ReactElement => {
    return (
        <section className="ai-safety-cover-section">
            <img className="ai-safety-cover-bg" src={paths.coverBg} alt=""/>
            <h1 className="ai-safety-title">{сontent.title}</h1>
        </section>
    );
};

export default CoverSection;
