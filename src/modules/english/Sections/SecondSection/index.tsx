import InfoBlock, {
    type IBlockData,
} from "@modules/english/components/InfoBlock";
import * as paths from "@modules/english/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const SecondSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-second-section-content">
                <div className="english-second-section-header">
                    <h1 className="english-section-title">{content.title}</h1>

                    <span className="english-section-description">
                        {content.description}
                    </span>
                </div>

                <div className="english-second-section-blocks-container">
                    {content.content.map(
                        (contentData: IBlockData, index: number) => (
                            <InfoBlock
                                id={`english-second-section-block-${index}`}
                                className="english-second-section-block"
                                key={index}
                                title={contentData.title}
                                description={contentData.description}
                                labels={contentData.content}
                                imagePath={paths.blocks.secondSection[index]}
                                flexDirection="row-reverse"
                                titleStyles={{
                                    backgroundColor: "#E0B53D",
                                }}
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
