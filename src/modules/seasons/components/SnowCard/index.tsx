import type { ReactElement } from "react";
import "./style.css";

export interface ISnowCardProps {
    title: string;
    description: string;
    imagePath: string;
    className?: string;
}

const SnowCard = ({
    title,
    description,
    imagePath,
    className = "",
}: ISnowCardProps): ReactElement => {
    return (
        <article className={`snow-card ${className}`}>
            <img src={imagePath} alt="" className="snow-card-image" />

            <div className="snow-card-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default SnowCard;
