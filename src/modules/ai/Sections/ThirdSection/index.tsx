import React from "react";
import Carousel from "@modules/kazTarih/components/Carousel";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import * as paths from "../../locales/paths.json";
import { type ReactElement } from "react";
import "./style.css";

interface ApplyInLifeItem {
    description: string;
}

interface AiCardContent {
    title: string;
    description: string;
    applyInLifeDescription: string;
    applyInLife: ApplyInLifeItem[];
}

interface AiThirdSectionStructure {
    title: string;
    subTitle: string;
    content: AiCardContent[];
}

interface CoverSectionProps {
    content: AiThirdSectionStructure;
}

const ThirdSection: React.FC<CoverSectionProps> = ({ content }): ReactElement => {
    const { title, subTitle, content: cards } = content;

    const subtitleParagraphs = subTitle
        ? subTitle.split(/\n+/).map((paragraph) => paragraph.trim()).filter(Boolean)
        : [];

    return (
        <section className="ai-third-section">
            <img className="ai-third-bg" src={paths.otherSectionsBg} alt="" />
            <img className="ai-figure-green" src={paths.figures.green} alt="" />

            <div className="ai-third-text-content">
                <h1 className="ai-third-title">{title}</h1>
                {subtitleParagraphs.map((paragraph, index) => (
                    <p className="ai-third-subtitle" key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className="ai-third-cards">
                
                {cards && cards.length > 0 && (
                    <Carousel className="ai-third-carousel">
                        {cards.map((card, index) => (
                            <div className="kaz-tarih-carousel-card ai-third-card" key={index}>
                                <div className="ai-card-header">
                                    <h2 className="ai-card-title">{card.title}</h2>
                                </div>

                                <div className="ai-card-body">
                                    <p className="ai-card-description">
                                        {card.description.split(/\*\*([\s\S]*?)\*\*/g).map((chunk, i) =>
                                            i % 2 === 1 ? <strong key={i} className="ai-json-strong">{chunk}</strong> : chunk
                                        )}
                                    </p>

                                    <div className="ai-card-apply-section">
                                        <p className="ai-card-apply-title">{card.applyInLifeDescription}</p>
                                        <ul className="ai-card-apply-list">
                                            {card.applyInLife?.map((item, itemIndex) => (
                                                <li className="ai-card-apply-item" key={itemIndex}>
                                                    {item.description}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
        </section>
    );
};

export default ThirdSection;
