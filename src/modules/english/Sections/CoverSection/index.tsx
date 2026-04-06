import * as paths from "@modules/english/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const CoverSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <img
                className="english-cover-section-background-image"
                src={paths.backgrounds.coverSection}
                alt="image"
            />

            <div className="english-cover-section-content">
                <h1 className="english-cover-section-title">
                    {content.coverSection.title}
                </h1>

                <div className="english-cover-section-blocks-container">
                    {paths.other.coverSection.map(
                        (src: string, index: number) => (
                            <img
                                key={index}
                                id={`english-block-image-${index}`}
                                className="english-cover-section-block-image"
                                src={src}
                                alt="image"
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
