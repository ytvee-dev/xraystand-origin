import * as paths from "@modules/english/locales/paths.json";
import * as textContentKz from "@modules/english/locales/kaz.json";
import * as textContentRu from "@modules/english/locales/rus.json";
import * as textContentEn from "@modules/english/locales/en.json";
import type { BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import type { ReactElement } from "react";
import "./style.css";

const CoverSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(
        textContentRu,
        textContentKz,
        textContentEn,
    );

    return (
        <section className={className}>
            <img
                className="english-cover-section-background-image"
                src={paths.backgrounds.coverSection}
                alt="image"
            />

            <div className="english-cover-section-content">
                <h1 className="english-cover-section-title">
                    {textContent.coverSection.title}
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
