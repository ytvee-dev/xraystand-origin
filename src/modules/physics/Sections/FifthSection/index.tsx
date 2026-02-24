import React from "react";
import { useLocaleContent } from "@hooks/useLocale";
import * as textContentRu from "@modules/physics/locales/rus.json";
import * as textContentKz from "@modules/physics/locales/rus.json";
import * as paths from "@modules/physics/locales/paths.json";
import * as mathPaths from "@modules/math/locales/paths.json";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import ParentCard from "@modules/physics/components/LevelCards/parentCard";
import './style.css'

const FifthSection = () => {
    const content = useLocaleContent(textContentRu, textContentKz);

    const [firstCard, secondCard, thirdCard, fourthCard, fifthCard] = React.useMemo(() => {
        const items = content.lawsAndConstantsSection.content ?? [];
        const firstCard = items.slice(0,3);
        const secondCard = items.slice(3,5);
        const thirdCard = items.slice(5,7);
        const fourthCard = items.slice(7,10);
        const fifthCard = items.slice(10);

        return [firstCard, secondCard, thirdCard, fourthCard, fifthCard];
    }, [content.lawsAndConstantsSection.content])

    const array = [firstCard, secondCard, thirdCard, fourthCard, fifthCard]

    return (
        <section className='physics-fifth-section'>
            <div className="physics-img-background">
                <img src={mathPaths.svg.heroBg} alt='background'/>
            </div>

            <div className="physics-fifth-content-wrapper">
                <BackgroundedTitle title={content.lawsAndConstantsSection.title}/>
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