import InfoBlock, {
    type IBlockData,
} from "@modules/english/components/InfoBlock";
import * as paths from "@modules/english/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import { type ReactElement } from "react";
import "./style.css";

export interface IParagraphData {
    title?: string;
    content?: IBlockData[];
}

const SixthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-sixth-section-header">
                <h1 className="english-section-title">{content.title}</h1>

                <span className="english-section-description">
                    {content.description}
                </span>
            </div>

            <div className="english-sixth-section-content">
                {content.content.map(
                    (paragraphData: IParagraphData, i: number) => (
                        <div
                            className="english-sixth-section-paragraph"
                            key={i}
                        >
                            <h1 className="english-sixth-section-subtitle">
                                {paragraphData.title}
                            </h1>

                            <div className="english-sixth-section-blocks-container">
                                {paragraphData.content?.map(
                                    (
                                        contentData: IBlockData,
                                        index: number,
                                    ) => (
                                        <InfoBlock
                                            className="english-sixth-section-block"
                                            key={index}
                                            title={contentData.title}
                                            description={
                                                contentData.description
                                            }
                                            labels={contentData.content}
                                            flexDirection="column"
                                            titleStyles={{
                                                backgroundColor: "#97BD66",
                                            }}
                                            imagePath={
                                                paths.blocks.sixthSection[i][
                                                    index
                                                ]
                                            }
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    ),
                )}
            </div>
        </section>
    );
};

export default SixthSection;
