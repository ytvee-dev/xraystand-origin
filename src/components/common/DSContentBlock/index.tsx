import {type ReactElement, type ReactNode} from "react";
import {type TBackgroundColors} from "@components/common/Alerts/FlexibleAlert";
import DSNotification from "@components/common/DSNotification";
import "./style.css";

export interface DSContentBlockDescription {
    subtitle: string;
    content: string[];
}

export interface DSContentBlockColorScheme {
    titleColor?: string;
    subtitleColor?: string;
    descriptionColor?: string;
    notificationBackgroundColor?: TBackgroundColors;
    notificationTextColor?: string;
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
    notificationTextColor: "black",
};

const DSContentBlock = ({
    title = "",
    description = "",
    children,
    notificationLabel = "",
    colorScheme = defaultColorScheme,
}: DSContentBlockProps): ReactElement => {
    const isSubtitle = (d: DSContentBlockDescription | string): d is DSContentBlockDescription =>
        typeof d === "object" && d !== null && "subtitle" in d;

    return (
        <div className="ds-content-block">
            <div className="ds-content-block__header">
                <h1 style={{color: colorScheme.titleColor}}>{title && title}</h1>
                <h3 style={{color: colorScheme.subtitleColor}}>
                    {isSubtitle(description) ? description.subtitle : description}
                </h3>
            </div>
            <div className="ds-content-block__body">{children && children}</div>
            <DSNotification
                label={notificationLabel}
                type="warning"
                backgroundColor={colorScheme.notificationBackgroundColor!}
                textColor="black"
                borderColor="#EBCD91"
                iconName="warningIcon"
                iconSize="19px"
                fullWidth
            />
        </div>
    );
};

export default DSContentBlock;
