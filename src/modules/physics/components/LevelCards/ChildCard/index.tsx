import React, { type ReactElement } from "react";
import './styles.css';

export interface IChildCardProps {
    text: string,
    img?: string,
    imgAlt?: string,
}

const ChildCard: React.FC<IChildCardProps> = ({
    text,
    img,
    imgAlt = 'formula',
}: IChildCardProps): ReactElement => {
    return (
        <div className="child-card-wrapper">
            <p>{text}</p>

            {img && (
                <div className="child-img-wrapper">
                    <img
                        src={img}
                        alt={imgAlt}
                        className="child-card-img"
                    />
                </div>
            )}
        </div>
    )
}

export default ChildCard;