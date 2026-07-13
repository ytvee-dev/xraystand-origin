import React from "react";
import { type ReactElement } from "react";
import * as paths from "../../locales/path.json";
import "./style.css";

interface CardItem {
    title: string;
    subTitle: string;
    description: string;
}

interface SecondSectionContent {
    title: string;
    subTitle: string;
    content: CardItem[];
}

interface ISecondSectionProps {
    content: SecondSectionContent;
}

const columns = [
    [0, 3], 
    [1, 4], 
    [2, 5], 
];

const SecondSection: React.FC<ISecondSectionProps> = ({
    content,
}): ReactElement => {
    return (
        <section className="ei-second-section">
            <div className="ei-second-section-content">
                <img className="ei-second-section-circles_2" src={paths.backgrounds.circles_group_2} alt="" />

                <img className="ei-second-section-circles_1" src={paths.backgrounds.circles_group_1} alt="" />

                <h2 className="ei-second-section-title">{content.title}</h2>

                <p className="ei-second-section-subtitle">{content.subTitle}</p>

                <div className="ei-second-section-cards">
                    {columns.map((column, columnIndex) => (
                        <div key={columnIndex} className="ei-second-section-column">
                            {column.map((cardIndex) => {
                                const card = content.content[cardIndex];

                                return (
                                    <div key={cardIndex} className={`ei-second-card ei-second-card-${cardIndex + 1}`}>
                                        <h3>{card.title}</h3>

                                        {card.subTitle && (
                                            <h4>{card.subTitle}</h4>
                                        )}

                                        <p>{card.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;