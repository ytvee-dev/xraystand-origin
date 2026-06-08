import DSCard from "@components/common/Cards/DSCard";
import Carousel from "@modules/kazTarih/components/Carousel";
import * as paths from "@modules/kazTarih/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ICardData } from "@modules/kazTarih/types";
import { usePageData } from "@hooks/usePageData";
import type { ReactElement } from "react";
import "./style.css";

const EighthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    const { isMobile } = usePageData();

    return (
        <section className={className}>
            <div className="kt-eighth-section-content">
                <img
                    className="kt-background-img"
                    src={paths.bg}
                    alt="background-img"
                />

                <div className="kt-eighth-section-header">
                    <span className="gr-font-family kt-title">
                        {content.title}
                    </span>

                    <span className="kt-description">
                        {content.description}
                    </span>
                </div>

                {isMobile ? (
                    <Carousel style={{ padding: "0 2rem" }}>
                        {content.cards.map(
                            (cardData: ICardData, index: number) => (
                                <DSCard
                                    id={`kt-eighth-section-card-${index}`}
                                    key={`kt-card-index-${index}`}
                                    className="kaz-tarih-carousel-card ub-font-family"
                                    imageName={paths.smallCards[index]}
                                    title={cardData.title}
                                    label={cardData.description}
                                    backgroundColor="#3D2F2C"
                                    sxText={{
                                        titleColor: "#F9F8F7",
                                        labelColor: "#817065",
                                        titleFontSize: "20px",
                                        labelFontSize: "16px",
                                        titleLineHeight: "160%",
                                        labelLineHeight: "160%",
                                    }}
                                    imageHeight="300px"
                                />
                            ),
                        )}
                    </Carousel>
                ) : (
                    <div className="kt-eighth-section-cards-container">
                        {content.cards.map(
                            (cardData: ICardData, index: number) => (
                                <DSCard
                                    id={`kt-eighth-section-card-${index}`}
                                    key={`kt-card-index-${index}`}
                                    className="ub-font-family"
                                    imageName={paths.smallCards[index]}
                                    title={cardData.title}
                                    label={cardData.description}
                                    backgroundColor="#3D2F2C"
                                    sxText={{
                                        titleColor: "#F9F8F7",
                                        labelColor: "#817065",
                                        titleFontSize: "20px",
                                        labelFontSize: "16px",
                                        titleLineHeight: "160%",
                                        labelLineHeight: "160%",
                                    }}
                                    imageHeight="300px"
                                />
                            ),
                        )}
                    </div>
                )}

                <DSNotification
                    className="kt-eighth-section-ds"
                    content={content.summaryCard}
                    iconWidth="36px"
                    cardGap="0.5rem"
                    backgroundColor="#FEFCF3"
                    borderColor="#FEFCF3"
                    textColor="#3D2F2C"
                    fontSize="20px"
                    style={{ maxWidth: "none", width: "70%" }}
                    iconColor="#817065"
                />
            </div>
        </section>
    );
};

export default EighthSection;
