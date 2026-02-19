import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";

const CoverSection: React.FC<BiologySectionProps> = ({
    className,
}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const heroContentTextArray: string[] = textContent.coverSection.title.split(" ");

    return (
        <section className={className}>
            <img
                id="bio-back-svg-1"
                className="bio-background-svg"
                src={paths.backgrounds[17]}
                alt="image"
            />
            <img
                id="bio-back-svg-2"
                className="bio-background-svg"
                src={paths.backgrounds[16]}
                alt="image"
            />
            <img
                id="bio-back-svg-3"
                className="bio-background-svg"
                src={paths.backgrounds[15]}
                alt="image"
            />
            <img
                id="bio-back-svg-4"
                className="bio-background-svg"
                src={paths.backgrounds[13]}
                alt="image"
            />

            <div className="biology-hero-wrapper">
                <div className="biology-hero-content">
                    <img
                        className="bio-hero-content-svg"
                        id="bio-content-back-lower"
                        src={paths.backgrounds[19]}
                        alt={"image"}
                    />
                    <img
                        className="bio-hero-content-svg"
                        id="bio-content-back-upper"
                        src={paths.backgrounds[18]}
                        alt={"image"}
                    />
                    <img
                        className="bio-hero-content-svg"
                        id="bio-content-darvin"
                        src={paths.backgrounds[0]}
                        alt={"image"}
                    />

                    <div className="biology-hero-content-text">
                        <div className="upper-block">
                            <h1>{heroContentTextArray[0]}</h1>

                            <img
                                className="bio-hero-content-text-svg"
                                src={paths.images[8]}
                                alt=""
                            />
                        </div>
                        <div className="lower-block">
                            <img
                                className="bio-hero-content-text-svg"
                                src={paths.images[9]}
                                alt=""
                            />

                            <h1>{heroContentTextArray[1]}</h1>
                        </div>
                    </div>
                </div>
                <p id="subtitle">{textContent.coverSection.subTitle}</p>
            </div>
        </section>
    );
};

export default CoverSection;
