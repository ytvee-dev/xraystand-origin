import React, { type ReactElement } from "react";

import "./style.css";

export interface IMythCardItem {
    title: string;
    description: string;
}

interface IMythCardsProps {
    title: string;
    content: IMythCardItem[][];
}

const MythCards: React.FC<IMythCardsProps> = ({ title, content }): ReactElement => {
    return (
        <div className="safety-nature-myth-block">
            <h2 className="safety-nature-myth-block-title">{title}</h2>

            <div className="safety-nature-myth-cards">
                {content.map((card, index) => (
                    <div className="safety-nature-myth-card" key={index}>
                        {card.map((item) => (
                            <div className="safety-nature-myth-card-item" key={item.title}>
                                <h3 className="safety-nature-myth-card-title">{item.title}</h3>
                                <p className="safety-nature-myth-card-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MythCards;