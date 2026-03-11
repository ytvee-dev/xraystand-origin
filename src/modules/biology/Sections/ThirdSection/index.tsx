import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";
import DSNotification from "@components/common/DSNotification";
import { SvgSpriteIds } from "@utils/constants";

const ThirdSection: React.FC<BiologySectionProps> = ({
    className,
}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <img
                className="biology-third-section-background"
                id="biology-third-section-background-svg-1"
                src={paths.backgrounds.other[2]}
                alt="image"
            />
            <img
                className="biology-third-section-background"
                id="biology-third-section-background-svg-2"
                src={paths.backgrounds.other[1]}
                alt="image"
            />
            <img
                className="biology-third-section-background"
                id="biology-third-section-background-svg-3"
                src={paths.backgrounds.other[2]}
                alt="image"
            />
            <img
                className="biology-third-section-background"
                id="biology-third-section-background-svg-4"
                src={paths.backgrounds.other[2]}
                alt="image"
            />

            <div className="cell-division-header-block">
                <span className="title">
                    {textContent.cellDivisionSection.title}
                </span>
                <div className="description">
                    {textContent.cellDivisionSection.description}
                </div>
            </div>

            <div className="biology-third-section-cards-grid">
                {textContent.cellDivisionSection.content[0].map(
                    (card, index) => (
                        <div
                            key={card.title}
                            className="biology-third-section-card"
                            id={`biology-third-section-card-${index + 1}`}
                        >
                            <span className="card-title">{card.title}</span>

                            <div className="card-text-section">
                                <div className="card-description">
                                    {card.description}
                                    <div className="card-sub-description">
                                        {card.subDescription?.title}
                                        <ul>
                                            {card.subDescription?.subDescriptionArray.map(
                                                (descriptionArrayItem) => (
                                                    <li
                                                        key={
                                                            descriptionArrayItem
                                                        }
                                                    >
                                                        {descriptionArrayItem}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </div>

            <DSNotification
                content={
                    <div className="biology-third-section-notification-content">
                        <div>
                            {
                                textContent.cellDivisionSection.content[1][0]
                                    .description
                            }
                        </div>
                        <div>
                            {
                                textContent.cellDivisionSection.content[1][1]
                                    .description
                            }
                        </div>
                        <ul className="biology-third-section-notification-content-list">
                            <li>
                                {
                                    textContent.cellDivisionSection
                                        .content[1][2].description
                                }
                            </li>
                            <li>
                                {
                                    textContent.cellDivisionSection
                                        .content[1][3].description
                                }
                            </li>
                            <li>
                                {
                                    textContent.cellDivisionSection
                                        .content[1][4].description
                                }
                            </li>
                            <li>
                                {
                                    textContent.cellDivisionSection
                                        .content[1][5].description
                                }
                            </li>
                        </ul>
                        <div>
                            {
                                textContent.cellDivisionSection.content[1][6]
                                    .description
                            }
                        </div>
                    </div>
                }
                className="biology-third-section-notification"
                iconName={SvgSpriteIds.BIOLOGY_CELL}
                backgroundColor="#30695A"
                textColor="#FFFFFF"
                iconColor="#FFFFFF"
                borderRadius="2.5rem"
                alertStyle={{ padding: "0", width: "fit-content" }}
                padding="0px 0px"
                iconWidth="2.4375rem"
                iconHeight="2.4375rem"
                cardGap="24px"
            />
        </section>
    );
};

export default ThirdSection;
