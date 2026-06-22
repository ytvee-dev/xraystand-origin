import Carousel from "@modules/kazTarih/components/Carousel";
import type { ICardData, IParagraphData } from "@modules/nvp/types";
import type { IEnglishSectionProps } from "@modules/english/types";
import { usePageData } from "@hooks/usePageData";
import type { ReactElement } from "react";
import "./style.css";

const SecondSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    const { isMobile } = usePageData();

    return (
        <section className={className}>
            <div className="nvp-second-section-content nvp-frame">
                <div className="nvp-second-section-header-block nvp-frame">
                    <span className="nvp-title">{content.title}</span>

                    <span className="nvp-description">
                        {content.description}
                    </span>
                </div>

                <div className="nvp-second-section-paragraphs-container">
                    {content.content.map(
                        (paragraphData: IParagraphData, index: number) => (
                            <div
                                className="nvp-second-section-paragraph"
                                key={`nvp-${index}`}
                            >
                                <span className="nvp-second-section-paragraph-title">
                                    {paragraphData.title}
                                </span>

                                {isMobile ? (
                                    <Carousel
                                        style={{
                                            padding: "1rem",
                                            backgroundColor: "#292c26",
                                            border: "0.0625rem solid #ffffff",
                                        }}
                                    >
                                        {paragraphData.content.map(
                                            (
                                                cardData: ICardData,
                                                index: number,
                                            ) => (
                                                <div
                                                    className="nvp-second-section-card kaz-tarih-carousel-card"
                                                    key={`nvp-second-section-${index}`}
                                                    style={{ flex: "0 0 30%" }}
                                                >
                                                    <img
                                                        className="nvp-second-section-card-img"
                                                        src={cardData.path}
                                                        alt="nvp-img"
                                                    />

                                                    <span className="nvp-second-section-card-text">
                                                        {cardData.description}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </Carousel>
                                ) : (
                                    <div className="nvp-shoulder-cards-container">
                                        {paragraphData.content.map(
                                            (
                                                cardData: ICardData,
                                                index: number,
                                            ) => (
                                                <div
                                                    className="nvp-second-section-card"
                                                    key={`nvp-second-section-${index}`}
                                                >
                                                    <img
                                                        className="nvp-second-section-card-img"
                                                        src={cardData.path}
                                                        alt="nvp-img"
                                                    />

                                                    <span className="nvp-second-section-card-text">
                                                        {cardData.description}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                )}
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
