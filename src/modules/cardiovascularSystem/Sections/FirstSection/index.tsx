import React, { Fragment, type ReactElement, type ReactNode } from "react";
import * as paths from "../../locales/path.json";
import "./style.css";

interface ContentItem {
    title: string;
    description: string;
    emphasis?: string[];
}

interface FirstSectionContent {
    title: string;
    subTitle: string;
    description: string;
    typesTitle: string;
    content: ContentItem[];
    typesOfDiseases: ContentItem[];
}

interface FirstSectionProps {
    content: FirstSectionContent;
}

const getPublicImageUrl = (path: string): string => {
    if (path.startsWith("http")) {
        return path;
    }

    const baseUrl = import.meta.env.BASE_URL.endsWith("/")
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}/`;

    return `${baseUrl}assets/images/${path.replace(/^\/+/, "")}`;
};

const renderEmphasizedText = (
    text: string,
    emphasis: string[] = [],
): ReactNode => {
    if (emphasis.length === 0) {
        return text;
    }

    const escapedPhrases = emphasis
        .filter(Boolean)
        .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

    if (escapedPhrases.length === 0) {
        return text;
    }

    const emphasisPattern = new RegExp(`(${escapedPhrases.join("|")})`, "g");

    return text.split(emphasisPattern).map((part, index) =>
        emphasis.includes(part) ? (
            <strong key={`${part}-${index}`}>{part}</strong>
        ) : (
            <Fragment key={`${part}-${index}`}>{part}</Fragment>
        ),
    );
};

const DiseaseCard = ({ item }: { item: ContentItem }): ReactElement => (
    <article className="cardiovascular-first-disease-card">
        <h4 className="cardiovascular-first-disease-title">{item.title}</h4>
        <span className="cardiovascular-first-disease-rule" aria-hidden="true" />
        <p className="cardiovascular-first-disease-description">
            {item.description}
        </p>
    </article>
);

const FirstSection: React.FC<FirstSectionProps> = ({ content }): ReactElement => {
    const [overview, ...statistics] = content.content;
    const middleIndex = Math.ceil(content.typesOfDiseases.length / 2);
    const diseaseColumns = [
        content.typesOfDiseases.slice(0, middleIndex),
        content.typesOfDiseases.slice(middleIndex),
    ];

    return (
        <section className="cardiovascular-first-section">
            <div className="cardiovascular-first-content">
                <header className="cardiovascular-first-intro">
                    <h2 className="cardiovascular-first-title">{content.title}</h2>
                    <p className="cardiovascular-first-description">
                        {content.description}
                    </p>
                </header>

                {overview && (
                    <div className="cardiovascular-first-facts">
                        <div className="cardiovascular-first-mortality">
                            <h3 className="cardiovascular-first-mortality-title">
                                {overview.title}
                            </h3>

                            <div className="cardiovascular-first-statistics">
                                {statistics.map((statistic, index) => (
                                    <div
                                        className={`cardiovascular-first-statistic cardiovascular-first-statistic-${index + 1}`}
                                        key={`${statistic.title}-${index}`}
                                    >
                                        <strong className="cardiovascular-first-statistic-value">
                                            {statistic.title}
                                        </strong>
                                        <span className="cardiovascular-first-statistic-label">
                                            {statistic.description}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="cardiovascular-first-overview">
                            {renderEmphasizedText(
                                overview.description,
                                overview.emphasis,
                            )}
                        </p>
                    </div>
                )}

                <div className="cardiovascular-first-divider">
                    <img
                        className="cardiovascular-first-divider-pulse cardiovascular-first-divider-pulse-left"
                        src={getPublicImageUrl(
                            paths.images.pulse_white_first_section_left,
                        )}
                        alt=""
                    />
                    <h3 className="cardiovascular-first-divider-title">
                        {content.typesTitle}
                    </h3>
                    <img
                        className="cardiovascular-first-divider-pulse cardiovascular-first-divider-pulse-right"
                        src={getPublicImageUrl(
                            paths.images.pulse_white_first_section_right,
                        )}
                        alt=""
                    />
                </div>

                <div className="cardiovascular-first-diseases">
                    {diseaseColumns.map((column, columnIndex) => (
                        <div
                            className="cardiovascular-first-disease-column"
                            key={`disease-column-${columnIndex}`}
                        >
                            {column.map((item, itemIndex) => (
                                <DiseaseCard
                                    item={item}
                                    key={`${item.title}-${itemIndex}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
