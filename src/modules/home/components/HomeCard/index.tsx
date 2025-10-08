import React from "react";
import paths from "@modules/home/locales/paths.json";
import "./style.css";

export interface HomeCardProps {
    title: string;
    description?: string;
    cardType: string;
    imageIndex: number;
    isActive: boolean;
    onActivate: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({title, description, cardType, imageIndex, isActive, onActivate}) => {
    const imagesSrc = paths.cards;
    const [cardState, setCardState] = React.useState<'touched' | 'untouched'>('untouched');

    const handlePointerUp = (e: React.PointerEvent) => {
        if (["touch", "pen", "mouse"].includes(e.pointerType)) {
            onActivate();
        }
    };

    return (
        <div
            className={`home-card ${cardType}-card ${isActive ? "touched-card" : "untouched-card"}`}
            onPointerUp={handlePointerUp}
        >
            <div className="home-card-content-wrapper">
                <div className={`home-card-image-wrapper ${isActive ? "touched" : "untouched"}`}>
                    <img
                        className="home-card-image"
                        src={imagesSrc[imageIndex]}
                        alt={title}
                    />
                </div>

                <div className={`home-card-title ${isActive ? "touched" : "untouched"}`}>
                    <h3>{title}</h3>
                </div>

                <div className={`home-card-text ${isActive ? "touched" : "untouched"}`}>
                    <p>{description}</p>
                </div>

                <div className="home-card-image-left-decor"></div>
                <div className="home-card-image-right-decor"></div>
            </div>
        </div>
    );
};

export default HomeCard;
