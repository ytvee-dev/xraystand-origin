import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const SecondSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="nvp-second-section-content">
                <div className="nvp-second-section-header-block">
                    <span className="nvp-title">{content.title}</span>

                    <span className="nvp-description">
                        {content.description}
                    </span>
                </div>

                <div className="nvp-second-section-paragraphs-container">
                    {content.content.map((paragraphData, index: number) => (
                        <div
                            className="nvp-second-section-paragraph"
                            key={`nvp-${index}`}
                        >
                            <span className="nvp-second-section-paragraph-title">
                                {paragraphData.title}
                            </span>

                            <div className="nvp-shoulder-cards-container">
                                {paragraphData.content.map(
                                    (cardData, index: number) => (
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
