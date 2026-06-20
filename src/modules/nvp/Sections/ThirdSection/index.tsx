import type { ICardData, IParagraphData } from "@modules/nvp/types";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const ThirdSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="nvp-third-section-content">
                <div className="nvp-third-section-header-block">
                    <span className="nvp-title">{content.title}</span>

                    <span className="nvp-description">
                        {content.description}
                    </span>
                </div>

                <div className="nvp-third-section-paragraphs-container">
                    {content.content.map(
                        (paragraphData: IParagraphData, index: number) => (
                            <div
                                className="nvp-third-section-paragraph"
                                key={`nvp-${index}`}
                            >
                                <div className="nvp-blood-cards-container">
                                    {paragraphData.content.map(
                                        (
                                            cardData: ICardData,
                                            index: number,
                                        ) => (
                                            <div
                                                className="nvp-third-section-card"
                                                key={`nvp-third-section-${index}`}
                                            >
                                                <img
                                                    className="nvp-third-section-card-img"
                                                    src={cardData.path}
                                                    alt="nvp-img"
                                                />

                                                <span className="nvp-third-section-card-text">
                                                    {cardData.description}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
