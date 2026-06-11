import Carousel from "@modules/kazTarih/components/Carousel";
import * as paths from "@modules/kazTarih/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ICardsParagraphs } from "@modules/kazTarih/types";
import type { ReactElement } from "react";
import "./style.css";

const SeventhSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="kt-seventh-section-content">
                <img
                    className="kt-bg-img kt-bg-light-img"
                    src={paths.bg}
                    alt="background-img"
                />

                <div className="kt-seventh-section-header">
                    <span className="gr-font-family kt-title">
                        {content.title}
                    </span>

                    <span className="kt-description">
                        {content.description}
                    </span>
                </div>

                <div className="kt-seventh-section-block-with-image">
                    <img
                        className="kt-seventh-section-img"
                        src={paths.heroes}
                        alt="kt-img"
                    />

                    <div className="kt-seventh-section-blocks-container">
                        {content.historicalContext.map(
                            (textData: ICardsParagraphs, index: number) => (
                                <div
                                    className="kt-text-block-with-list"
                                    key={`kt-tb-${index}`}
                                >
                                    <span>{textData.description}</span>

                                    {textData.content.map(
                                        (text: string, index: number) => (
                                            <li key={`kt-li-${index}`}>
                                                {text}
                                            </li>
                                        ),
                                    )}
                                </div>
                            ),
                        )}
                    </div>
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
                                key={`kt-seventh-section-${index}`}
                                items={cardData}
                                theme="light"
                                style={{
                                    flex: "0 0 550px",
                                    color: "#744C32",
                                    backgroundColor: "#F4E0BF",
                                }}
                            />
                        ),
                    )}
                </Carousel>

                <DSNotification
                    className="kt-seventh-section-ds"
                    content={content.summaryCard}
                    iconWidth="36px"
                    cardGap="0.5rem"
                    backgroundColor="#F4E0BF"
                    borderColor="#724f35"
                    textColor="#744C32"
                    fontSize="20px"
                    style={{ maxWidth: "none", width: "80%" }}
                />
            </div>
        </section>
    );
};

export default SeventhSection;
