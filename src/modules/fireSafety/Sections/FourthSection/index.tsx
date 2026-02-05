import React, { type ReactElement } from "react";
import Card from "@modules/fireSafety/components/Card";
import DSNotification from "@components/common/DSNotification";
import * as paths from "@modules/firesafety/locales/paths.json";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import type { TCard } from "@modules/math/Sections/SecondSection";
import { captionTextStyle } from "@modules/fireSafety/cssStyles";
import { getFlexDirection } from "@utils/stylesHelper";
import { useLocaleContent } from "@hooks/useLocale";
import { SvgSpriteIds } from "@utils/constants";
import "./style.css";

const FourthSection: React.FC<FireSafetySectionProps> = ({
    className,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const leftCards: TCard[] =
        textContent.evacuationSection.content.leftBlock.map(
            (contentItem, idx) => {
                return {
                    id: String("index-" + idx + 1),
                    title: contentItem.title,
                    subtitle: contentItem.subTitle,
                    description: contentItem.description,
                    image: paths.cards.fourthSection.leftBlock[idx] || "",
                };
            },
        );

    const banCards: TCard[] =
        textContent.evacuationSection.content.bansBlock.map(
            (contentItem, idx) => {
                return {
                    id: String("index-" + idx + 1),
                    title: contentItem.title,
                    subtitle: contentItem.subTitle,
                    description: contentItem.description,
                    image: paths.cards.fourthSection.rightBlock[idx] || "",
                };
            },
        );

    return (
        <section className={className}>
            <h2 className="header-text centered-text">
                {textContent.evacuationSection.title}
            </h2>
            <div className="fire-safety-description caption-text centered-text">
                {textContent.evacuationSection.description}
            </div>

            <div className="fire-safety-fourth-section-content-wrapper">
                <div className="fire-safety-fourth-section-content-evacuation-steps">
                    {leftCards.map((card, idx) => (
                        <Card
                            key={card.id}
                            className="fire-safety-types-card"
                            style={{
                                borderRadius: "1.563rem",
                                maxWidth: "auto",
                            }}
                            imageStyle={{ width: "4rem" }}
                            description={card.description}
                            imagePath={card.image}
                            flexDirection={card && getFlexDirection(card)}
                        />
                    ))}
                </div>
                <div className="fire-safety-fourth-section-content-right-block">
                    <div className="fire-safety-fourth-section-content-bans-steps">
                        {banCards.map((card, idx) => (
                            <Card
                                key={card.id}
                                className="fire-safety-types-card"
                                style={{
                                    borderRadius: "1.563rem",
                                    border: "1px dashed white",
                                    backgroundColor: "transparent",
                                    paddingRight: "2rem",
                                    paddingLeft: "2rem",
                                }}
                                imageStyle={{ width: "4rem" }}
                                description={card.description}
                                imagePath={card.image}
                                flexDirection={"column-reverse"}
                            />
                        ))}
                    </div>
                    <DSNotification
                        content={textContent.evacuationSection.content.notificationBlock.map(
                            (value) => value.description,
                        )}
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
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
