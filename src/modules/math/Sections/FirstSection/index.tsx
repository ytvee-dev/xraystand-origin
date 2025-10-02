import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";
import type {TCard} from "@modules/math/Sections/SecondSection";
import { useMathPageData } from "@hooks/useMathPageData";
import {getFlexDirection} from "@utils/stylesHelper.ts";
import CubeCard from "@modules/math/components/CubeCard";
import * as paths from "@modules/math/locales/paths.json";
import "./style.css";

const FirstSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const { textContent } = useMathPageData();

    const cards: TCard[] = textContent.firstSection.content.map((contentItem, idx) => {
        return {
            id: String('index-' + idx + 1),
            title: contentItem.title,
            subtitle: contentItem.subTitle,
            description: contentItem.description,
            image: paths.cards[idx] || ""
        };
    });

    return (
        <section className={className}>
            <div className='math-first-section-background'>
                <img src={paths.svg.left} alt={'image'}/>
                <img src={paths.svg.right} alt={'image'}/>
            </div>

            <div className='math-first-section-content-wrapper'>
                <h2>{textContent.firstSection.title}</h2>

                {cards.map((card, idx) => (
                    <CubeCard
                        key={card.id}
                        className='math-types-card'
                        title={card.title}
                        description={card.description}
                        imagePath={paths.cubes[idx]}
                        flexDirection={card && getFlexDirection(card)}
                    />
                ))}

            </div>
        </section>
    );
};

export default FirstSection;
