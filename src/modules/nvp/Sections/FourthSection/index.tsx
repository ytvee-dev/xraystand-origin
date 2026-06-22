import type { ICardData, IParagraphData } from "@modules/nvp/types";
import type { IEnglishSectionProps } from "@modules/english/types";
import { usePageData } from "@hooks/usePageData";
import type { ReactElement } from "react";
import "./style.css";
import Carousel from "@modules/kazTarih/components/Carousel";

const FourthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    const { isMobile } = usePageData();
    return (
        <section className={className}>
            <div className="nvp-fourth-section-content">
                <div className="nvp-fourth-section-header-block">
                    <span className="nvp-title">{content.title}</span>

                    <span className="nvp-description">
                        {content.description}
                    </span>
                </div>

                <div className="nvp-fourth-section-paragraphs-container">
                    {content.content.map(
                        (paragraphData: IParagraphData, index: number) => (
                            <div
                                className="nvp-fourth-section-paragraph"
                                key={`nvp-${index}`}
                            >
                                <span className="nvp-fourth-section-paragraph-title">
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
                                                    className="nvp-fourth-section-card kaz-tarih-carousel-card"
                                                    key={`nvp-fourth-section-${index}`}
                                                    style={{ flex: "0 0 20%" }}
                                                >
                                                    <img
                                                        className="nvp-fourth-section-card-img"
                                                        src={cardData.path}
                                                        alt="nvp-img"
                                                    />

                                                    <span className="nvp-fourth-section-card-text">
                                                        {cardData.description}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </Carousel>
                                ) : (
                                    <div className="nvp-fourth-section-cards-container">
                                        {paragraphData.content.map(
                                            (
                                                cardData: ICardData,
                                                index: number,
                                            ) => (
                                                <div
                                                    className="nvp-fourth-section-card"
                                                    key={`nvp-fourth-section-${index}`}
                                                >
                                                    <img
                                                        className="nvp-fourth-section-card-img"
                                                        src={cardData.path}
                                                        alt="nvp-img"
                                                    />

                                                    <span className="nvp-fourth-section-card-text">
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

export default FourthSection;
