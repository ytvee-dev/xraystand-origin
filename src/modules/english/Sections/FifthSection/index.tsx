import InfoBlock, {
    type IBlockData,
} from "@modules/english/components/InfoBlock";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const FifthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="english-fifth-section-content">
                <div className="english-fifth-section-header">
                    <h1 className="english-section-title">{content.title}</h1>

                    <p className="english-section-description">
                        {content.description}
                    </p>
                </div>

                <div className="english-fifth-section-blocks-container">
                    {content.content.map(
                        (contentData: IBlockData, index: number) => (
                            <InfoBlock
                                className="english-fifth-section-block"
                                key={index}
                                title={contentData.title}
                                description={contentData.description}
                                labels={contentData.content}
                                flexDirection="column"
                                titleStyles={{
                                    backgroundColor: "#97BD66",
                                }}
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
