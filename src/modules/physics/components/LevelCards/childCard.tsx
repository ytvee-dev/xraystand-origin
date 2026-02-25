import { type ReactElement } from "react";
import './childStyle.css';

interface IChildCardProps {
    text: string,
    img?: string,
    imgAlt?: string,
    imgClassIndex?: number,
}

const ChildCard = ({
    text,
    img,
    imgAlt = 'formula',
    imgClassIndex
}: IChildCardProps): ReactElement => {
    return (
        <div className="child-card-wrapper">
            <p>{text}</p>

            {img && <img 
                src={img} 
                alt={imgAlt} 
                className={`child-card-img-${imgClassIndex}`}
            />}
        </div>
    )
}

export default ChildCard;