import Card from "@modules/seasons/components/Card";
import * as paths from "@modules/seasons/locales/paths.json";
import type { SeasonContent, SeasonsCard } from "@modules/seasons/types";
import type { ReactElement } from "react";
import "./style.css";

const FourthSection = ({
    title,
    description,
    content,
}: SeasonContent): ReactElement => {
    return (
        <div className="seasons-fourth-section">
            <div className="seasons-fourth-section-background-images">
                <img
                    id="seasons-fourth-section-img-1"
                    className="seasons-fourth-section-img"
                    src={paths.spring.lion}
                    alt="seasons-image"
                />
                <img
                    id="seasons-fourth-section-img-2"
                    className="seasons-fourth-section-img"
                    src={paths.spring.purpleLeaf}
                    alt="seasons-image"
                />
            </div>

            <div className="seasons-fourth-section-content">
                <div className="seasons-fourth-section-header">
                    <img
                        className="seasons-fourth-section-logo"
                        src={paths.spring.logo}
                        alt="seasons-image"
                    />

                    <h1 className="seasons-section-title">{title}</h1>

                    <span className="seasons-section-description">
                        {description}
                    </span>
                </div>

                <div className="seasons-fourth-section-blocks-container">
                    {content.map((blockData: SeasonsCard, index: number) => (
                        <Card
                            key={`seasons-card-${index}`}
                            className="seasons-fourth-section-card"
                            subTitle={blockData.subTitle}
                            description={blockData.description || ""}
                            season="spring"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FourthSection;
