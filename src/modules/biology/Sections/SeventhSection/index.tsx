import * as paths from "@modules/biology/locales/paths.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKaz from "@modules/biology/locales/kaz.json";
import type { BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import type { ReactElement } from "react";
import "./style.css";

interface IText {
    id: number;
    text: string;
}

interface ITextData {
    id: number;
    title?: string;
    description: string;
}

const SeventhSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKaz);

    const firstCardContent: ITextData[] = [
        {
            id: 1,
            description: textContent.virusesSection.content[3].description,
        },
        {
            id: 2,
            description: textContent.virusesSection.content[4].description,
        },
        {
            id: 3,
            description: textContent.virusesSection.content[5].description,
        },
        {
            id: 4,
            description: textContent.virusesSection.content[6].description,
        },
        {
            id: 5,
            description: textContent.virusesSection.content[7].description,
        },
    ];

    const secondCardContent: ITextData[] = [
        {
            id: 1,
            title: textContent.virusesSection.content[11].description,
            description: textContent.virusesSection.content[12].description,
        },
        {
            id: 2,
            title: textContent.virusesSection.content[13].description,
            description: textContent.virusesSection.content[14].description,
        },
        {
            id: 3,
            title: textContent.virusesSection.content[15].description,
            description: textContent.virusesSection.content[16].description,
        },

        {
            id: 4,
            title: textContent.virusesSection.content[17].description,
            description: textContent.virusesSection.content[18].description,
        },
        {
            id: 5,
            title: textContent.virusesSection.content[19].description,
            description: textContent.virusesSection.content[20].description,
        },
    ];

    const thirdCardContent: ITextData[] = [
        {
            id: 1,
            title: textContent.virusesSection.content[26].description,
            description: textContent.virusesSection.content[27].description,
        },
        {
            id: 2,
            title: textContent.virusesSection.content[28].description,
            description: textContent.virusesSection.content[29].description,
        },
        {
            id: 3,
            title: textContent.virusesSection.content[30].description,
            description: textContent.virusesSection.content[31].description,
        },

        {
            id: 4,
            title: textContent.virusesSection.content[32].description,
            description: textContent.virusesSection.content[33].description,
        },
    ];

    const fourthCardContent: IText[] = [
        {
            id: 1,
            text: textContent.virusesSection.content[39].description,
        },
        {
            id: 2,
            text: textContent.virusesSection.content[40].description,
        },
        {
            id: 3,
            text: textContent.virusesSection.content[41].description,
        },
        {
            id: 4,
            text: textContent.virusesSection.content[42].description,
        },
        {
            id: 5,
            text: textContent.virusesSection.content[43].description,
        },
        {
            id: 6,
            text: textContent.virusesSection.content[44].description,
        },
    ];

    const fifthCardContent: IText[] = [
        {
            id: 1,
            text: textContent.virusesSection.content[49].description,
        },
        {
            id: 2,
            text: textContent.virusesSection.content[50].description,
        },
        {
            id: 3,
            text: textContent.virusesSection.content[51].description,
        },
        {
            id: 4,
            text: textContent.virusesSection.content[52].description,
        },
        {
            id: 5,
            text: textContent.virusesSection.content[53].description,
        },
    ];

    const fifthCardContentTwo: IText[] = [
        {
            id: 1,
            text: textContent.virusesSection.content[55].description,
        },
        {
            id: 2,
            text: textContent.virusesSection.content[56].description,
        },
        {
            id: 3,
            text: textContent.virusesSection.content[57].description,
        },
        {
            id: 4,
            text: textContent.virusesSection.content[58].description,
        },
    ];

    const sixthCardContent: ITextData[] = [
        {
            id: 1,
            title: textContent.virusesSection.content[62].description,
            description: textContent.virusesSection.content[63].description,
        },
        {
            id: 2,
            title: textContent.virusesSection.content[64].description,
            description: textContent.virusesSection.content[65].description,
        },
        {
            id: 3,
            title: textContent.virusesSection.content[69].description,
            description: textContent.virusesSection.content[70].description,
        },
    ];

    return (
        <section className={className}>
            <div className="biology-seventh-section-header-block">
                <h2 className="header-biology-section-text">
                    {textContent.virusesSection.title}
                </h2>
                <span className="description-biology-medium-text">
                    {textContent.virusesSection.description}
                </span>
            </div>

            <div className="biology-seventh-section-background-images-container">
                <img
                    id="first-7th-image"
                    src={paths.backgrounds[12]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="second-7th-image"
                    src={paths.backgrounds[11]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="third-7th-image"
                    src={paths.backgrounds[10]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="fourth-7th-image"
                    src={paths.backgrounds[9]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="fifth-7th-image"
                    src={paths.backgrounds[8]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="sixth-7th-image"
                    src={paths.backgrounds[7]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="seventh-7th-image"
                    src={paths.backgrounds[6]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="eighth-7th-image"
                    src={paths.backgrounds[5]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="nineth-7th-image"
                    src={paths.backgrounds[4]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="tenth-7th-image"
                    src={paths.backgrounds[3]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="eleven-7th-image"
                    src={paths.backgrounds[2]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="twelve-7th-image"
                    src={paths.backgrounds[1]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
            </div>

            <div className="biology-seventh-section-cards-container">
                <div
                    id="first-7th-card"
                    className="biology-seventh-section-card"
                >
                    <h2 className="title-biology-medium-text">
                        {textContent.virusesSection.content[0].title}
                    </h2>

                    <div className="biology-seventh-section-card-content description-biology-medium-text">
                        <span>
                            {textContent.virusesSection.content[1].description}
                        </span>

                        <ul>
                            {textContent.virusesSection.content[2].description}
                            {firstCardContent.map((data: ITextData) => (
                                <li key={data.id}>{data.description}</li>
                            ))}
                        </ul>

                        <span>
                            {textContent.virusesSection.content[8].description}
                        </span>
                    </div>
                </div>

                <div
                    id="second-7th-card"
                    className="biology-seventh-section-card"
                >
                    <h2 className="title-biology-medium-text">
                        {textContent.virusesSection.content[9].title}
                    </h2>

                    <div className="biology-seventh-section-card-content description-biology-medium-text">
                        <span>
                            {textContent.virusesSection.content[10].description}
                        </span>

                        {secondCardContent.map((data: ITextData) => (
                            <div
                                key={data.id}
                                className="biology-seventh-section-card-info-wrapper"
                            >
                                <span>{data.title}</span>
                                <span>{data.description}</span>
                            </div>
                        ))}

                        <ul>
                            <li>
                                {
                                    textContent.virusesSection.content[21]
                                        .description
                                }
                            </li>
                            <li>
                                {
                                    textContent.virusesSection.content[22]
                                        .description
                                }
                            </li>
                        </ul>

                        <span>
                            {textContent.virusesSection.content[23].description}
                        </span>
                    </div>
                </div>

                <div
                    id="third-7th-card"
                    className="biology-seventh-section-card"
                >
                    <h2 className="title-biology-medium-text">
                        {textContent.virusesSection.content[24].title}
                    </h2>

                    <div className="biology-seventh-section-card-content description-biology-medium-text">
                        <span>
                            {textContent.virusesSection.content[25].description}
                        </span>

                        {thirdCardContent.map((data: ITextData) => (
                            <div
                                key={data.id}
                                className="biology-seventh-section-card-info-wrapper"
                            >
                                <span>{data.title}</span>
                                <span>{data.description}</span>
                            </div>
                        ))}

                        <ul>
                            <li>
                                {
                                    textContent.virusesSection.content[34]
                                        .description
                                }
                            </li>
                            <li>
                                {
                                    textContent.virusesSection.content[35]
                                        .description
                                }
                            </li>
                            <li>
                                {
                                    textContent.virusesSection.content[36]
                                        .description
                                }
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    id="fourth-7th-card"
                    className="biology-seventh-section-card"
                >
                    <h2 className="title-biology-medium-text">
                        {textContent.virusesSection.content[37].title}
                    </h2>

                    <div className="biology-seventh-section-card-content description-biology-medium-text">
                        <span>
                            {textContent.virusesSection.content[38].description}
                        </span>

                        <ul>
                            {fourthCardContent.map((data: IText) => (
                                <li key={data.id}>{data.text}</li>
                            ))}
                        </ul>

                        <span>
                            {textContent.virusesSection.content[45].description}
                        </span>
                    </div>
                </div>

                <div
                    id="fifth-7th-card"
                    className="biology-seventh-section-card"
                >
                    <h2 className="title-biology-medium-text">
                        {textContent.virusesSection.content[46].title}
                    </h2>

                    <div className="biology-seventh-section-card-content description-biology-medium-text">
                        <span>
                            {textContent.virusesSection.content[47].description}
                        </span>
                        <ul>
                            {textContent.virusesSection.content[48].description}
                            {fifthCardContent.map((data: IText) => (
                                <li key={data.id}>{data.text}</li>
                            ))}
                        </ul>
                        <ul>
                            {textContent.virusesSection.content[54].description}
                            {fifthCardContentTwo.map((data: IText) => (
                                <li key={data.id}>{data.text}</li>
                            ))}
                        </ul>

                        <span>
                            {textContent.virusesSection.content[59].description}
                        </span>
                    </div>
                </div>

                <div
                    id="sixth-7th-card"
                    className="biology-seventh-section-card"
                >
                    <h2 className="title-biology-medium-text">
                        {textContent.virusesSection.content[60].title}
                    </h2>

                    <div className="biology-seventh-section-card-content description-biology-medium-text">
                        <span>
                            {textContent.virusesSection.content[61].description}
                        </span>

                        {sixthCardContent.map((data: ITextData) => (
                            <div
                                key={data.id}
                                className="biology-seventh-section-card-info-wrapper"
                            >
                                <span>{data.title}</span>
                                <span>{data.description}</span>

                                {data.id === 2 && (
                                    <ul>
                                        {
                                            textContent.virusesSection
                                                .content[66].description
                                        }
                                        <li>
                                            {
                                                textContent.virusesSection
                                                    .content[67].description
                                            }
                                        </li>
                                        <li>
                                            {
                                                textContent.virusesSection
                                                    .content[68].description
                                            }
                                        </li>
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeventhSection;
