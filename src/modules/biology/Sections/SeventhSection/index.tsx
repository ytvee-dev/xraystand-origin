import SquareCard, {
    type ICardData,
    type ICardLabel,
} from "@components/common/Cards/SquareCard";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKaz from "@modules/biology/locales/kaz.json";
import type { BiologySectionProps } from "@modules/biology/types";
import type { CSSProperties, ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import {
    groupByTitle,
    type IContentGroup,
    type IContentItem,
} from "@modules/biology/functions";
import "./style.css";

const SeventhSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKaz);

    const groups: IContentGroup[] = groupByTitle(
        textContent.virusesSection.content,
    );

    const imagesData = paths.backgrounds.seventhSection.map(
        (imagePath, imageIndex) => {
            return {
                id: "seventh-section-image-" + `${imageIndex + 1}`,
                src: imagePath,
                alt: "biology-image",
            };
        },
    );

    const cardsData: ICardData[] = groups.map((textData, index) => {
        const cardLabels: ICardLabel[] = textData.items.map(
            (data: IContentItem) => {
                return {
                    description: data.description,
                    listParts: data.listParts || [],
                };
            },
        );

        return {
            id: `seventh-section-card-${index}`,
            title: textData.title,
            labels: cardLabels,
            imagePath: paths.images.fifthSection[index],
        };
    });

    const labelWrapperStyle: CSSProperties = {
        border: "0.0625rem solid #ffffff",
        borderRadius: "2.8125rem",
        width: "100%",
        height: "100%",
        padding: "0.75rem 1.5rem",
        gap: "0.625rem",
    };

    return (
        <section className={className}>
            <div className="biology-seventh-section-header-block">
                <h2 className="header-seventh-section header-biology-section-text">
                    {textContent.virusesSection.title}
                </h2>
                <span className="description-biology-medium-text">
                    {textContent.virusesSection.description}
                </span>
            </div>

            <div className="biology-seventh-section-background-images-container">
                {imagesData.map((imageData) => (
                    <img
                        key={imageData.id}
                        id={imageData.id}
                        className="biology-seventh-section-picture"
                        src={imageData.src}
                        alt={imageData.alt}
                    />
                ))}
            </div>

            <div className="biology-seventh-section-content">
                <div className="biology-seventh-section-cards-container">
                    {cardsData.map((cardData) => (
                        <SquareCard
                            key={cardData.id}
                            id={cardData.id}
                            className="biology-seventh-section-card"
                            title={cardData.title}
                            labels={cardData.labels}
                            titleClassName="biology-seventh-section-card-header title-biology-medium-text"
                            labelClassName="description-biology-medium-text"
                            labelWrapperStyle={labelWrapperStyle}
                            cardContentStyle={{gap: '24px'}}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeventhSection;
