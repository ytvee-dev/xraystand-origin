import React, { type ReactElement } from "react";
import * as paths from "@modules/math/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import type { TCard } from "@modules/math/Sections/SecondSection";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import { SvgSpriteIds } from "@utils/constants";
import "./style.css";

const SecondSection: React.FC<FireSafetySectionProps> = ({
    className,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const { isMobile } = usePageData();

    const cards: TCard[] = textContent.smokeAndFireSection.content.map(
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

    const titleClassname: string = !isMobile ? "header-text" : "title-text";

    return (
        <section className={className}>
            <div className="fire-safety-second-section-content-wrapper">
                <h2 className={`${titleClassname} centered-text`}>
                    {textContent.smokeAndFireSection.title}
                </h2>
                <div className="fire-safety-description caption-text centered-text">
                    {textContent.smokeAndFireSection.description}
                </div>

                <div className="smoke-and-fire-list">
                    {cards.map((card, idx) => (
                        <DSNotification
                            className="smoke-and-fire-notification caption-text"
                            key={idx}
                            content={card.description}
                            type="warning"
                            backgroundColor={"#C7493C"}
                            borderColor={"#FFFFFF"}
                            textColor={"#FFFFFFDE"}
                            iconName={SvgSpriteIds.FIRE_SAFETY_WARNING}
                            iconWidth="2.813rem"
                            iconHeight="2.5rem"
                            iconColor={"#FFFFFF"}
                            borderRadius="1.563rem"
                            fullWidth
                            alertStyle={{ height: "100%" }}
                            cardGap="0.75rem"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
