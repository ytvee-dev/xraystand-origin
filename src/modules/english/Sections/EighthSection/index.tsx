import InfoBlock, {
    type IBlockData,
} from "@modules/english/components/InfoBlock";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const EighthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-eighth-section-content">
                <div className="english-eighth-section-header">
                    <h1 className="english-section-title">{content.title}</h1>
                </div>

                <div className="english-eighth-section-blocks-container">
                    {content.content.map(
                        (contentData: IBlockData, index: number) => (
                            <InfoBlock
                                className="english-eighth-section-block"
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
            </div>
        </section>
    );
};

export default EighthSection;
