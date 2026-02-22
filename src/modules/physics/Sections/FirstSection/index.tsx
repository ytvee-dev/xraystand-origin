import React, { type ReactElement } from "react";
import type { MathSectionProps } from "@modules/math/types";
import { useLocaleContent } from "@hooks/useLocale";
import CubeCard from "@modules/math/components/CubeCard";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as paths from "@modules/physics/locales/paths.json";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import "./style.css";

type TPhysicsCard = {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
};

const FirstSection: React.FC<MathSectionProps> = ({ className }: MathSectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const content = textContent.physicsBranchesSection.content;

    const cards: TPhysicsCard[] = [];

    content.forEach((item) => {
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
        <section className={`physics-first-section ${className || ""}`}>
            <div className="physics-first-section-content-wrapper">
                <BackgroundedTitle
                    title={textContent.physicsBranchesSection.title}
                    description={textContent.physicsBranchesSection.description}
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
