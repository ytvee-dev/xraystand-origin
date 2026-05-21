import * as paths from "@modules/seasons/locales/paths.json";
import ImageCard from "@modules/seasons/components/ImageCard";
import DSNotification from "@components/common/DSNotification";
import type { ISecondSectionProps } from "../../AutumnSection/SecondSection";
import type { SeasonsCard } from "@modules/seasons/types";
import { SvgSpriteIds } from "@utils/constants";
import type { ReactElement } from "react";
import "./style.css";

const ThirdSection = ({ title, cards }: ISecondSectionProps): ReactElement => {
    const imgCards = cards.slice(0, 3);

    const blocks = cards.slice(4);

    return (
        <div className="seasons-third-section">
            <img
                alt=""
                className="seasons-summer-textured-bg"
                src="https://res.cloudinary.com/dy6zg8dhs/image/upload/v1776683839/cover_bg_1_1_vxzrdh.webp"
            />

            <div className="seasons-third-section-content">
                <div className="seasons-third-section-first-part">
                    <h1 className="seasons-section-description">{title}</h1>

                    <div className="seasons-third-section-blocks-container">
                        {imgCards.map(
                            (blockData: SeasonsCard, index: number) => (
                                <ImageCard
                                    key={`image-card-${index}`}
                                    id={`seasons-third-section-card-${index}`}
                                    imagePath={paths.summer.sun}
                                    className="seasons-third-section-card"
                                    title={blockData.subTitle ?? ""}
                                    description={blockData.description ?? ""}
                                    season="summer"
                                />
                            ),
                        )}
                    </div>
                </div>

                <div className="seasons-third-section-second-part">
                    <h1 className="seasons-section-description">
                        {cards[3].title}
                    </h1>

                    <div className="seasons-third-section-blocks-container">
                        {blocks.map((blockData: SeasonsCard, index: number) => (
                            <DSNotification
                                key={`block-${index}`}
                                className="seasons-third-section-notification-block"
                                content={blockData.description}
                                borderColor=""
                                textColor="#FFFFFF"
                                iconName={SvgSpriteIds.SUMMER_SUN}
                                iconColor="#FFFFFF"
                                backgroundColor="#0D542B"
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

export default ThirdSection;
