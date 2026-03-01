import React from "react";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { type ReactElement } from "react";
import "./style.css";
import DSNotification from "@components/common/DSNotification";
import { SvgSpriteIds } from "@utils/constants";

const FifthSection: React.FC<BiologySectionProps> = ({className}: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <div className="left-content-section">
                <h1 className="title">{textContent.evolutionSection.title}</h1>
                <div className="description">
                    {textContent.evolutionSection.description}
                </div>

                <div className="card-section">
                    {textContent.evolutionSection.content.map((card, cardIndex) => (
                        <div className="card" key={cardIndex}>
                            {card.map((item, itemIndex) => {
                                switch (item.type) {
                                case "header":
                                case "text":
                                    return (
                                    <div
                                        key={itemIndex}
                                        className={item.type === "header" ? "card-title" : ""}
                                        style={{ marginTop: item.marginTop ? '1rem' : '0' }}
                                    >
                                        {item.content}
                                    </div>
                                    );

                                case "description":
                                    return (
                                    <div
                                        key={itemIndex}
                                        className="main-description"
                                        style={{ marginTop: item.marginTop ? '1rem' : '0' }}
                                    >
                                        {item.content}
                                    </div>
                                    );

                                case "list":
                                    const listItems: string[] = item.content as string[];
                                    
                                    return (
                                        <ul
                                            key={itemIndex}
                                            className="card-description-list"
                                            style={{ 
                                                marginTop: item.marginTop ? '1rem' : '0', 
                                                marginLeft: "1.875rem"
                                            }}
                                        >
                                            {listItems.map((listItem, listIndex) => (
                                                <li key={listIndex}>{listItem}</li>
                                            ))}
                                        </ul>
                                    );

                                default:
                                    return null;
                                }
                            })}
                        </div>
                    ))}
                </div>

                <DSNotification 
                    className="biology-fifth-section-notification"
                    content={textContent.evolutionSection.notificationLabel}
                    iconName={SvgSpriteIds.BIOLOGY_CELL} 
                    backgroundColor="#7A61A0"
                    textColor="#FFFFFF"
                    iconColor="#FFFFFF"
                    borderRadius="2.5rem"
                    padding = "0 0"
                    iconWidth="2.4375rem"
                    iconHeight="2.4375rem"
                    cardGap="24px"
                />
            </div>

            <div className="right-content-section">
                <img className="image" src={paths.images.evoSection} alt="image" />
            </div>
        </section>
    )
}

export default FifthSection;