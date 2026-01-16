import React, {type ReactElement} from "react";
import * as MuiIcons from '@mui/icons-material';
import { type SvgIconProps } from '@mui/material/SvgIcon';
import SpriteIcon from "../SpriteIcon";
import "./style.css";

interface IIConTextItemProps {
    iconName?: string;
    iconType?: "svg" | "png" | "mui" | "none";
    iconColor?: string;
    title?: string;
    text?: string;
}

interface DynamicIconProps extends SvgIconProps {
    name: keyof typeof MuiIcons;
    iconColor: string;
}

const DynamicIcon = ({ name, iconColor, ...props }: DynamicIconProps) => {
    const IconComponent = MuiIcons[`${name}`];
    if (!IconComponent) {
        return null;
    }
    return <IconComponent style={{color: iconColor || 'black'}} {...props} />;
};

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
            {iconType === "mui" && iconName && <DynamicIcon name={iconName as keyof typeof MuiIcons} iconColor={iconColor} />}
            <div className="icon-text-item-text-wrapper">
                <h3>{title}</h3>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default IconTextItem;