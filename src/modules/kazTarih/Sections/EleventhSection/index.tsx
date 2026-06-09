import Carousel from "@modules/kazTarih/components/Carousel";
import * as paths from "@modules/kazTarih/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ICardsParagraphs } from "@modules/kazTarih/types";
import type { ReactElement } from "react";
import "./style.css";

const EleventhSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="kt-eleventh-section-content">
                <img
                    className="kt-background-img"
                    src={paths.bg}
                    alt="background-im
                g"
                />

                <div className="kt-eleventh-section-header">
                    <span className="gr-font-family kt-title">
                        {content.title}
                    </span>

                    <span className="kt-eleventh-section-description">
                        {content.description}
                    </span>
                </div>

                <Carousel
                    style={{
                        padding: "0 2rem 0 9rem",
                    }}
                >
                    {content.cards.map(
                        (cardData: ICardsParagraphs[], index: number) => (
                            <TextFormatterCard
                                className="kaz-tarih-carousel-card"
                                key={`kt-eleventh-section-${index}`}
                                items={cardData}
                                theme="light"
                                style={{
                                    flex: "0 0 291px",
                                    color: "#000000",
                                    backgroundColor: "#E2E6EA",
                                }}
                            />
                        ),
                    )}
                </Carousel>

                <DSNotification
                    className="kt-eleventh-section-ds"
                    content={content.summaryCard}
                    iconWidth="36px"
                    cardGap="0.5rem"
                    backgroundColor="#E2E6EA"
                    borderColor="#E2E6EA"
                    textColor="#000000"
                    fontSize="20px"
                    style={{ maxWidth: "none", width: "80%" }}
                    iconColor="#AF2128"
                />
            </div>
        </section>
    );
};

export default EleventhSection;
