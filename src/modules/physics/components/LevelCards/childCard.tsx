import { type ReactElement } from "react";
import './childStyle.css';

interface IChildCardProps {
    text: string,
    img?: string,
    imgAlt?: string, //если передаетсяя img, то imgAlt обязательный
}

const ChildCard = ({
    text,
    img,
    imgAlt
}: IChildCardProps): ReactElement => {
    return (
        <div className="child-wrapper">
            <p>{text}</p>

            {img && <img src={img} alt={imgAlt}/>}
        </div>
    )
}

export default ChildCard;