import { type ReactElement } from "react";
import FlexibleAlert from "@components/common/Alerts/FlexibleAlert";
import {alertTypes} from "@components/common/Alerts/FlexibleAlert";
import "./style.css";

export interface ILargeCardDescription {
    subtitle: string;
    content: string[];
}

export interface ILargeCardProps  {
    title?: string,
    description?: ILargeCardDescription | string;
    children: ReactElement | null;
    notificationLabel?: string;
}

const LargeCard = ({
   title = "",
   description="",
   children,
   notificationLabel = "",
}: ILargeCardProps): ReactElement => {
    const isSubtitle = (d: ILargeCardDescription | string): d is ILargeCardDescription =>
        typeof d === "object" && d !== null && "subtitle" in d;

    return (
        <div className="large-card">
            <div className="large-card-header">
                <h1>{title && title}</h1>
                <h3>{isSubtitle(description) ? description.subtitle : description}</h3>
            </div>
            <div className="large-card-body">{children && children}</div>
            <FlexibleAlert label={notificationLabel} type={alertTypes.warningBeige} backgroundColor={"beige"}/>
        </div>
    );
};

export default LargeCard;
