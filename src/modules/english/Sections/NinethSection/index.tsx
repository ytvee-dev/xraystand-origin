import type { IBlockData } from "@modules/english/components/InfoBlock";
import TextBlock from "@modules/english/components/TextBlock";
import TextBlockWrapper from "@modules/english/components/TextBlockWrapper";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const NinethSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-nineth-section-content">
                <div className="english-nineth-section-header">
                    <h1 className="english-section-title">{content.title}</h1>

                    <span className="english-section-description">
                        {content.description}
                    </span>
                </div>

                <div className="english-nineth-section-blocks-container">
                    {content.content.map(
                        (contentData: IBlockData, index: number) => (
                            <TextBlockWrapper
                                className="english-nineth-section-block"
                                key={index}
                                title={contentData?.title}
                            >
                                {contentData.content?.map(
                                    (blockData: IBlockData, i: number) => (
                                        <TextBlock
                                            key={i}
                                            title={blockData.title}
                                            labels={blockData.content}
                                        />
                                    ),
                                )}
                            </TextBlockWrapper>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default NinethSection;
