import type { ICardData, IParagraphData } from "@modules/nvp/types";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const FourthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
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
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
