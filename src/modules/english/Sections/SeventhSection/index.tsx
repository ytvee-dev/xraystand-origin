import InfoBlock, {
    type IBlockData,
} from "@modules/english/components/InfoBlock";
// import * as paths from "@modules/english/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const SeventhSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-seventh-section-wrapper">
                <div className="english-seventh-section-header">
                    <h1 className="english-section-title">{content.title}</h1>

                    <span className="english-section-description">
                        {content.description}
                    </span>
                </div>

                <div className="english-seventh-section-content">
                    <div className="english-seventh-section-blocks-container">
                        {content.content.map(
                            (contentData: IBlockData, index: number) => (
                                <InfoBlock
                                    className="english-seventh-section-block"
                                    key={index}
                                    title={contentData.title}
                                    description={contentData.description}
                                    labels={contentData.content}
                                    flexDirection="column"
                                    titleStyles={{
                                        backgroundColor: "#C4628A",
                                        textAlign: "left",
                                    }}
                                />
                            ),
                        )}
                    </div>

                    {/* <div className="english-seventh-section-image-wrapper">
                        <img
                            className="english-seventh-section-image"
                            src={paths.other.seventhSection}
                            alt="image"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default SeventhSection;
