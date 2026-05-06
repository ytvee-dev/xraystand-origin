import * as paths from "@modules/seasons/locales/paths.json";
import ImageCard from "@modules/seasons/components/ImageCard";
import DSNotification from "@components/common/DSNotification";
import type { IBlockLabel } from "@modules/english/components/InfoBlock";
import type { IEnglishSectionProps } from "@modules/english/types";
import { SvgSpriteIds } from "@utils/constants";
import type { ReactElement } from "react";
import "./style.css";

const SixthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="seasons-sixth-section-background-images">
                <img
                    className="seasons-sixth-section-img"
                    src={paths.spring.yellowFlowers}
                    alt="seasons-image"
                />
            </div>

            <div className="seasons-sixth-section-content">
                <div className="seasons-sixth-section-first-part">
                    <h1 className="seasons-section-description">
                        {content[0].title}
                    </h1>

                    <div className="seasons-sixth-section-blocks-container">
                        {content[0].content.map(
                            (blockData: IBlockLabel, index: number) => (
                                <ImageCard
                                    key={index}
                                    id={`seasons-sixth-section-card-${index}`}
                                    imagePath={paths.spring.flowerCards}
                                    className="seasons-sixth-section-card"
                                    title={blockData.subtitle ?? ""}
                                    description={blockData.description ?? ""}
                                    season="spring"
                                />
                            ),
                        )}
                    </div>
                </div>

                <div className="seasons-sixth-section-second-part">
                    <h1 className="seasons-section-description">
                        {content[1].title}
                    </h1>

                    <div className="seasons-sixth-section-blocks-container">
                        {content[1].content.map(
                            (blockData: IBlockLabel, index: number) => (
                                <DSNotification
                                    key={index}
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
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SixthSection;
