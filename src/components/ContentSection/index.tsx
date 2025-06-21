import { type ReactElement, type ReactNode } from "react";
import "./style.css";

export interface IContentSectionTextData {
    title: string;
    description?: string;
    notificationLabel?: string;
    alertText?: string;
}

export interface IContentSectionProps {
    textData?: IContentSectionTextData;
    children?: ReactNode;
}

const ContentSection = ({
    textData,
    children,
}: IContentSectionProps): ReactElement => {
    return (
        <section className={"content-section"}>
            {textData && (
                <div className="content-section-text-container">
                    <h1 className="content-section-title">{textData.title}</h1>
                    <h3 className="content-section-description">
                        {textData.description}
                    </h3>
                </div>
            )}
            <div className="content-section-content-container">
                {children && children}
            </div>
        </section>
    );
};

export default ContentSection;
