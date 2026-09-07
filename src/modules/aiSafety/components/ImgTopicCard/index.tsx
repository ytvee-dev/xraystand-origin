import splitString from "@utils/splitString";
import "./style.css";

export interface ImgCardList {
    highlightedText: string;
    text: string;
}

interface ImgCardContent {
    title: string;
    description: string;
    list?: ImgCardList[];
    imgPath: string;
    className?: string;
}

const ImgTopicCard = ({ title, description, list, imgPath, className }: ImgCardContent) => {
    const descriptionArr = splitString(description);
    return (
        <div className={`img-topic-card ${className}`}>
            <img className="img-topic-card-img" src={imgPath} alt="" />
            <p className="img-topic-card-title">{title}</p>

            {descriptionArr.map(text => (
                <p key={text}>{text}</p>
            ))}
            
            <ol className="img-topic-card-list">
                {list && list.map(item => (
                    <li className="img-topic-card-list-item" key={item.highlightedText}>
                        <p className="img-topic-card-highlighted-text">{item.highlightedText}</p>
                        <p className="img-topic-card-text">{item.text}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ImgTopicCard;