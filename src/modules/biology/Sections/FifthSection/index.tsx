import SquareCard, {
    type ICardData,
    type ICardLabel,
} from "@components/common/Cards/SquareCard";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKaz from "@modules/biology/locales/kaz.json";
import { groupByTitle, type IContentItem } from "@modules/biology/functions";
import type { BiologySectionProps } from "@modules/biology/types";
import type { CSSProperties, ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import "./style.css";

const FifthSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKaz);

    const cardsStyles: CSSProperties[] = [
        { width: "8.75rem", marginTop: "2rem" },
        { width: "8rem", marginTop: "2rem" },
        { width: "6.5rem" },
    ];

    const groups = groupByTitle(textContent.naturalSelectionSection.content);

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
            id: `fifth-section-card-${index}`,
            title: textData.title,
            labels: cardLabels,
            imagePath: paths.images.fifthSection[index],
            imageStyle: cardsStyles[index],
        };
    });

    return (
        <section className={className}>
            <h1 className="biology-fifth-section-header header-biology-section-text">
                {textContent.naturalSelectionSection.title}
            </h1>

            <div className="biology-fifth-section-content">
                <div className="biology-fifth-section-cards-container">
                    {cardsData.map((cardData: ICardData) => (
                        <SquareCard
                            key={cardData.id}
                            id={cardData.id}
                            className="biology-fifth-section-card"
                            title={cardData.title}
                            labels={cardData.labels}
                            titleClassName="title-bilogy-text"
                            labelClassName="description-biology-small-text"
                            imagePath={cardData.imagePath}
                            imageStyle={cardData.imageStyle}
                            labelWrapperStyle={{ gap: "0.8rem" }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
