import type { ReactElement } from "react";
import "./style.css"

interface ITwoImgCardsContent {
    highlightedText: string;
    text: string;
}

interface ITwoImgCardsProps {
    title: string;
    content: ITwoImgCardsContent[];
    firstImg?: string;
    secondImg?: string;
    bgColor: string;
    className: string;
}

const TwoImgCards = ({
    title,
    content,
    firstImg,
    secondImg,
    bgColor,
    className,
}: ITwoImgCardsProps): ReactElement => {
    return (
        <div className={`two-img-cards-wrapper ${className}`} style={{ backgroundColor: bgColor }}>
            <p className="two-img-cards-title">{title}</p>

            <ul className="two-img-cards-list">
                {content.map((task) => (
                    <li key={task.highlightedText} className="two-img-cards-list">
                        <p className="two-img-cards-highlighted-text">{task.highlightedText}</p>
                        <p className="two-img-cards-text">{task.text}</p>
                    </li>
                ))}
            </ul>

            {firstImg && secondImg && (
                <div className="two-img-cards-images-wrapper">
                    <img className="two-img-cards-first-img" src={firstImg} alt=""/>
                    <img className="two-img-cards-second-img" src={secondImg} alt=""/>
                </div>
            )}
        </div>
    );
};

export default TwoImgCards;