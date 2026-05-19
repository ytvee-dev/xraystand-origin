import * as paths from "@modules/seasons/locales/paths.json";
import ImageCard from "@modules/seasons/components/ImageCard";
import DSNotification from "@components/common/DSNotification";
import type { IThirdSectionProps } from "../../AutumnSection/ThirdSection";
import type { SeasonsCard } from "@modules/seasons/types";
import { SvgSpriteIds } from "@utils/constants";
import type { ReactElement } from "react";
import "./style.css";

const SixthSection = ({ title, cards }: IThirdSectionProps): ReactElement => {
    const imgCards = cards.slice(0, 3);
    const blocks = cards.slice(4);

    return (
        <div className="seasons-sixth-section">
            <div className="seasons-sixth-section-background-images">
                <img
                    className="seasons-sixth-section-img"
                    src={paths.spring.yellowFlowers}
                    alt="seasons-image"
                />
            </div>

            <div className="seasons-sixth-section-content">
                <div className="seasons-sixth-section-first-part">
                    <span className="seasons-section-description">{title}</span>

                    <div className="seasons-sixth-section-blocks-container">
                        {imgCards.map(
                            (blockData: SeasonsCard, index: number) => (
                                <ImageCard
                                    key={`image-card-${index}`}
                                    id={`seasons-sixth-section-card-${index}`}
                                    imagePath={paths.spring.flowerCards}
                                    className="seasons-sixth-section-card"
                                    title={blockData.subTitle ?? ""}
                                    description={blockData.description ?? ""}
                                    season="spring"
                                />
                            ),
                        )}
                    </div>
                </div>

                <div className="seasons-sixth-section-second-part">
                    <span className="seasons-section-description">
                        {cards[4].title}
                    </span>

                    <div className="seasons-sixth-section-blocks-container">
                        {blocks.map((blockData: SeasonsCard, index: number) => (
                            <DSNotification
                                key={`block-${index}`}
                                className="seasons-sixth-section-notification-block"
                                content={blockData.description}
                                borderColor=""
                                textColor="#FFFFFF"
                                iconName={SvgSpriteIds.SEASONS_FLOWER}
                                iconColor="#FFFFFF"
                                backgroundColor="#59168B"
                                borderRadius="2.2rem"
                                cardGap="1.25rem"
                                padding="1.25rem 1.5rem"
                                iconWidth="4.063rem"
                                iconHeight="4.063rem"
                                alertStyle={{
                                    fontSize: "1.5rem",
                                    lineHeight: "1.625rem",
                                    letterSpacing: "0px",
                                    fontWeight: "bold",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthSection;
