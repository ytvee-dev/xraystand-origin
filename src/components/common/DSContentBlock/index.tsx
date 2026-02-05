import DSNotification from "@components/common/DSNotification";
import { type CSSProperties, type ReactElement, type ReactNode } from "react";
import "./style.css";

export interface DSContentBlockDescription {
    subtitle: string;
    content: string[];
}

export interface DSContentBlockColorScheme {
    titleColor?: string;
    titleStyle?: CSSProperties;
    subtitleColor?: string;
    descriptionColor?: string;
    notificationBackgroundColor?: string;
    notificationBorderColor?: string;
    notificationTextColor?: string;
    notificationIconColor?: string;
}

export interface DSContentBlockProps {
    title?: string;
    description?: DSContentBlockDescription | string;
    children?: ReactElement | ReactNode | null;
    notificationLabel?: string;
    colorScheme?: DSContentBlockColorScheme;
    subtitleStyle?: CSSProperties;
    descriptionStyle?: CSSProperties;
    contentBlockStyle?: CSSProperties;
    notificationStyle?: CSSProperties;
    notificationAlertStyle?: CSSProperties;
    notificationIconName?: string;
    notificationIconWidth?: string;
    notificationIconHeight?: string;
    notificationCardGap?: string;
    notificationBorderRadius?: string;
}

const defaultColorScheme: DSContentBlockColorScheme = {
    titleColor: "#289FF5",
    subtitleColor: "black",
    descriptionColor: "black",
    notificationBackgroundColor: "beige",
    notificationBorderColor: "#EBCD91",
    notificationTextColor: "black",
    notificationIconColor: "#EBCD91",
};

const DSContentBlock = ({
    title = "",
    description = "",
    children,
    notificationLabel = "",
    colorScheme = defaultColorScheme,
    subtitleStyle,
    contentBlockStyle,
    notificationStyle,
    notificationAlertStyle,
    notificationIconName,
    notificationIconWidth,
    notificationIconHeight,
    notificationCardGap,
    notificationBorderRadius,
}: DSContentBlockProps): ReactElement => {
    const isSubtitle = (
        d: DSContentBlockDescription | string,
    ): d is DSContentBlockDescription =>
        typeof d === "object" && d !== null && "subtitle" in d;

    return (
        <div className="ds-content-block">
            <div className="ds-content-block__header">
                <h1
                    style={{
                        color: colorScheme.titleColor,
                        ...colorScheme.titleStyle,
                    }}
                >
                    {title && title}
                </h1>
                <h3
                    style={{
                        color: colorScheme.subtitleColor,
                        ...subtitleStyle,
                    }}
                >
                    {isSubtitle(description)
                        ? description.subtitle
                        : description}
                </h3>
            </div>
            <div className="ds-content-block__body" style={contentBlockStyle}>
                {children && children}
            </div>
            <DSNotification
                content={notificationLabel}
                style={notificationStyle}
                alertStyle={notificationAlertStyle}
                type="warning"
                backgroundColor={colorScheme?.notificationBackgroundColor}
                textColor={colorScheme?.notificationTextColor}
                borderColor={colorScheme?.notificationBorderColor}
                iconName={notificationIconName ?? "warningIcon"}
                iconWidth={notificationIconWidth ?? "19px"}
                iconHeight={notificationIconHeight ?? "19px"}
                iconColor={colorScheme?.notificationIconColor}
                cardGap={notificationCardGap}
                borderRadius={notificationBorderRadius}
                fullWidth
            />
        </div>
    );
};

export default DSContentBlock;
