import InfoBlock, {
    type IBlockData,
} from "@modules/english/components/InfoBlock";
// import * as paths from "@modules/english/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const FourthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-fourth-section-content">
                <div className="english-fourth-section-header">
                    <h1 className="english-section-title">{content.title}</h1>

                    <span className="english-section-description">
                        {content.description}
                    </span>
                </div>

                <div className="english-fourth-section-blocks-container">
                    {content.content.map(
                        (contentData: IBlockData, index: number) => (
                            <InfoBlock
                                className="english-fourth-section-block"
                                key={index}
                                title={contentData.title}
                                description={contentData.description}
                                labels={contentData.content}
                                flexDirection="row-reverse"
                                titleStyles={{
                                    backgroundColor: "#97BD66",
                                }}
                                // imagePath={}
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
