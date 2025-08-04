import {type ReactElement, type ReactNode} from "react";
import "./style.css";

export interface IContentSectionTextData {
    title: string;
    description?: string;
    notificationLabel?: string;
    alertText?: string;
    colorScheme?: {
        background: string;
        text: string;
    },
}

export interface IContentSectionProps {
    textData?: IContentSectionTextData;
    children?: ReactNode;
}

const ContentSection = ({
    textData,
    children,
}: IContentSectionProps): ReactElement => {
    const colorScheme = textData?.colorScheme ?? {
        background: "#FFFFFF",
        text: "#289FF5",
    };

    return (
        <section
            className={"content-section"}
            style={{
                backgroundColor: colorScheme.background,
            }}
        >

            <div className="content-section-text-container">
                {textData?.title && (
                    <h1
                        className="content-section-title"
                        style={{
                            color: colorScheme.text,
                        }}
                    >{textData.title}
                    </h1>
                )}

                {textData?.description && (
                    <h3 className="content-section-description">
                        {textData.description}
                    </h3>
                )}
            </div>

            <div className="content-section-content-container">
                {children && children}
            </div>
        </section>
    );
};

export default ContentSection;
