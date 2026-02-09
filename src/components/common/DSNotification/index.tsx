import {type ReactElement} from "react";
import {Alert} from "@mui/material";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import "./style.css";

export type TNotificationTypes = "warning" | "info";
export interface IFlexibleAlertProps {
    label?: string | undefined;
    list?: string[] | undefined;
    type?: TNotificationTypes;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    iconName?: string;
    iconSize?: string;
    iconColor?: string;
    fullWidth?: boolean;
    alignIcon?: 'start' | 'center' | 'end';
    listStyle?: 'marker' | 'numeric' | 'none';
    sx?: {
        maxWidth?: string;
        borderRadius?: 'small' | 'medium' | 'large';
    },
}

export enum NotificationBackgroundColors {
    beige = "#FEFCF3",
    lightSand = "#EBCD91",
}

export enum NotificationTypes {
    warning = "warning",
    info = "info",
}

const DEFAULT_ICON_SIZE: string = "19px";

const DSNotification = ({
    label,
    list,
    type=NotificationTypes.warning,
    backgroundColor=NotificationBackgroundColors.beige,
    textColor="black",
    borderColor=NotificationBackgroundColors.lightSand,
    iconName="warningIcon",
    iconSize=DEFAULT_ICON_SIZE,
    iconColor="#BD7D22",
    fullWidth=false,
    alignIcon='center',
    listStyle='none',
    sx={
        maxWidth: '100%',
        borderRadius: 'small',
    },
}: IFlexibleAlertProps): ReactElement => {
    const dsBorderColor = borderColor ? borderColor : backgroundColor;

    return (
        <div
            className={`ds-notification ${alignIcon} ${sx?.borderRadius}`}
            style={{
                width: fullWidth ? "100%" : "auto",
                maxWidth: sx.maxWidth,
                border: `1px solid ${dsBorderColor}`,
            }}
        >
            <Alert
                className={`ds-mui-alert ds-alert-${type}`}
                sx={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                    width: fullWidth ? "100%" : "auto",
                }}
                icon={<SpriteIcon iconId={iconName} size={iconSize} color={iconColor}/>}
            >
                {label?.length && label}

                {list?.length && (listStyle === 'marker' || listStyle === 'none') && (
                    <ul className={`alert-list ${listStyle}`}>
                        {list.map((item) => (
                            <li key={item} className={"alert-list-option"}>{item}</li>
                        ))}
                    </ul>
                )}

                {list?.length && listStyle === 'numeric' && (
                    <ol className={`alert-list ${listStyle}`}>
                        {list.map((item) => (
                            <li key={item} className={"alert-list-option"}>{item}</li>
                        ))}
                    </ol>
                )}

            </Alert>
        </div>
    );
};

export default DSNotification;
