import * as paths from "@modules/kazTarih/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const TwelfthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="kt-twelfth-section-content">
                <img
                    className="kt-background-img"
                    src={paths.bg}
                    alt="background-img"
                />

                <div className="kt-twelfth-section-header">
                    <span className="gr-font-family kt-title">
                        {content.title}
                    </span>

                    <span className="kt-twelfth-section-description">
                        {content.description}
                    </span>
                </div>

                <div className="kt-twelfth-section-blocks-container">
                    {content.cards.map((cardText: string, index: number) => (
                        <div
                            className="kt-twelfth-section-block"
                            key={`kt-twelfth-card-${index}`}
                        >
                            {cardText}
                        </div>
                    ))}
                </div>

                <DSNotification
                    className="kt-twelfth-section-ds"
                    content={content.summaryCard}
                    iconWidth="36px"
                    cardGap="0.5rem"
                    backgroundColor="#FEFEFE"
                    borderColor="#FEFEFE"
                    textColor="#28A9E1"
                    fontSize="20px"
                    style={{ maxWidth: "none", width: "80%" }}
                    iconColor="#28A9E1"
                />
            </div>
        </section>
    );
};

export default TwelfthSection;
