import React, {type ReactElement} from "react";
// import {usePreloadImages} from "@hooks/usePreloadImages.ts";
// import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
// import * as paths from '@modules/math/locales/paths.json';
import type {MathSectionProps} from "@modules/math/types";

import "./style.css";
import * as paths from "@modules/math/locales/paths.json";
import {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/math/locales/kaz.json";
import * as textContentRu from "@modules/math/locales/rus.json";
import type {TCard} from "@modules/math/Sections/SecondSection";
import CubeCard, {type TFlexDirection} from "@modules/math/components/CubeCard";

const leftBgImage = "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000203/left_q5qzyv.svg";
const rightBgImage = "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000204/right_sklkk4.svg";
const cardsImages = [
    "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757002693/1_h0uixd.png",
    "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757002694/2_bdbt6i.png",
    "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757002695/3_x3jlci.png",
    "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757002695/4_gmz9mh.png",
    "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757002688/5_gwwg6c.png",
    "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757002688/6_yhfgl8.png",
    "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757002689/7_zc7thi.png",
];

const getFlexDirection = (card: TCard): TFlexDirection => {
    const id: number = Number(card.id.slice(card.id.length-2, -1));
    if (id % 2 == 0) {
        return 'row';
    }
    return 'row-reverse';
}

const FirstSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const textContent = currentLocale === Languages.KAZAKH ? textContentKz : textContentRu;

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
                <img src={leftBgImage} alt={'image'}/>
                <img src={rightBgImage} alt={'image'}/>
            </div>

            <div className='math-first-section-content-wrapper'>
                <h2>{textContent.firstSection.title}</h2>

                {cards.map((card, idx) => (
                    <CubeCard
                        key={card.id}
                        className='math-types-card'
                        title={card.title}
                        description={card.description}
                        imagePath={cardsImages[idx]}
                        flexDirection={card && getFlexDirection(card)}
                    />
                ))}

            </div>
        </section>
    );
};

export default FirstSection;
