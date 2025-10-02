import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";
import {useLocaleContent} from "@hooks/useLocale";
import GridCard from "@modules/math/components/GridCard";
import paths from "@modules/math/locales/paths.json";
import * as textContentKz from "@modules/math/locales/kaz.json";
import * as textContentRu from "@modules/math/locales/rus.json";
import "./style.css";

const FourthSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const cards = textContent.fourthSection.content;

    return (<section className={className}>
        <div className='math-fourth-section-background'>
            <img src={paths.svg.smallSpiral} alt={'background'}/>
        </div>
        
        <div className='math-fourth-section-content'>
            <h2>{textContent.fourthSection.description}</h2>
            
            <div className='math-cards-grid'>
                {cards.map((card, idx) => (
                    <GridCard
                        key={idx}
                        title={card.title}
                        description={card.description}
                        imagePath={paths.cubes[paths.cubes.length - 1 - idx]}
                    />
                ))}
            </div>
        </div>
    </section>);
};

export default FourthSection;
