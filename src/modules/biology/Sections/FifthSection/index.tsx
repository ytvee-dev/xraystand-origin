import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";
import DSNotification from "@components/common/DSNotification";
import { SvgSpriteIds } from "@utils/constants";

const FifthSection: React.FC<BiologySectionProps> = ({className}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <div className="left-content-section">
                <h1 className="title">{textContent.evolutionSection.title}</h1>
                <div className="description">
                    {textContent.evolutionSection.description}
                </div>

                <div className="card-section">
                    <div className="card" id="card-left">
                        <span className="card-title">{textContent.evolutionSection.content[0].description}</span>
                        
                        <div className="main-description">
                            {textContent.evolutionSection.content[1].description}
                        </div>

                        <span>{textContent.evolutionSection.content[2].description}</span>

                        <ul className="card-description-list">
                            <li>{textContent.evolutionSection.content[3].description}</li>
                            <li>{textContent.evolutionSection.content[4].description}</li>
                            <li>{textContent.evolutionSection.content[5].description}</li>
                        </ul>

                    </div>
                    <div className="card" id="card-right">
                        <span className="card-title">{textContent.evolutionSection.content[6].description}</span>

                        <ul className="card-description-list">
                            <li>{textContent.evolutionSection.content[7].description}</li>
                            <li>{textContent.evolutionSection.content[8].description}</li>
                            <li>{textContent.evolutionSection.content[9].description}</li>
                            <li>{textContent.evolutionSection.content[10].description}</li>
                        </ul>
                    </div>
                </div>

                <DSNotification 
                    className="biology-fifth-section-notification"
                    content={textContent.evolutionSection.notificationLabel}
                    iconName={SvgSpriteIds.BIOLOGY_CELL} 
                    backgroundColor="#7A61A0"
                    textColor="#FFFFFF"
                    iconColor="#FFFFFF"
                    borderRadius="2.5rem"
                    padding = "0 0"
                    iconWidth="2.4375rem"
                    iconHeight="2.4375rem"
                    cardGap="24px"
                />
            </div>

            <div className="right-content-section">
                <img className="image" src={paths.images.evoSection} alt="image" />
            </div>
        </section>
    )
}

export default FifthSection;