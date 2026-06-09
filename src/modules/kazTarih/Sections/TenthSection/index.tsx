import * as paths from "@modules/kazTarih/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ICardsParagraphs } from "@modules/kazTarih/types";
import type { ReactElement } from "react";
import "./style.css";

const TenthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="kt-tenth-section-content">
                <img
                    className="kt-background-img kt-tenth-bg-img"
                    src={paths.bg}
                    alt="background-img"
                />

                <div className="kt-tenth-section-header">
                    <span className="gr-font-family kt-title">
                        {content.title}
                    </span>

                    <div className="kt-description">{content.description}</div>
                </div>

                <div className="kt-tenth-section-cards-container">
                    {content.cards.map(
                        (cardData: ICardsParagraphs[], index: number) => (
                            <TextFormatterCard
                                key={`kt-tenth-section-card-index-${index}`}
                                className="kt-tenth-section-card"
                                items={cardData}
                            />
                        ),
                    )}
                </div>

                <DSNotification
                    className="kt-tenth-section-ds"
                    content={content.summaryCard}
                    iconWidth="36px"
                    cardGap="0.5rem"
                    backgroundColor="#E2E6EA"
                    textColor="#000000"
                    fontSize="20px"
                    style={{ maxWidth: "none", width: "70%" }}
                    borderColor="#E2E6EA"
                    iconColor="#AF2128"
                />
            </div>
        </section>
    );
};

export default TenthSection;
