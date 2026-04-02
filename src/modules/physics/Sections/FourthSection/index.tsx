import React, {type ReactElement} from "react";
import * as mathPaths from "@modules/math/locales/paths.json";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import ParentCard, {type ParentCardProps, type SubCard} from "@modules/physics/components/LevelCards/ParentCard";
import './style.css'

interface ICardparagraph {
    imageName: string,
    text: string,
}

interface ICardContent {
    title: string,
    subTitle: string,
    description: ICardparagraph[]
}

interface IFourthContent {
    title: string,
    description: string,
    content: ICardContent[]
}

interface IFourthSectionProps {
    content: IFourthContent
}

const FourthSection: React.FC<IFourthSectionProps> = ({content}: IFourthSectionProps): ReactElement => {
    const cardsContent = content.content
    const cards: ParentCardProps[] = [];

    cardsContent.forEach((item) => {
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
                <BackgroundedTitle title={content.title}/>

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

export default FourthSection;