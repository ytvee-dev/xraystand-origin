import Card from "@modules/fireSafety/components/Card";
import * as paths from "@modules/biology/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKaz from "@modules/biology/locales/kaz.json";
import type { BiologySectionProps } from "@modules/biology/types";
import type { TCard } from "@modules/math/Sections/SecondSection";
import { useLocaleContent } from "@hooks/useLocale";
import type { CSSProperties } from "@mui/material";
import { SvgSpriteIds } from "@utils/constants";
import type { ReactElement } from "react";
import "./style.css";

const SixthSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKaz);

    const imageStyles: CSSProperties = {
        width: "auto",
        height: "8.75rem",
        objectFit: "contain",
    };

    const cardData: TCard[] =
        textContent.prokaryotesToHumansSection.content.map((data, index) => {
            return {
                id: "index-" + index + 1,
                title: data.title,
                subtitle: data.subTitle,
                description: data.description,
                image: paths.cards.sixthSection[index],
            };
        });

    return (
        <section className={className}>
            <div className="header-sixth-section-wrapper">
                <h2 className="header-sixth-section header-biology-section-text">
                    {textContent.prokaryotesToHumansSection.title}
                </h2>

                <span className="description-biology-medium-text">
                    {textContent.prokaryotesToHumansSection.description}
                </span>
            </div>

            <div className="sixth-section-cards-container">
                {cardData.map((data: TCard) => (
                    <Card
                        key={data.id}
                        className="sixth-section-card"
                        title={data.title}
                        description={data.description}
                        flexDirection="row-reverse"
                        imagePath={data.image}
                        imageStyle={imageStyles}
                    />
                ))}
            </div>

            <DSNotification
                content={
                    textContent.prokaryotesToHumansSection.notificationLabel
                }
                className="sixth-section-notification-block"
                borderColor=""
                textColor="#FFFFFF"
                iconName={SvgSpriteIds.BIOLOGY_CELL}
                iconColor="#FFFFFF"
                backgroundColor="#72A2C2"
                borderRadius="2.8125rem"
                iconWidth="2.4375rem"
                iconHeight="2.4375rem"
                cardGap="1.25rem"
            />
        </section>
    );
};

export default SixthSection;
