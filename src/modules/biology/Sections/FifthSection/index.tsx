import * as paths from "@modules/biology/locales/paths.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKaz from "@modules/biology/locales/kaz.json";
import type { BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import type { ReactElement } from "react";
import "./style.css";

interface ITextData {
    id: number;
    text: string;
    options?: string[];
}

const FifthSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKaz);

    const firstCardContent: ITextData[] = [
        {
            id: 1,
            text: textContent.naturalSelectionSection.content[0].description,
        },
        {
            id: 2,
            text: textContent.naturalSelectionSection.content[1].description,
        },
        {
            id: 3,
            text: textContent.naturalSelectionSection.content[2].description,
        },
    ];

    const secondCardContent: ITextData[] = [
        {
            id: 1,
            text: textContent.naturalSelectionSection.content[3].description,
        },
        {
            id: 2,
            text: textContent.naturalSelectionSection.content[4].description,
            options: [
                textContent.naturalSelectionSection.content[5].description,
                textContent.naturalSelectionSection.content[6].description,
                textContent.naturalSelectionSection.content[7].description,
            ],
        },
        {
            id: 3,
            text: textContent.naturalSelectionSection.content[8].description,
        },
    ];

    const thirdCardContent: ITextData[] = [
        {
            id: 1,
            text: textContent.naturalSelectionSection.content[9].description,
        },
        {
            id: 2,
            text: textContent.naturalSelectionSection.content[10].description,
            options: [
                textContent.naturalSelectionSection.content[11].description,
                textContent.naturalSelectionSection.content[12].description,
                textContent.naturalSelectionSection.content[13].description,
            ],
        },
        {
            id: 3,
            text: textContent.naturalSelectionSection.content[14].description,
        },
    ];

    return (
        <section className={className}>
            <h1 className="biology-fifth-section-header header-biology-section-text">
                {textContent.naturalSelectionSection.title}
            </h1>

            <div className="biology-fifth-section-content">
                <div className="biology-fifth-section-cards-container">
                    <div
                        id="first-5th-card"
                        className="biology-fifth-section-card"
                    >
                        <div className="biology-fifth-section-card-image-container">
                            <img
                                id="first-image"
                                className="biology-fifth-section-image"
                                src={paths.images.fifthSection[6]}
                                alt="biology-image"
                            />
                        </div>

                        <div className="biology-fifth-section-card-content-container">
                            <h2 className="biology-fifth-section-card-header title-bilogy-text">
                                {
                                    textContent.naturalSelectionSection
                                        .content[0].title
                                }
                            </h2>

                            <div className="biology-fifth-section-card-info-content-wrapper">
                                {firstCardContent.map((data: ITextData) => (
                                    <p
                                        className="description-biology-small-text"
                                        key={data.id}
                                    >
                                        {data.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        id="second-5th-card"
                        className="biology-fifth-section-card"
                    >
                        <div className="biology-fifth-section-card-image-container">
                            {/* <img
                                id="second-image"
                                className="biology-fifth-section-image"
                                src={}
                                alt="biology-image"
                            /> */}
                        </div>

                        <div className="biology-fifth-section-card-content-container">
                            <h2 className="biology-fifth-section-card-header title-bilogy-text">
                                {
                                    textContent.naturalSelectionSection
                                        .content[3].title
                                }
                            </h2>

                            <div className="biology-fifth-section-card-info-content-wrapper">
                                {secondCardContent.map((data: ITextData) => (
                                    <div
                                        key={data.id}
                                        className="description-biology-small-text"
                                    >
                                        <p>{data.text}</p>

                                        {data.options && (
                                            <ul>
                                                {data.options.map(
                                                    (text: string) => (
                                                        <li key={data.id}>
                                                            {text}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        id="third-5th-card"
                        className="biology-fifth-section-card"
                    >
                        <div className="biology-fifth-section-card-image-container">
                            <div className="biology-fifth-section-image-wrapper">
                                <img
                                    id="eighth-image"
                                    className="biology-fifth-section-image"
                                    src={paths.images.fifthSection[4]}
                                    alt="biology-image"
                                />
                                <div className="biology-fifth-section-image-description">
                                    ЧЕЛОВЕК
                                </div>
                            </div>

                            <div className="biology-fifth-section-image-wrapper">
                                <img
                                    id="nineth-image"
                                    src={paths.images.fifthSection[8]}
                                    className="biology-fifth-section-image"
                                    alt="biology-image"
                                />
                                <div className="biology-fifth-section-image-description">
                                    КОШКА
                                </div>
                            </div>
                            <div className="biology-fifth-section-image-wrapper">
                                <img
                                    id="tenth-image"
                                    src={paths.images.fifthSection[9]}
                                    className="biology-fifth-section-image"
                                    alt="biology-image"
                                />
                                <div className="biology-fifth-section-image-description">
                                    ЛЕТУЧАЯ МЫШЬ
                                </div>
                            </div>
                            <div className="biology-fifth-section-image-wrapper">
                                <img
                                    id="eleventh-image"
                                    src={paths.images.fifthSection[7]}
                                    className="biology-fifth-section-image"
                                    alt="biology-image"
                                />
                                <div className="biology-fifth-section-image-description">
                                    ДЕЛЬФИН
                                </div>
                            </div>
                            <div className="biology-fifth-section-image-wrapper">
                                <img
                                    id="twelve-image"
                                    src={paths.images.fifthSection[5]}
                                    className="biology-fifth-section-image"
                                    alt="biology-image"
                                />
                                <div className="biology-fifth-section-image-description twelve">
                                    ЛОШАДЬ
                                </div>
                            </div>
                        </div>

                        <div className="biology-fifth-section-card-content-container">
                            <h2 className="biology-fifth-section-card-header title-bilogy-text">
                                {
                                    textContent.naturalSelectionSection
                                        .content[9].title
                                }
                            </h2>

                            <div className="biology-fifth-section-card-info-content-wrapper">
                                {thirdCardContent.map((data: ITextData) => (
                                    <div
                                        key={data.id}
                                        className="description-biology-small-text"
                                    >
                                        <p>{data.text}</p>

                                        {data.options && (
                                            <ul>
                                                {data.options.map(
                                                    (text: string) => (
                                                        <li key={data.id}>
                                                            {text}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
