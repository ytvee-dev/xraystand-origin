import {type ReactElement} from "react";
import DSNotification from "@components/common/DSNotification";
import "./style.css";

export interface ILargeCardDescription {
    subtitle: string;
    content: string[];
}

export interface ILargeCardProps {
    title?: string,
    description?: ILargeCardDescription | string;
    children: ReactElement | null;
    notificationLabel?: string;
    colorScheme?: ILargeCardColorScheme
}

export interface ILargeCardColorScheme {
    titleColor?: string,
    subtitleColor?: string;
    descriptionColor?: string;
    notificationBackgroundColor?: string;
    notificationTextColor?: string;
    notificationIconColor?: string;
}

const defaultColorScheme: ILargeCardColorScheme = {
    titleColor: "#289FF5",
    subtitleColor: "black",
    descriptionColor: "black",
    notificationBackgroundColor: "beige",
    notificationTextColor: "black",
    notificationIconColor: "beige",
}

const LargeCard = ({
   title = "",
   description = "",
   children,
   notificationLabel = "",
   colorScheme = defaultColorScheme,
}: ILargeCardProps): ReactElement => {
    const isSubtitle = (d: ILargeCardDescription | string): d is ILargeCardDescription =>
        typeof d === "object" && d !== null && "subtitle" in d;

    return (
        <div className="large-card">
            <div className="large-card-header">
                <h1 style={{color: colorScheme.titleColor}}>{title && title}</h1>
                <h3 style={{color: colorScheme.subtitleColor}}>{isSubtitle(description) ? description.subtitle : description}</h3>
            </div>
            <div className="large-card-body">{children && children}</div>
            <DSNotification
                label={notificationLabel}
                backgroundColor={colorScheme.notificationBackgroundColor}
                textColor={colorScheme?.notificationTextColor}
                iconColor={colorScheme?.notificationIconColor}
                fullWidth={true}
            />
        </div>
    );
};

export default LargeCard;
