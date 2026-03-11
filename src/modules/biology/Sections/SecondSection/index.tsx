import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";

const SecondSection: React.FC<BiologySectionProps> = ({
    className,
}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <img
                id="biology-second-section-background-svg-1"
                src={paths.backgrounds.other[1]}
                alt="image"
            />
            <img
                id="biology-second-section-background-svg-2"
                src={paths.backgrounds.other[1]}
                alt="image"
            />

            <div className="cell-structure-header-block">
                <span className="title">
                    {textContent.featuresSection.title}
                </span>
                <div className="description">
                    {textContent.featuresSection.description}
                </div>
            </div>

            <div className="biology-second-section-cards-grid">
                {paths.cards.secondSectionCards.map((src, index) => (
                    <div
                        className="biology-second-section-card"
                        key={textContent.featuresSection.content[index].title}
                    >
                        <img
                            className="card-image"
                            src={src}
                            alt="card-image"
                        />

                        <div className="card-text-section">
                            <span className="card-title">
                                {
                                    textContent.featuresSection.content[index]
                                        .title
                                }
                            </span>
                            <div className="card-description">
                                {
                                    textContent.featuresSection.content[index]
                                        .description
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SecondSection;
