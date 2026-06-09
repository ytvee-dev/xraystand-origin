import DSCard from "@components/common/Cards/DSCard";
import Carousel from "@modules/kazTarih/components/Carousel";
import * as paths from "@modules/kazTarih/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import type { ICardData, ICardsParagraphs } from "@modules/kazTarih/types";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const NinthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="kt-ninth-section-content">
                <img
                    className="kt-background-img kt-ninth-bg-img"
                    src={paths.bg}
                    alt="background-img"
                />

                <div className="kt-ninth-section-header">
                    <span className="gr-font-family kt-title">
                        {content.title}
                    </span>

                    <div className="kt-ninth-section-description-list">
                        {content.descriptionText.map(
                            (text: string, index: number) => (
                                <span
                                    key={`kt-ninth-section-description-${index}`}
                                    className="kt-ninth-section-description"
                                >
                                    {text}
                                </span>
                            ),
                        )}
                    </div>
                </div>

                <div className="kt-ninth-section-cards-container">
                    {content.cards.map((cardData: ICardData, index: number) => (
                        <DSCard
                            key={`kt-ninth-section-card-index-${index}`}
                            title={cardData.title}
                            label={cardData.description}
                            backgroundColor="#C1B399"
                            sxText={{
                                titleColor: "#F9F8F7",
                                labelColor: "#F9F8F7",
                                titleFontSize: "20px",
                                labelFontSize: "16px",
                                titleLineHeight: "160%",
                                labelLineHeight: "150%",
                            }}
                            imageHeight="300px"
                        />
                    ))}
                </div>

                <DSNotification
                    className="kt-ninth-section-ds"
                    content={content.summaryCard}
                    iconWidth="36px"
                    cardGap="0.5rem"
                    backgroundColor="#FEFCF3"
                    textColor="#907D68"
                    fontSize="20px"
                    style={{ maxWidth: "none", width: "60%" }}
                    borderColor="#FEFCF3"
                    iconColor="#907D68"
                />

                <Carousel
                    style={{
                        padding: "0 4rem",
                    }}
                >
                    {content.secondCards.map(
                        (cardData: ICardsParagraphs[], index: number) => (
                            <TextFormatterCard
                                className="kaz-tarih-carousel-card"
                                key={`kt-ninth-section-${index}`}
                                items={cardData}
                                style={{
                                    flex: "0 0 550px",
                                    color: "#F9F8F7",
                                    backgroundColor: "#8D714C",
                                }}
                            />
                        ),
                    )}
                </Carousel>

                <DSNotification
                    className="kt-ninth-section-ds"
                    content={content.secondSummaryCard}
                    iconWidth="36px"
                    cardGap="0.5rem"
                    backgroundColor="#FEFCF3"
                    textColor="#907D68"
                    fontSize="20px"
                    style={{ maxWidth: "none", width: "60%" }}
                    borderColor="#FEFCF3"
                    iconColor="#906877"
                />
            </div>
        </section>
    );
};

export default NinthSection;
