import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";

const SecondSection: React.FC<BiologySectionProps> = ({className}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const cardsContent = [
        {   
            src: paths.cards[15],
            title: textContent.featuresSection.content[0].title,
            description: textContent.featuresSection.content[0].description,
        },

        {   
            src: paths.cards[18],
            title: textContent.featuresSection.content[1].title,
            description: textContent.featuresSection.content[1].description,
        },

        {   
            src: paths.cards[19],
            title: textContent.featuresSection.content[2].title,
            description: textContent.featuresSection.content[2].description,
        },

        {   
            src: paths.cards[21],
            title: textContent.featuresSection.content[3].title,
            description: textContent.featuresSection.content[3].description,
        },

        {   
            src: paths.cards[11],
            title: textContent.featuresSection.content[4].title,
            description: textContent.featuresSection.content[4].description,
        },

        {   
            src: paths.cards[17],
            title: textContent.featuresSection.content[5].title,
            description: textContent.featuresSection.content[5].description,
        },

        {   
            src: paths.cards[22],
            title: textContent.featuresSection.content[6].title,
            description: textContent.featuresSection.content[6].description,
        },

        {   
            src: paths.cards[10],
            title: textContent.featuresSection.content[7].title,
            description: textContent.featuresSection.content[7].description,
        },
    ]

    return (
        <section className={className}>
            <img id="biology-second-section-background-svg-1" src={paths.backgrounds[13]} alt="image" />
            <img id="biology-second-section-background-svg-2" src={paths.backgrounds[13]} alt="image" />

            <div className="cell-structure-header-block">
                <span className="title">{textContent.featuresSection.title}</span>
                <div className="description">{textContent.featuresSection.description}</div>
            </div>

            <div className="biology-second-section-cards-grid">
                {cardsContent.map((card) => (
                    <div className="biology-second-section-card" key={card.title}>
                        <img className="card-image" src={card.src} alt="card-image" />

                        <div className="card-text-section">
                            <span className="card-title">{card.title}</span>
                            <div className="card-description">
                                {card.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SecondSection;