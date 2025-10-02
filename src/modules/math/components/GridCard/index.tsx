import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";
import "./style.css";

export interface IGridCardProps extends MathSectionProps {
    title: string;
    description: string;
    imagePath: string;
}

const GridCard: React.FC<IGridCardProps> = ({title, description, imagePath, className}): ReactElement => {
    return (
        <div className={`math-grid-card ${className || ''}`}>
            <div className="math-grid-card-image">
                <img src={imagePath} alt={title} />
            </div>
            <div className="math-grid-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GridCard;
