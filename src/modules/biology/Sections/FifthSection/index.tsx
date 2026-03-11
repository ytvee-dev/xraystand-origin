import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import CardContentRenderer from "@modules/biology/components/CardContentRender";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { SvgSpriteIds } from "@utils/constants";
import { type ReactElement } from "react";
import "./style.css";

const EighthSection: React.FC<BiologySectionProps> = ({
    className,
}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <div className="left-content-section">
                <h1 className="title">{textContent.evolutionSection.title}</h1>
                <div className="description">
                    {textContent.evolutionSection.description}
                </div>

                <div className="card-section">
                    {textContent.evolutionSection.content.map(
                        (card, cardIndex) => (
                            <div className="card" key={cardIndex}>
                                <CardContentRenderer
                                    items={card.map((item) => ({
                                        type: item.type,
                                        description: item.content,
                                        marginTop: item.marginTop,
                                        marginBottom: false,
                                    }))}
                                    classNames={{
                                        header: "card-title",
                                        description: "main-description",
                                        list: "card-description-list",
                                    }}
                                />
                            </div>
                        ),
                    )}
                </div>

                <DSNotification
                    className="biology-eighth-section-notification"
                    content={textContent.evolutionSection.notificationLabel}
                    iconName={SvgSpriteIds.BIOLOGY_CELL}
                    backgroundColor="#7A61A0"
                    textColor="#FFFFFF"
                    iconColor="#FFFFFF"
                    borderRadius="2.5rem"
                    padding="0 0"
                    iconWidth="2.4375rem"
                    iconHeight="2.4375rem"
                    cardGap="24px"
                />
            </div>

            <div className="right-content-section">
                <img
                    className="image"
                    src={paths.images.evoSection}
                    alt="image"
                />
            </div>
        </section>
    );
};

export default EighthSection;
