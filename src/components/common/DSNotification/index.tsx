import {type ReactElement} from "react";
import {Alert} from "@mui/material";
import SpriteIcon from "../Other/SpriteIcon";
import "./style.css";

export type TNotificationTypes = "warning" | "info";
export interface IFlexibleAlertProps {
    label?: string;
    type?: TNotificationTypes;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    iconName?: string;
    iconSize?: string;
    iconColor?: string;
    fullWidth?: boolean;
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
    label="",
    type=NotificationTypes.warning,
    backgroundColor=NotificationBackgroundColors.beige,
    textColor="black",
    borderColor=NotificationBackgroundColors.lightSand,
    iconName="warningIcon",
    iconSize=DEFAULT_ICON_SIZE,
    iconColor="#BD7D22",
    fullWidth=false,
}: IFlexibleAlertProps): ReactElement => {
    const dsBorderColor = borderColor ? borderColor : backgroundColor;

    return (
        <div
            className="ds-notification"
            style={{
                width: fullWidth ? "100%" : "auto",
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
            >{label}
            </Alert>
        </div>
    );
};

export default DSNotification;
