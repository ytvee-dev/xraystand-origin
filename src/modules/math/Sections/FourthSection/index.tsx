import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";

import "./style.css";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/math/locales/kaz.json";
import * as textContentRu from "@modules/math/locales/rus.json";
import paths from "@modules/math/locales/paths.json";
import CubeCard from "@modules/math/components/CubeCard";
import type {TCard} from "@modules/math/Sections/SecondSection";
import {getFlexDirection} from "@modules/math/Sections/FirstSection";

const FourthSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const isMobile = useScreenWidth() < 800;
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const textContent = currentLocale === Languages.KAZAKH ? textContentKz : textContentRu;

    const cards: TCard[] = textContent.fourthSection.content.map((contentItem, idx) => {
        return {
            id: String('index-' + idx + 1),
            title: contentItem.title,
            subtitle: contentItem.subTitle,
            description: contentItem.description,
            image: paths.cards[idx] || ""
        };
    });

    return (<section className={className}>
        <div className='math-last-background-layout'>
            <img src={paths.svg.right} alt={'image'}/>
            {/*<img src={paths.svg.smallNet} alt={'image'}/>*/}
        </div>
        <div className='math-cards-content'>
            {cards.map((card, idx) => (
                <CubeCard
                    key={card.id}
                    className='math-types-card'
                    title={card.title}
                    description={card.description}
                    imagePath={paths.cubes[paths.cubes.length - idx]}
                    flexDirection={card && getFlexDirection(card)}
                />
            ))}
        </div>
    </section>);
};

export default FourthSection;
