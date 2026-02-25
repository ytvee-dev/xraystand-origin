import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import * as textContentRu from "@modules/physics/locales/rus.json";
import * as textContentKz from "@modules/physics/locales/rus.json";
import * as paths from "@modules/physics/locales/paths.json";
import * as mathPaths from "@modules/math/locales/paths.json";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import ParentCard from "@modules/physics/components/LevelCards/parentCard";
import './style.css'

type TPhysicsCard = {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    img?: string;
    imgClassIndex?: number;
};

const FifthSection: React.FC = (): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const content = textContent.lawsAndConstantsSection.content
    let cards: TPhysicsCard[] = [];

    const imgPaths = Object.values(paths.formulas);

    content.forEach((item) => {
        cards.push({
            id: `card-${cards.length + 1}`,
            title: item.title,
            subtitle: item.subTitle,
            description: item.description,
        })
    })

    let imgId = 0;

    for(let i = 0; i < content.length; i++) {
                    console.log(i)
        if ( i > 0 && i <= 2) {
            cards[i].img = imgPaths[imgId]
            cards[i].imgClassIndex = imgId
            imgId++;
        }
        else if( i > 2 && i % 2 == 1 ) {
            cards[i].img = imgPaths[imgId]
            cards[i].imgClassIndex = imgId
            imgId++;
        }

        if( i > 4  && i % 3 == 0) {
            cards[i].description = cards.map(item => item.description).join(`\n`);
            console.log(cards[i].description);  
            // cards[i].description += `\n AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ${cards[i + 1].description}`
        }
    };

    const [firstCard, secondCard, thirdCard, fourthCard, fifthCard] = React.useMemo(() => {
        const items = cards ?? [];
        const firstCard = items.slice(0,3);
        const secondCard = items.slice(3,5);
        const thirdCard = items.slice(5,7);
        const fourthCard = items.slice(8,11);
        const fifthCard = items.slice(11);

        return [firstCard, secondCard, thirdCard, fourthCard, fifthCard];
    }, [content])

    const array = [firstCard, secondCard, thirdCard, fourthCard, fifthCard]

    return (
        <section className='physics-fifth-section'>
            <div className="physics-img-background">
                <img src={mathPaths.svg.heroBg} alt='background'/>
            </div>

            <div className="physics-fifth-content-wrapper">
                <BackgroundedTitle title={textContent.lawsAndConstantsSection.title}/>
                <div className="physics-fifth-cards-wrapper">
                {array.map((item, index) => 
                    <ParentCard content={item} key={index}/>
                )}
                </div>
            </div>
        </section>
    )
}

export default FifthSection;