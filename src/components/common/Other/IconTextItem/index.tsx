import React, {type ReactElement} from "react";
import SpriteIcon from "../SpriteIcon";
import "./style.css";

interface IIConTextItemProps {
    iconName?: string;
    iconType?: "svg" | "png" | "none";
    iconColor?: string;
    title?: string;
    text?: string;
}

const IconTextItem: React.FC<IIConTextItemProps> = ({
    iconName = 'ItemIcon',
    iconType = 'none',
    iconColor = 'gray',
    title = 'Some title...',
    text = 'Some text...',
}: IIConTextItemProps): ReactElement => {
    return (
        <div className='icon-text-item'>
            {iconType === "svg" && <SpriteIcon iconId={iconName} size={'80px'} color={iconColor} />}
            {iconType === "png" && <img src={iconName} alt="image" />}
            <div className="icon-text-item-text-wrapper">
                <h3>{title}</h3>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default IconTextItem;