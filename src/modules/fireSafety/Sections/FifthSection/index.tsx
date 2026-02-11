import React, { type ReactElement } from "react";
import Card from "@modules/fireSafety/components/Card";
import DSNotification from "@components/common/DSNotification";
import * as paths from "@modules/fireSafety/locales/paths.json";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import type { TCard } from "@modules/math/Sections/SecondSection";
import { captionTextStyle } from "@modules/fireSafety/cssStyles";
import { getFlexDirection } from "@utils/stylesHelper.ts";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import { SvgSpriteIds } from "@utils/constants";
import "./style.css";

const FifthSection: React.FC<FireSafetySectionProps> = ({
    className,
    style,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const { isMobile } = usePageData();

    const suppressions: TCard[] =
        textContent.fireSuppressionSection.content.suppressions.map(
            (contentItem, idx) => {
                return {
                    id: String("index-" + idx + 1),
                    title: contentItem.title,
                    subtitle: contentItem.subTitle,
                    description: contentItem.description,
                    image: paths.cards.fifthSection[idx] || "",
                };
            },
        );

    const rulesNotificationContents: string[][] =
        textContent.fireSuppressionSection.content.rulesNotifications.map(
            (rules) => rules.map((ruleData) => ruleData.description),
        );

    const titleClassname: string = !isMobile ? "header-text" : "title-text";

    return (
        <section className={className} style={style}>
            <div className="fire-safety-fifth-section-content-wrapper-background">
                <img
                    className="fire-safety-fifth-section-content-wrapper-background-city"
                    src={paths.backgrounds.houseBackdrops}
                    alt={
                        "fire-safety-fifth-section-content-wrapper-background-city"
                    }
                />
            </div>
            <div className="fire-safety-fifth-section-content-wrapper">
                <h2 className={`${titleClassname} centered-text`}>
                    {textContent.fireSuppressionSection.title}
                </h2>

                <div className="fire-suppressions">
                    {suppressions.map((card) => (
                        <Card
                            key={card.id}
                            className="fire-safety-types-card"
                            title={card.title}
                            description={card.description}
                            imagePath={card.image}
                            flexDirection={card && getFlexDirection(card)}
                            style={{ width: "100%", maxWidth: "none" }}
                        />
                    ))}
                </div>
                <div className="fire-safety-fifth-section-content-rules">
                    {rulesNotificationContents.map(
                        (rules: string[], index: number) => (
                            <DSNotification
                                key={index}
                                content={rules}
                                backgroundColor="#C7493C"
                                borderColor="#FFFFFF"
                                textColor="#FFFFFFDE"
                                iconColor="#FFFFFF"
                                iconName={SvgSpriteIds.FIRE_SAFETY_WARNING}
                                iconWidth="2.813rem"
                                iconHeight="2.5rem"
                                borderRadius="1.563rem"
                                cardGap="0.75rem"
                                alertStyle={{
                                    ...captionTextStyle,
                                    justifyContent: "start",
                                    alignContent: "start",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
