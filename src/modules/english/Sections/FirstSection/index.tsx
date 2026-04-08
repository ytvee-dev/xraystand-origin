import InfoBlock, {
    type IBlockData,
} from "@modules/english/components/InfoBlock";
import * as paths from "@modules/english/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const FirstSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-first-section-content">
                <h1 className="english-section-title">{content.title}</h1>

                <div className="english-first-section-blocks-container">
                    {content.content.map(
                        (contentData: IBlockData, index: number) => (
                            <InfoBlock
                                className="english-first-section-block"
                                key={index}
                                title={contentData.title}
                                description={contentData.description}
                                labels={contentData.content}
                                imagePath={paths.blocks.firstSection[index]}
                                flexDirection="column"
                                titleStyles={{ backgroundColor: "#E55F65" }}
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
