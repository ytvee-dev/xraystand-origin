import React, { type ReactElement } from "react";
import * as paths from "../../locales/path.json";
import "./style.css";

interface CoverContentItem {
    description: string;
    list?: string[];
    end?: string;
}

interface CoverContent {
    title: string;
    subTitle: string;
    content: CoverContentItem[];
}

interface CoverSectionProps {
    content: CoverContent;
}

const CoverSection: React.FC<CoverSectionProps> = ({ content }): ReactElement => {
    return (
        <section className="ai-profession-cover-section">
            <img className="ai-profession-cover-bg" src={paths.backgrounds.coverSection[0]} alt="" />

            <div className="ai-profession-chat-content ai-profession-glass-surface">
                <div className="ai-profession-header">
                    <img className="ai-profession-ai-icon" src={paths.coverSection.aiIcon} alt="" />
                    <div className="ai-profession-text-header">
                        <h1 className="ai-profession-title">{content.title}</h1>
                        <h2 className="ai-profession-subtitle">{content.subTitle}</h2>
                    </div>
                    <div className="ai-profession-more">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="ai-profession-user-messages">
                    <div className="ai-profession-user">
                        <p className="ai-profession-message-content ai-profession-glass-surface">
                            {content.content[0].description}
                            <span className="ai-profession-message">
                                <span className="ai-profession-time">11:23</span>
                                <img
                                    className="ai-profession-checkmark"
                                    src={paths.coverSection.checkmark}
                                    alt=""
                                />
                            </span>
                        </p>
                        <div className="ai-profession-user-avatar" aria-hidden="true">
                            <img
                                className="ai-profession-user-icon"
                                src={paths.coverSection.userIcon}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="ai-profession-ai-messages">
                    <div className="ai-profession-ai">
                        <img className="ai-profession-ai-icon ai-icon-message" src={paths.coverSection.aiIcon} alt="" />

                        <div className="ai-profession-ai-message ai-profession-glass-surface">
                            <p className="ai-profession-ai-description">{content.content[1].description}</p>

                            {content.content[1].list && (
                                <ul className="ai-profession-list">
                                    {content.content[1].list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {content.content[1].end && (
                                <p className="ai-profession-end">{content.content[1].end}</p>
                            )}

                            <span className="ai-profession-ai-time">11:23</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
