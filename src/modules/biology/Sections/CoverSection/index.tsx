import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";

const coverSectionBackgroundsSrcArray: string[] = [
    paths.backgrounds[17],
    paths.backgrounds[16],
    paths.backgrounds[15],
    paths.backgrounds[13]
]

const coverSectionHeroContent = [
    {
        id: "bio-content-back-lower",
        src: paths.backgrounds[19]
    },
    {
        id: "bio-content-back-upper",
        src: paths.backgrounds[18]
    },
    {
        id: "bio-content-darvin",
        src: paths.backgrounds[0]
    }
]

const CoverSection: React.FC<BiologySectionProps> = ({
    className,
}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const heroContentTextArray: string[] = textContent.coverSection.title.split(" ");

    return (
        <section className={className}>
            {coverSectionBackgroundsSrcArray.map((src, index) => (
                <img
                    key={index}
                    id={`bio-back-svg-${index + 1}`}
                    className="bio-background-svg"
                    src={src}
                    alt="image"
                />
            ))}

            <div className="biology-hero-wrapper">
                <div className="biology-hero-content">
                    {coverSectionHeroContent.map((imgContent, index) => (
                        <img
                            key={index}
                            className="bio-hero-content-svg"
                            id={imgContent.id}
                            src={imgContent.src}
                            alt={"image"}
                        />
                    ))}

                    <div className="biology-hero-content-text">
                        <div className="upper-block">
                            <h1>{heroContentTextArray[0]}</h1>

                            <img
                                className="bio-hero-content-text-svg"
                                src={paths.images.coverSection[0]}
                                alt=""
                            />
                        </div>
                        <div className="lower-block">
                            <img
                                className="bio-hero-content-text-svg"
                                src={paths.images.coverSection[1]}
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
