import Carousel from "@modules/kazTarih/components/Carousel";
import * as paths from "@modules/kazTarih/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ICardsParagraphs } from "@modules/kazTarih/types";
import type { ReactElement } from "react";
import "./style.css";

const ThirdSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="kt-third-section-content">
                <img
                    className="kt-background-img"
                    src={paths.bg}
                    alt="background-im
                g"
                />

                <div className="kt-third-section-background-images">
                    <img
                        id="kt-third-section-background-img-0"
                        src={paths.axe}
                        alt="kt-img"
                    />
                    <img
                        id="kt-third-section-background-img-1"
                        src={paths.spearAndArrows}
                        alt="kt-img"
                    />
                    <img
                        id="kt-third-section-background-img-2"
                        src={paths.sword}
                        alt="kt-img"
                    />
                </div>

                <div className="kt-third-section-header">
                    <span className="gr-font-family kt-title">
                        {content.title}
                    </span>

                    <span className="kt-description">
                        {content.description}
                    </span>
                </div>

                <Carousel
                    style={{
                        padding: "0 4rem",
                    }}
                >
                    {content.cards.map(
                        (cardData: ICardsParagraphs[], index: number) => (
                            <TextFormatterCard
                                className="kaz-tarih-carousel-card"
                                key={`kt-third-section-${index}`}
                                items={cardData}
                                theme="light"
                                style={{
                                    flex: "0 0 667px",
                                    color: "#FFFFFF",
                                }}
                            />
                        ),
                    )}
                </Carousel>

                <DSNotification
                    className="kt-third-section-ds"
                    content={content.summaryCard}
                    iconWidth="36px"
                    cardGap="0.5rem"
                    backgroundColor="#D2AF83"
                    borderColor="#724F35"
                    textColor="#FFFFFF"
                    fontSize="20px"
                    borderRadius="0"
                    style={{ maxWidth: "none", width: "70%" }}
                    iconColor="#FFFFFF"
                />
            </div>
        </section>
    );
};

export default ThirdSection;
