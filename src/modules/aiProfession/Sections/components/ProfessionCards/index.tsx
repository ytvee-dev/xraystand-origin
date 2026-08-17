import React, { type ReactElement } from "react";
import "./style.css";

interface ProfessionCardProps {
    title: string;
    description: string;
    image: string;
    variant: "trainer" | "profession";
}

const ProfessionCard: React.FC<ProfessionCardProps> = ({ title, description, image, variant }): ReactElement => {
    return (
        <div className={`profession-card profession-card-${variant}`}>
            {variant === "trainer" ? (
                <div>
                    <h3 className="profession-card-title">{title}</h3>
                    <img className="profession-card-image" src={image} alt=""/>
                    <p className="profession-card-description">{description}</p>
                </div>
            ) : (
                <div>
                    <img className="profession-card-image" src={image} alt=""/>
                    <h3 className="profession-card-title">{title}</h3>
                    <p className="profession-card-description">{description}</p>
                </div>
            )}
        </div>
    );
};

export default ProfessionCard;