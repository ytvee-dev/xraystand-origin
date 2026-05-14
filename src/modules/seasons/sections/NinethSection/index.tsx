import * as paths from "@modules/seasons/locales/paths.json";
import ImageCard from "@modules/seasons/components/ImageCard";
import DSNotification from "@components/common/DSNotification";
import type { IBlockLabel } from "@modules/english/components/InfoBlock";
import type { IEnglishSectionProps } from "@modules/english/types";
import { SvgSpriteIds } from "@utils/constants";
import type { ReactElement } from "react";
import "./style.css";

const NinthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="seasons-ninth-section-content">
                <div className="seasons-ninth-section-first-part">
                    <h1 className="seasons-section-description">
                        {content.firstPart.title}
                    </h1>

                    <div className="seasons-ninth-section-blocks-container">
                        {content.firstPart.content.map(
                            (blockData: IBlockLabel, index: number) => (
                                <ImageCard
                                    key={`image-card-${index}`}
                                    id={`seasons-ninth-section-card-${index}`}
                                    imagePath={paths.summer.sun}
                                    className="seasons-ninth-section-card"
                                    title={blockData.subtitle ?? ""}
                                    description={blockData.description ?? ""}
                                    season="summer"
                                />
                            ),
                        )}
                    </div>
                </div>

                <div className="seasons-ninth-section-second-part">
                    <h1 className="seasons-section-description">
                        {content.secondPart.title}
                    </h1>

                    <div className="seasons-ninth-section-blocks-container">
                        {content.secondPart.content.map(
                            (blockData: IBlockLabel, index: number) => (
                                <DSNotification
                                    key={`block-${index}`}
                                    className="seasons-ninth-section-notification-block"
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
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NinthSection;
