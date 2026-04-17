import InfoBlock, {
    type IBlockData,
} from "@modules/english/components/InfoBlock";
import * as paths from "@modules/english/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const ThirdSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-third-section-wrapper">
                <div className="english-third-section-header">
                    <h1 className="english-section-title">{content.title}</h1>

                    <span className="english-section-description">
                        {content.description}
                    </span>
                </div>

                <div className="english-third-section-content">
                    <div className="english-third-section-image-wrapper">
                        <img
                            className="english-third-section-image"
                            src={paths.other.thirdSection}
                            alt="image"
                        />
                    </div>

                    <div className="english-third-section-blocks-container">
                        {content.content.map(
                            (contentData: IBlockData, index: number) => (
                                <InfoBlock
                                    className="english-third-section-block"
                                    key={index}
                                    title={contentData.title}
                                    description={contentData.description}
                                    labels={contentData.content}
                                    flexDirection="column"
                                    titleStyles={{
                                        backgroundColor: "#4EB9E8",
                                        textAlign: "left",
                                    }}
                                />
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
