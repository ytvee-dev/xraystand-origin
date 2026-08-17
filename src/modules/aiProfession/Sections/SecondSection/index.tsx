import React, { type ReactElement } from "react";
import SectionHeadingPanel from "../components/SectionHeadingPanel";
import * as paths from "../../locales/path.json";
import "./style.css";

interface SecondSectionListItem {
    label: string;
    description: string;
}

interface SecondSectionCard {
    title: string;
    paragraphs: string[];
    list?: SecondSectionListItem[];
    conclusion?: string;
}

interface SecondSectionContent {
    title: string;
    subTitle: string[];
    content: SecondSectionCard[][];
}

interface SecondSectionProps {
    content: SecondSectionContent;
}

const SecondSection: React.FC<SecondSectionProps> = ({ content }): ReactElement => {
    const cards = content.content.flat();
    const cardImages = paths.images.secondSection;

    return (
        <section className="ai-profession-second-section">
            <img
                className="ai-profession-second-circuit ai-profession-second-circuit-top"
                src={paths.backgrounds.secondSection[0]}
                alt=""
                aria-hidden="true"
            />
            <img
                className="ai-profession-second-circuit ai-profession-second-circuit-bottom"
                src={paths.backgrounds.secondSection[1]}
                alt=""
                aria-hidden="true"
            />

            <div className="ai-profession-second-content">
                <div className="ai-profession-second-intro-wrapper">
                    <img
                        className="ai-profession-second-circuit ai-profession-second-circuit-top-mobile"
                        src={paths.backgrounds.secondSection[0]}
                        alt=""
                        aria-hidden="true"
                    />
                    <SectionHeadingPanel
                        title={content.title}
                        description={content.subTitle}
                        className="ai-profession-second-intro"
                        titleClassName="ai-profession-second-title"
                        descriptionClassName="ai-profession-second-subtitle"
                    />
                </div>

                <div className="ai-profession-second-cards">
                    {cards.map((card, index) => (
                        <article
                            className={`ai-profession-second-card ${
                                index % 2 === 1 ? "ai-profession-second-card-reverse" : ""
                            }`}
                            key={card.title}
                        >
                            <div className="ai-profession-second-image-wrapper">
                                <img
                                    className={`ai-profession-second-card-image ai-profession-second-card-image-${index + 1}`}
                                    src={cardImages[index]}
                                    alt=""
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="ai-profession-second-card-text">
                                <h3>{card.title}</h3>

                                {card.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}

                                {card.list && (
                                    <ul>
                                        {card.list.map((item) => (
                                            <li key={item.label}>
                                                <strong>{item.label}</strong> {item.description}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {card.conclusion && (
                                    <p className="ai-profession-second-conclusion">
                                        <strong>{card.conclusion}</strong>
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
