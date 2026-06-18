import * as paths from "@modules/nvp/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const FirstSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="nvp-first-section-content">
                <div className="nvp-first-section-header-block">
                    <span className="nvp-title">{content.title}</span>

                    <span className="nvp-description">
                        {content.description}
                    </span>
                </div>

                <div className="nvp-first-section-first-part">
                    <div className="nvp-first-section-part-header">
                        <span className="nvp-title">
                            {content.content.firstPart.title}
                        </span>

                        <span className="nvp-description">
                            {content.content.firstPart.description}
                        </span>
                    </div>

                    <div className="nvp-first-section-flags-container">
                        {paths.flags.map((src: string, index: number) => (
                            <img
                                key={`nvp-flag-${index}`}
                                className="nvp-first-section-flag"
                                src={src}
                                alt="nvp-img"
                            />
                        ))}
                    </div>
                </div>

                <div className="nvp-first-section-second-part">
                    <div className="nvp-first-section-part-header">
                        <span className="nvp-title">
                            {content.content.secondPart.title}
                        </span>

                        <span className="nvp-description">
                            {content.content.secondPart.description}
                        </span>
                    </div>

                    <div className="nvp-first-section-emblem-container">
                        {paths.emblems.map((src: string, index: number) => (
                            <div
                                className="nvp-emblem-card"
                                key={`nvp-emblem-${index}`}
                            >
                                <img
                                    className="nvp-first-section-emblem-img"
                                    src={src}
                                    alt="nvp-img"
                                />

                                <span>{content.emblemsContent[index]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
