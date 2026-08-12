import React, { type ReactElement } from "react";
import * as paths from "../../locales/path.json";
import "./style.css";

interface ListItem {
    title: string;
    description: string;
}

interface ContentItem {
    title?: string;
    subTitle?: string;
    description?: string;
    secondDescription?: string;
    finalDescription?: string;
    list?: ListItem[];
}

interface FirstSectionProps {
    title: string;
    subtitle: string;
    content: ContentItem[][];
}

const FirstSection: React.FC<FirstSectionProps> = ({title, subtitle, content}): ReactElement => {
    const methodImages = [
        paths.cards.firstSection[0],
        paths.cards.firstSection[1],
    ];

    return (
        <section className="ai-profession-first-section">
            <img className="ai-profession-first-section-bg-1" src={paths.backgrounds.firstSection[0]} alt=""/>
            <img className="ai-profession-first-section-bg-2" src={paths.backgrounds.firstSection[0]} alt=""/>

            <div className="ai-profession-first-section-title-container">
                <h1 className="ai-profession-first-section-title">{title}</h1>
                <h2 className="ai-profession-first-section-subtitle">{subtitle}</h2>
            </div>

            <div className="ai-profession-first-section-theory">
                <h2 className="ai-profession-first-section-theory-title">
                    {content[0]?.[0]?.title}
                </h2>

                <div className="theory-cards">
                    {content[0]?.slice(1).map((item, index) => {
                        const [cardTitle, cardText] = item.description?.split("\n") ?? [];

                        return (
                            <div className="theory-card" key={index}>
                                {cardTitle && (
                                    <h3 className="theory-card-title">
                                        {cardTitle}
                                    </h3>
                                )}

                                {cardText && (
                                    <p className="theory-card-description">
                                        {cardText}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>


            <div className="ai-profession-methods">
                {content.slice(1).map((method, index) => {
                    const item = method[0];

                    if (!item) {
                        return null;
                    }

                    return (
                        <div className={`ai-profession-method ai-profession-method-${index}`} key={index}>
                            {item.title && (
                                <h2 className="ai-profession-method-title">
                                    {item.title}
                                </h2>
                            )}

                            <div className={`ai-profession-method-content ${ index === 0 ? "image-left" : "image-right" }`}>
                                {methodImages[index] && (
                                    <img className={`ai-profession-method-image method-image-${index}`} src={methodImages[index]} alt=""/>
                                )}

                                <div className="ai-profession-method-text">
                                    {item.subTitle && (
                                        <p className="ai-profession-method-subtitle">{item.subTitle}</p>
                                    )}

                                    {item.description && (
                                        <p className="ai-profession-method-description">{item.description}</p>
                                    )}

                                    {item.secondDescription && (
                                        <p className="ai-profession-method-second-description">{item.secondDescription}</p>
                                    )}

                                    {item.list && item.list.length > 0 && (
                                        <ol className="ai-profession-method-list">
                                            {item.list.map(
                                                (listItem, listIndex) => (
                                                    <li className="ai-profession-method-list-item" key={listIndex}>
                                                        <strong className="ai-profession-method-list-title">
                                                            {listItem.title}
                                                        </strong>

                                                        <span className="ai-profession-method-list-description">
                                                            ({listItem.description})
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ol>
                                    )}

                                    {item.finalDescription && (
                                        <p className="ai-profession-method-final-description">
                                            {item.finalDescription}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FirstSection;