import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";
import { SvgSpriteIds } from "@utils/constants";

const FirstSection: React.FC<BiologySectionProps> = ({
    className,
}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <div className="biology-first-section-content">
                <div className="biology-first-section-text-block">
                    <h1 className="biology-first-section-text-block-title">
                        {textContent.lifeComponentsSection.title}
                    </h1>
                    <div className="biology-first-section-text-block-description">
                        {textContent.lifeComponentsSection.description}
                    </div>
                </div>

                <div className="biology-first-section-visual-block">
                    <img
                        id="centered-svg"
                        src={paths.backgrounds.other[0]}
                        alt="background"
                        className="biology-first-section-centered-svg"
                    />

                    <div className="biology-first-section-pictures-block">
                        {paths.images.firstSection.map((src, index) => (
                            <img
                                key={`picture-${index}`}
                                id={`pictures-block-svg-${index + 1}`}
                                className="pictures-block-svg"
                                src={src}
                                alt={`biology illustration ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <DSNotification
                content={textContent.lifeComponentsSection.notificationLabel}
                iconName={SvgSpriteIds.BIOLOGY_CELL}
                className="biology-first-section-notification"
                backgroundColor="#489484"
                textColor="#FFFFFF"
                iconColor="#FFFFFF"
                borderRadius="2.5rem"
                padding="0 0"
                iconWidth="2.4375rem"
                iconHeight="2.4375rem"
                cardGap="24px"
            />
        </section>
    );
};

export default FirstSection;
