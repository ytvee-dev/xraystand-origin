import { type CSSProperties, type ReactElement } from "react";
import { type ISummaryCardContent } from "@modules/kazTarih/types/index"
import { Alert } from "@mui/material";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import "./style.css";

export type TNotificationTypes = "warning" | "info";

type Label = string;
type List = string[];
type Summary = ISummaryCardContent[];
type ListTypes = "none" | "mark" | "number";
type WidthTypes = "small" | "middle" | "large";
type ImgPosition = "flex-start" | "center" | "flex-end";

enum DSNotificationsContentTypes {
    STRING = "string",
    LIST = "list",
    SUMMARY = "summary",
}

export interface IFlexibleAlertProps {
    content: Label | List | Summary;
    listMark?: ListTypes;
    type?: TNotificationTypes;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    borderRadius?: string;
    iconName?: string;
    iconWidth?: string;
    iconHeight?: string;
    iconColor?: string;
    fullWidth?: boolean;
    cardWidth?: WidthTypes;
    fontSize?: string;
    padding?: string;
    imgPosition?: ImgPosition;
    cardGap?: string;
    className?: string;
    style?: CSSProperties;
    alertStyle?: CSSProperties;
    paragraphWeight?: number;
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
    content,
    style,
    listMark = "none",
    type = NotificationTypes.warning,
    backgroundColor = NotificationBackgroundColors.beige,
    textColor = "black",
    borderColor = NotificationBackgroundColors.lightSand,
    borderRadius = "6px",
    iconName = "warningIcon",
    iconWidth = DEFAULT_ICON_SIZE,
    iconHeight = DEFAULT_ICON_SIZE,
    iconColor = "#BD7D22",
    fullWidth = false,
    cardWidth = "large",
    fontSize = "16px",
    padding = "12px 16px",
    imgPosition = "center",
    cardGap = "5px",
    className,
    alertStyle,
    paragraphWeight = 400,
}: IFlexibleAlertProps): ReactElement => {
    const dsBorderColor = borderColor ? borderColor : backgroundColor;

    function getContentType(
        content: Label | List | Summary
    ): DSNotificationsContentTypes {
        if (typeof content === "string") {
            return DSNotificationsContentTypes.STRING;
        }

        if (
            Array.isArray(content) &&
            content.every(item => typeof item === "string")
        ) {
            return DSNotificationsContentTypes.LIST;
        }

        return DSNotificationsContentTypes.SUMMARY;
    }

    const currentContentType = getContentType(content);

    const widthSizes = {
        small: 387,
        middle: 500,
        large: 692,
    };

    const currentWidth = widthSizes[cardWidth];

    return (
        <div
            className={`ds-notification ${className}`}
            style={{
                width: fullWidth ? "100%" : "auto",
                maxWidth: !fullWidth ? `${currentWidth}px` : "",
                border: `1px solid ${dsBorderColor}`,
                borderRadius: borderRadius,
                ...style,
            }}
        >
            <Alert
                className={`ds-mui-alert ds-alert-${type}`}
                sx={{
                    "& .MuiAlert-icon": {
                        display: "flex",
                        alignSelf: imgPosition,
                        padding: 0,
                        margin: 0,
                    },
                    display: "flex",
                    gap: cardGap,
                }}
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                    width: fullWidth ? "100%" : "auto",
                    maxWidth: !fullWidth ? `${currentWidth}px` : "",
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                    padding: padding,
                    ...alertStyle,
                }}
                icon={
                    <SpriteIcon
                        iconId={iconName}
                        width={iconWidth}
                        height={iconHeight}
                        color={iconColor}
                    />
                }
            >
                {currentContentType === DSNotificationsContentTypes.STRING && (
                <p style={{
                    fontWeight: paragraphWeight
                }}
                >
                    {content as Label}
                </p>)}

                {currentContentType === DSNotificationsContentTypes.LIST &&
                listMark === "number" && (
                    <ol className="list">
                        {(content as List).map((item) => (
                            <li key={item}> {item} </li>
                        ))}
                    </ol>
                )}

                {currentContentType === DSNotificationsContentTypes.LIST && (listMark === "mark" || "none") && (
                    <ul
                        className={`list ${listMark === "none" ? "mark-none" : ""}`}
                    >
                        {(content as List).map((item) => (
                            <li key={item}> {item} </li>
                        ))}
                    </ul>
                )}

                {currentContentType === DSNotificationsContentTypes.SUMMARY && (
                    <div className="ds-notification-block-wrapper">
                        {(content as Summary).map((item, index) => (
                            <div key={index} className="ds-notification-block">
                                {item.description && (
                                    <p className="text-formatter-description">
                                        {item.description}
                                    </p>
                                )}

                                {item.content?.length > 0 && (
                                    <ul className="ds-notification-block-list">
                                    {item.content.map((contentItem, contentIndex) => (
                                        <li key={contentIndex} className="ds-notification-block-item">
                                            {contentItem}
                                        </li>
                                    ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </Alert>
        </div>
    );
};

export default DSNotification;