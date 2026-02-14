import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type MathSectionProps } from "@modules/math/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";

const FirstSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <div className="biology-first-section-text-block">
                <h1 className="biology-first-section-text-block-title">{textContent.lifeComponentsSection.title}</h1>
                <div className="biology-first-section-text-block-description">{textContent.lifeComponentsSection.description}</div>
                <DSNotification content={textContent.lifeComponentsSection.notificationLabel}/>
            </div>

            <img id="centered-svg" src={paths.backgrounds[13]} alt="image" />

            <div className="biology-first-section-pictures-block">
                <img id="pictures-block-svg-1" className="pictures-block-svg" src={paths.images[12]} alt="image" />
                <img id="pictures-block-svg-2" className="pictures-block-svg" src={paths.images[11]} alt="image" />
                <img id="pictures-block-svg-3" className="pictures-block-svg" src={paths.images[10]} alt="image" />
            </div>
        </section>
    );
};

export default FirstSection;
