import Card from "@modules/seasons/components/Card";
import * as paths from "@modules/seasons/locales/paths.json";
import type { IBlockLabel } from "@modules/english/components/InfoBlock";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const FifthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
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
                        {content.description}
                    </span>
                </div>

                <div className="seasons-fifth-section-blocks-container">
                    {content.content.map(
                        (blockData: IBlockLabel, index: number) => (
                            <Card
                                key={`card-${index}`}
                                id={`seasons-fifth-section-card-${index}`}
                                imagePath={paths.spring.springAnimals[index]}
                                className="seasons-fifth-section-card"
                                title={blockData.subtitle}
                                description={blockData.description || ""}
                                season="spring"
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
