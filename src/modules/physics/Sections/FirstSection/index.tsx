import React, { type ReactElement } from "react";
import CubeCard from "@modules/math/components/CubeCard";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as paths from "@modules/physics/locales/paths.json";
import { svg } from "@modules/math/locales/paths.json";
import "./style.css";

interface ICardsContent {
    title: string
    subTitle: string
    description: string
}

interface IFirstContent {
    title: string,
    subTitle: string,
    description: string,
    content: ICardsContent[]
}

interface IFirstSectionProps {
    content: IFirstContent
}

type TPhysicsCard = {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
};

const FirstSection: React.FC<IFirstSectionProps> = ({ content }: IFirstSectionProps): ReactElement => {
    const cardsContent: ICardsContent[] = content.content
    const cards: TPhysicsCard[] = [];

    cardsContent.forEach((item) => {
        if (item.title) {
            cards.push({
                id: `card-${cards.length + 1}`,
                image: paths.cardsImage[cards.length] || "",
                title: item.title,
                subtitle: item.subTitle,
                description: item.description,
            });
        } else {
            const lastCard = cards[cards.length - 1];
            if (lastCard) {
                lastCard.description += `\n\n${item.description}`;
            }
        }
    });

    return (
        <section className={`physics-first-section first-section`}>
            <div className="physics-first-section-background">
                <img src={svg.heroBg} alt="background" className="bg-img-1" />
                <img src={svg.heroBg} alt="background" className="bg-img-2" /> 
            </div>

            <div className="physics-first-section-content-wrapper">
                <BackgroundedTitle
                    title={content.title}
                    description={content.description}
                    bgColor="#ee7630"
                    titleFontWeight="700"
                    fullWidth
                />
                <div className="physics-first-section-grid">

                    <div className="left-content-cards">
                        {cards.slice(0, 4).map((card) => (
                        <CubeCard
                            key={card.id}
                            className="physics-types-card"
                            imagePath={card.image}
                            title={card.title}
                            description={card.description}
                            flexDirection="row-reverse"
                        />
                    ))}
                    </div>

                    <div className="right-content-cards">
                        {cards.slice(4, 8).map((card) => (
                        <CubeCard
                            key={card.id}
                            className="physics-types-card"
                            imagePath={card.image}
                            title={card.title}
                            description={card.description}
                            flexDirection="row-reverse"
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;