import SquareCard from "@components/common/Cards/SquareCard";
import * as paths from "@modules/biology/locales/paths.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKaz from "@modules/biology/locales/kaz.json";
import type { BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import type { ReactElement } from "react";
import "./style.css";

const FifthSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKaz);

    const firstCardText: string =
        `${textContent.naturalSelectionSection.content[0].description} /` +
        `${textContent.naturalSelectionSection.content[1].description} /` +
        textContent.naturalSelectionSection.content[2].description;

    const secondCardText: string =
        `${textContent.naturalSelectionSection.content[3].description} /` +
        `${textContent.naturalSelectionSection.content[4].description} •` +
        `${textContent.naturalSelectionSection.content[5].description} •` +
        `${textContent.naturalSelectionSection.content[6].description} •` +
        `${textContent.naturalSelectionSection.content[7].description} /` +
        textContent.naturalSelectionSection.content[8].description;

    const thirdCardText: string =
        `${textContent.naturalSelectionSection.content[9].description} /` +
        `${textContent.naturalSelectionSection.content[10].description} •` +
        `${textContent.naturalSelectionSection.content[11].description} •` +
        `${textContent.naturalSelectionSection.content[12].description} •` +
        `${textContent.naturalSelectionSection.content[13].description} /` +
        textContent.naturalSelectionSection.content[14].description;

    return (
        <section className={className}>
            <h1 className="biology-fifth-section-header header-biology-section-text">
                {textContent.naturalSelectionSection.title}
            </h1>

            <div className="biology-fifth-section-content">
                <div className="biology-fifth-section-cards-container">
                    <SquareCard
                        className="biology-fifth-section-card"
                        title={
                            textContent.naturalSelectionSection.content[0].title
                        }
                        label={firstCardText}
                        paragraphSeparator="/"
                        titleClassName="title-bilogy-text"
                        labelClassName="description-biology-small-text"
                        imagePath={paths.images.fifthSection[1]}
                        imageStyle={{ width: "8.75rem", marginTop: "2rem" }}
                        labelWrapperStyle={{ gap: "0.8rem" }}
                    />

                    <SquareCard
                        className="biology-fifth-section-card"
                        title={
                            textContent.naturalSelectionSection.content[3].title
                        }
                        label={secondCardText}
                        paragraphSeparator="/"
                        titleClassName="title-bilogy-text"
                        labelClassName="description-biology-small-text"
                        imagePath={paths.images.fifthSection[0]}
                        imageStyle={{ width: "8rem", marginTop: "2rem" }}
                        labelWrapperStyle={{ gap: "0.5rem" }}
                    />

                    <SquareCard
                        className="biology-fifth-section-card"
                        title={
                            textContent.naturalSelectionSection.content[9].title
                        }
                        label={thirdCardText}
                        paragraphSeparator="/"
                        titleClassName="title-bilogy-text"
                        labelClassName="description-biology-small-text"
                        imagePath={paths.images.fifthSection[2]}
                        imageStyle={{ width: "6.5rem" }}
                        labelWrapperStyle={{ gap: "0.5rem" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
