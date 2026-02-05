import { type CSSProperties, type ReactElement, type ReactNode } from "react";
import DSNotification from "@components/common/DSNotification";
import "./style.css";

export interface DSContentBlockDescription {
    subtitle: string;
    content: string[];
}

export interface DSContentBlockColorScheme {
    titleColor?: string;
    titleStyle?: CSSProperties;
    subtitleColor?: string;
    subtitleStyle?: CSSProperties;
    descriptionColor?: string;
    descriptionStyle?: CSSProperties;
    contentBlockStyle?: CSSProperties;
    notificationBackgroundColor?: string;
    notificationBorderColor?: string;
    notificationBorderRadius?: string;
    notificationTextColor?: string;
    notificationIconColor?: string;
    notificationStyle?: CSSProperties;
    notificationAlertStyle?: CSSProperties;
    notificationIconName?: string;
    notificationIconWidth?: string;
    notificationIconHeight?: string;
    notificationCardGap?: string;
}

export interface DSContentBlockProps {
    title?: string;
    description?: DSContentBlockDescription | string;
    children?: ReactElement | ReactNode | null;
    notificationLabel?: string;
    colorScheme?: DSContentBlockColorScheme;
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
                        ...colorScheme.subtitleStyle,
                    }}
                >
                    {isSubtitle(description)
                        ? description.subtitle
                        : description}
                </h3>
            </div>
            <div
                className="ds-content-block__body"
                style={colorScheme.contentBlockStyle}
            >
                {children && children}
            </div>
            <DSNotification
                content={notificationLabel}
                style={colorScheme.notificationStyle}
                alertStyle={colorScheme.notificationAlertStyle}
                type="warning"
                backgroundColor={colorScheme?.notificationBackgroundColor}
                textColor={colorScheme?.notificationTextColor}
                borderColor={colorScheme?.notificationBorderColor}
                iconName={colorScheme?.notificationIconName ?? "warningIcon"}
                iconWidth={colorScheme?.notificationIconWidth ?? "19px"}
                iconHeight={colorScheme?.notificationIconHeight ?? "19px"}
                iconColor={colorScheme?.notificationIconColor}
                cardGap={colorScheme?.notificationCardGap}
                fullWidth
            />
        </div>
    );
};

export default DSContentBlock;
