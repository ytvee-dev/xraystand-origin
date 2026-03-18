import React, {type ReactElement} from "react";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentRu from "@modules/physics/locales/rus.json";
import * as textContentKz from "@modules/physics/locales/rus.json";
import * as mathPaths from "@modules/math/locales/paths.json";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import ParentCard, {type ParentCardProps, type SubCard} from "@modules/physics/components/LevelCards/ParentCard";
import './style.css'

const FifthSection: React.FC = (): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const content = textContent.lawsAndConstantsSection.content
    const cards: ParentCardProps[] = [];

    content.forEach((item) => {
        if (item.title.length > 0) {
            cards.push({
                title: item.title,
                subCards: item.description  as SubCard[],
            })
        }
    })

   const cardsLeft = cards.slice(0, 3);
   const cardsRight = cards.slice(3);

    return (
        <section className='physics-fifth-section'>
            <div className="physics-img-background">
                <img src={mathPaths.svg.heroBg} alt='background'/>
            </div>

            <div className="physics-fifth-content-wrapper">
                <BackgroundedTitle title={textContent.lawsAndConstantsSection.title}/>

                <div className="physics-fifth-section-cards">
                    <div className="physics-fifth-cards-wrapper">
                        {cardsLeft.map((card) =>
                            <ParentCard key={card.title} title={card.title} subCards={card.subCards}/>
                        )}
                    </div>
                    <div className="physics-fifth-cards-wrapper">
                        {cardsRight.map((card) =>
                            <ParentCard key={card.title} title={card.title} subCards={card.subCards}/>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FifthSection;