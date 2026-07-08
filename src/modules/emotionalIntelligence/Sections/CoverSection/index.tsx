import React from "react";
import * as paths from "../../locales/path.json";
import { type ReactElement } from "react";
import "./style.css";

interface CoverSectionProps {
    backgroundImage: string;
    content: EmotionProps;
}

interface EmotionProps {
    title: string;
    titleHighlight?: string;
    description: string[];
}

const CoverSection: React.FC<CoverSectionProps> = ({ backgroundImage, content }: CoverSectionProps & { content: EmotionProps }): ReactElement => {
    return (
        <div className="ei-cover-section">
            <img className="ei-img-circle" src={paths.backgrounds.circles_group_1} alt="" />
            <img className="ei-img-circle-blue" src={paths.backgrounds.blue_circle} alt="" />

            <div className="ei-right-content">
                <img className="ei-cover-background" src={backgroundImage} alt="" />
            </div>

            <div className="ei-left-content">
                <h1 className="ei-cover-title">
                    <span className="ei-cover-title-highlight">
                        {content.titleHighlight}
                    </span>{" "}
                    {content.title}
                </h1>

                <p className="ei-cover-description">{content.description[0]}</p>

                <p className="ei-cover-description">{content.description[1]}</p>
            </div>
        </div>
    )
}

export default CoverSection;