import React, { type ReactElement } from "react";
import Card from "@modules/fireSafety/components/Card";
import * as paths from "@modules/math/locales/paths.json";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import type { TCard } from "@modules/math/Sections/SecondSection";
import { getFlexDirection } from "@utils/stylesHelper.ts";
import { useLocaleContent } from "@hooks/useLocale";
import "./style.css";

const FirstSection: React.FC<FireSafetySectionProps> = ({
    className,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const cards: TCard[] = textContent.fireCausesSection.content.map(
        (contentItem, idx) => {
            return {
                id: String("index-" + idx + 1),
                title: contentItem.title,
                subtitle: contentItem.subTitle,
                description: contentItem.description,
                image: paths.cards[idx] || "",
            };
        },
    );

    return (
        <section className={className}>
            <div className="fire-safety-first-section-content-wrapper">
                <h2 className="header-text centered-text">
                    {textContent.fireCausesSection.title}
                </h2>

                <div className="fire-causes">
                    {cards.map((card, idx) => (
                        <Card
                            key={card.id}
                            className="fire-safety-types-card"
                            title={card.title}
                            description={card.description}
                            imagePath={paths.cubes[idx]}
                            flexDirection={card && getFlexDirection(card)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
