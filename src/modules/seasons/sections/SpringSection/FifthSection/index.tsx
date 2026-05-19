import Card from "@modules/seasons/components/Card";
import * as paths from "@modules/seasons/locales/paths.json";
import type { SeasonContent, SeasonsCard } from "@modules/seasons/types";
import type { ReactElement } from "react";
import "./style.css";

const FifthSection = ({
    description,
    content,
}: SeasonContent): ReactElement => {
    return (
        <div className="seasons-fifth-section">
            <div className="seasons-fifth-section-background-images">
                <img
                    id="seasons-fifth-section-img-1"
                    className="seasons-fifth-section-img"
                    src={paths.spring.greenLeaf}
                    alt="seasons-image"
                />
                <img
                    id="seasons-fifth-section-img-2"
                    className="seasons-fifth-section-img"
                    src={paths.spring.yellowFlowersInPot}
                    alt="seasons-image"
                />
            </div>

            <div className="seasons-fifth-section-content">
                <div className="seasons-fifth-section-header">
                    <span className="seasons-section-description">
                        {description}
                    </span>
                </div>

                <div className="seasons-fifth-section-blocks-container">
                    {content.map((blockData: SeasonsCard, index: number) => (
                        <Card
                            key={`card-${index}`}
                            id={`seasons-fifth-section-card-${index}`}
                            imagePath={paths.spring.springAnimals[index]}
                            className="seasons-fifth-section-card"
                            title={blockData.subTitle}
                            description={blockData.description || ""}
                            season="spring"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FifthSection;
