import ContentSectionAlert from "@components/ContentSectionAlert";
import { ContentSectionColorTypes } from "@utils/constants";
import { type ReactElement, type ReactNode } from "react";
import "./style.css";

export interface IContentSectionTextData {
    title: string;
    description?: string;
    notificationLabel?: string;
}

export interface IContentSectionProps {
    textData: IContentSectionTextData;
    children: ReactNode;
    colorType?: ContentSectionColorTypes;
    itemsCenter?: boolean;
}

const SECTION_ITEMS_CENTER_CLASSNAME: string = "center";

const ContentSection = ({
    textData,
    colorType = ContentSectionColorTypes.SECONDARY,
    children,
    itemsCenter,
}: IContentSectionProps): ReactElement => {
    const itemsCenterClassname: string = !itemsCenter
        ? ""
        : SECTION_ITEMS_CENTER_CLASSNAME;

    return (
        <div
            className={`content-section ${colorType} ${itemsCenterClassname}`}
        >
            <h1 className="title title-text">{textData.title}</h1>
            {textData.description && (
                <h3 className="description common-text">
                    {textData.description}
                </h3>
            )}
            <div className="content">
                {children}
                {textData.notificationLabel && (
                    <ContentSectionAlert label={textData.notificationLabel} />
                )}
            </div>
        </div>
    );
};

export default ContentSection;
