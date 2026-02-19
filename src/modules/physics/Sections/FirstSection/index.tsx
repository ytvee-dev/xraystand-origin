import React, { type ReactElement } from "react";
import type { MathSectionProps } from "@modules/math/types";
import { useLocaleContent } from "@hooks/useLocale";
import CubeCard from "@modules/math/components/CubeCard";
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
                title: item.title,
                subtitle: item.subTitle,
                description: item.description,
                image: paths.cardsImage[cards.length] || "",
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
                <h2>{textContent.physicsBranchesSection.title}</h2>

                <div className="physics-first-section-grid">
                    {cards.slice(0, 8).map((card) => (
                        <CubeCard
                            key={card.id}
                            className="physics-types-card"
                            title={card.title}
                            description={card.description}
                            imagePath={card.image}
                            flexDirection="row-reverse"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
