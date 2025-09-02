import {type ReactElement, type ReactNode} from "react";
import type {IDefaultCardSxText} from "../../Cards/CardsTypes.ts";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import LazyLoadImage from "@components/common/Other/LazyLoadImage";
import {defaultMobileSectionSX, defaultSectionSX} from "../meta.tsx";
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
    sectionName?: string;
    backgroundImage?: string;
    strictHeight?: boolean;
    sxText?: IDefaultCardSxText;
}

const BgContentSection = ({
    textData,
    children,
    sectionName='',
    backgroundImage='',
    strictHeight=true,
    sxText=defaultSectionSX,
}: IContentSectionProps): ReactElement => {
    const colorScheme = textData?.colorScheme ?? {
        background: "#FFFFFF",
        text: "#000000",
    };
    const screenWidth = useScreenWidth();

    return (
        <section
            className={`bg-content-section ${sectionName}`}
            style={{
                backgroundColor: colorScheme.background,
            }}
        >
            {backgroundImage && (
                <LazyLoadImage src={backgroundImage} alt="bg-image" style={{height: strictHeight ? "100%" : "auto"}} />
            )}

            <div className="bg-content-section-text-container">
                {textData?.title && (
                    <h1
                        className="bg-content-section-title"
                        style={{
                            color: colorScheme.text,
                            // fontFamily: sxText?.fontFamily,
                            fontSize: screenWidth > 768 ? sxText?.titleFontSize : defaultMobileSectionSX.titleFontSize,
                            fontWeight: sxText?.titleFontWeight,
                        }}
                    >{textData.title}
                    </h1>
                )}

                {textData?.description && (
                    <h3
                        className="bg-content-section-description"
                        style={{
                            color: sxText?.subTitleColor,
                            // fontFamily: sxText?.fontFamily,
                            fontSize: screenWidth > 768 ? sxText?.labelFontSize : defaultMobileSectionSX.labelFontSize,
                            fontWeight: sxText?.fontWeight,
                        }}
                    >
                        {textData.description}
                    </h3>
                )}
            </div>

            <div className="bg-content-section-content-container">
                {children && children}
            </div>
        </section>
    );
};

export default BgContentSection;
