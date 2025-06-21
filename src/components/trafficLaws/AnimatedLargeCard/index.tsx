import { type ReactElement } from "react";
import ContentSectionAlert from "@components/ContentSectionAlert";
import "./style.css";

export interface IDescription {
    subtitle: string;
    content: string[];
}

export interface IAnimatedLargeCardProps  {
    title?: string,
    description?: IDescription;
    children: ReactElement | null;
    notificationLabel?: string;
}

const AnimatedLargeCard = ({
    title="",
    description={subtitle: "", content: []},
    children=null,
    notificationLabel="",
}: IAnimatedLargeCardProps): ReactElement => {
    return (
        <div className="animated-large-card">
            <div className="animated-car-card-header">
                <h1>{title && title}</h1>
                <h2>{description?.subtitle && description.subtitle}</h2>
            </div>
            <div className="animated-car-card-description">
                <ul>
                    {description?.content.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="animated-car-card-body">{children}</div>
            <div className="content-section-alert-wrapper">
                <ContentSectionAlert label={notificationLabel}/>
            </div>
        </div>
    );
};

export default AnimatedLargeCard;
