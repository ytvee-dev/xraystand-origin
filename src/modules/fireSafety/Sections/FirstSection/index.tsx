import React, { type ReactElement } from "react";
import Card from "@modules/fireSafety/components/Card";
import * as paths from "@modules/firesafety/locales/paths.json";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import type { TCard } from "@modules/math/Sections/SecondSection";
import { getFlexDirection } from "@utils/stylesHelper.ts";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import "./style.css";

const FirstSection: React.FC<FireSafetySectionProps> = ({
    className,
    style,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const { isMobile } = usePageData();

    const cards: TCard[] = textContent.fireCausesSection.content.map(
        (contentItem, idx) => {
            return {
                id: String("index-" + idx + 1),
                title: contentItem.title,
                subtitle: contentItem.subTitle,
                description: contentItem.description,
                image: paths.cards.firstSection[idx] || "",
            };
        },
    );

    const titleClassname: string = !isMobile ? "header-text" : "title-text";

    return (
        <section className={className} style={style}>
            <div className="fire-safety-first-section-content-wrapper-background">
                <img
                    className="fire-safety-first-section-content-wrapper-background-image"
                    src={paths.backgrounds.orangeSmoke}
                    alt={
                        "fire-safety-first-section-content-wrapper-background-image"
                    }
                />
            </div>
            <div className="fire-safety-first-section-content-wrapper">
                <h2 className={`${titleClassname} centered-text`}>
                    {textContent.fireCausesSection.title}
                </h2>

                <div className="fire-causes">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            className="fire-safety-types-card"
                            title={card.title}
                            description={card.description}
                            imagePath={card.image}
                            flexDirection={card && getFlexDirection(card)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
