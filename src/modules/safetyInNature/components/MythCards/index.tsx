import React, { type ReactElement } from "react";

import "./style.css";

export interface IMythCardItem {
    title: string;
    description: string;
}

interface IMythCardsProps {
    content: IMythCardItem[];
}

const MythCards: React.FC<IMythCardsProps> = ({ content }): ReactElement => {
    return (
        <div className="safety-nature-myth-card ai-profession-glass-surface">
            {content.map((item) => (
                <div className="safety-nature-myth-card-item" key={item.title}>
                    <h3 className="safety-nature-myth-card-title">{item.title}</h3>
                    <p className="safety-nature-myth-card-description">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MythCards;