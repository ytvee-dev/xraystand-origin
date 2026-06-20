import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";
import type { ICardData } from "@modules/nvp/types";

const SixthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="nvp-sixth-section-content">
                <div className="nvp-header nvp-title">{content.title}</div>

                <div className="nvp-sixth-section-first-part">
                    <div className="nvp-sixth-section-part-header">
                        <span className="nvp-title">
                            {content.content.firstPart.title}
                        </span>

                        <span className="nvp-description">
                            {content.content.firstPart.description}
                        </span>
                    </div>

                    <div className="nvp-sixth-section-blocks-container">
                        {content.content.firstPart.content.map(
                            (cardData: ICardData, index: number) => (
                                <div
                                    id={`nvp-sixth-section-block-${index}`}
                                    className="nvp-sixth-section-block"
                                    key={`nvp-sixth-section-block-${index}`}
                                >
                                    <div className="nvp-sixth-section-text-container">
                                        {cardData.content?.map(
                                            (text: string, index: number) => (
                                                <span
                                                    id={`nvp-sixth-section-text-${index}`}
                                                    key={`nvp-img-${index}`}
                                                >
                                                    {text}
                                                </span>
                                            ),
                                        )}
                                    </div>

                                    <img
                                        className="nvp-sixth-section-block-img"
                                        src={cardData.path}
                                        alt="nvp-img"
                                    />
                                </div>
                            ),
                        )}
                    </div>
                </div>

                <div className="nvp-sixth-section-second-part">
                    <div className="nvp-sixth-section-part-header">
                        <span className="nvp-title">
                            {content.content.secondPart.title}
                        </span>

                        <span className="nvp-description">
                            {content.content.secondPart.description}
                        </span>
                    </div>

                    {content.content.secondPart.content.map(
                        (cardData: ICardData, index: number) => (
                            <div
                                id={`nvp-sixth-section-card-${index}`}
                                className="nvp-sixth-section-card"
                                key={`nvp-sixth-section-card-${index}`}
                            >
                                <div className="nvp-sixth-section-text-container">
                                    {cardData.content?.map(
                                        (text: string, index: number) => (
                                            <span key={`nvp-img-${index}`}>
                                                {text}
                                            </span>
                                        ),
                                    )}
                                </div>

                                <img
                                    className="nvp-sixth-section-card-img"
                                    src={cardData.path}
                                    alt="nvp-img"
                                />
                            </div>
                        ),
                    )}
                </div>

                <div className="nvp-sixth-section-additional-info-container">
                    {content.additionalInfo.map(
                        (text: string, index: number) => (
                            <span key={`nvp-img-${index}`}>{text}</span>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default SixthSection;
