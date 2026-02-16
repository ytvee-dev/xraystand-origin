import * as paths from "@modules/biology/locales/paths.json";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKz from "@modules/biology/locales/rus.json";
import type { BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import type { ReactElement } from "react";
import "./style.css";

const FifthSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <h1 className="biology-fifth-section-header">
                {textContent.naturalSelectionSection.title}
            </h1>

            <div className="biology-fifth-section-content">
                <div className="biology-fifth-section-first-images-container">
                    <div className="pair-of-images">
                        <img
                            id="first-image"
                            className="biology-fifth-section-image"
                            src={paths.images[0]}
                            alt="biology-image"
                        />
                        <img
                            id="second-image"
                            src={paths.images[3]}
                            className="biology-fifth-section-image"
                            alt="biology-image"
                        />
                    </div>

                    <div className="pair-of-images">
                        <img
                            id="third-image"
                            src={paths.images[0]}
                            className="biology-fifth-section-image"
                            alt="biology-image"
                        />
                        <img
                            id="fourth-image"
                            src={paths.images[2]}
                            className="biology-fifth-section-image"
                            alt="biology-image"
                        />
                    </div>

                    <div className="pair-of-images">
                        <img
                            id="fifth-image"
                            src={paths.images[0]}
                            className="biology-fifth-section-image"
                            alt="biology-image"
                        />
                        <img
                            id="sixth-image"
                            src={paths.images[1]}
                            className="biology-fifth-section-image"
                            alt="biology-image"
                        />
                    </div>
                </div>

                <div className="biology-fifth-section-cards-container">
                    <div
                        className="biology-fifth-section-card"
                        style={{ height: "389px" }}
                    >
                        <h2 className="biology-fifth-section-card-header">
                            {
                                textContent.naturalSelectionSection.content[0]
                                    .title
                            }
                        </h2>

                        <div className="biology-fifth-section-card-content-container">
                            <p>
                                {
                                    textContent.naturalSelectionSection
                                        .content[0].description
                                }
                            </p>

                            <p>
                                {
                                    textContent.naturalSelectionSection
                                        .content[1].description
                                }
                            </p>

                            <p>
                                {
                                    textContent.naturalSelectionSection
                                        .content[2].description
                                }
                            </p>
                        </div>
                    </div>

                    <div className="biology-fifth-section-card">
                        <h2 className="biology-fifth-section-card-header">
                            {
                                textContent.naturalSelectionSection.content[3]
                                    .title
                            }
                        </h2>
                        <div className="biology-fifth-section-card-content-container">
                            <p>
                                {
                                    textContent.naturalSelectionSection
                                        .content[3].description
                                }
                            </p>

                            <p>
                                {
                                    textContent.naturalSelectionSection
                                        .content[4].description
                                }
                                <ul className="biology-fifth-section-card-marked-list">
                                    <li>
                                        {
                                            textContent.naturalSelectionSection
                                                .content[5].description
                                        }
                                    </li>
                                    <li>
                                        {
                                            textContent.naturalSelectionSection
                                                .content[6].description
                                        }
                                    </li>
                                    <li>
                                        {
                                            textContent.naturalSelectionSection
                                                .content[7].description
                                        }
                                    </li>
                                </ul>
                            </p>

                            <p>
                                {
                                    textContent.naturalSelectionSection
                                        .content[8].description
                                }
                            </p>
                        </div>
                    </div>

                    <div className="biology-fifth-section-card">
                        <h2 className="biology-fifth-section-card-header">
                            {
                                textContent.naturalSelectionSection.content[9]
                                    .title
                            }
                        </h2>
                        <div className="biology-fifth-section-card-content-container">
                            <p>
                                {
                                    textContent.naturalSelectionSection
                                        .content[9].description
                                }
                            </p>

                            <p>
                                {
                                    textContent.naturalSelectionSection
                                        .content[10].description
                                }
                                <ul className="biology-fifth-section-card-marked-list">
                                    <li
                                        style={{
                                            height: "41px",
                                        }}
                                    >
                                        {
                                            textContent.naturalSelectionSection
                                                .content[11].description
                                        }
                                    </li>
                                    <li>
                                        {
                                            textContent.naturalSelectionSection
                                                .content[12].description
                                        }
                                    </li>
                                    <li style={{ whiteSpace: "nowrap" }}>
                                        {
                                            textContent.naturalSelectionSection
                                                .content[13].description
                                        }
                                    </li>
                                </ul>
                            </p>

                            <p style={{ marginBottom: "0.5rem" }}>
                                {
                                    textContent.naturalSelectionSection
                                        .content[14].description
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="biology-fifth-section-second-images-container">
                    <img
                        id="seventh-image"
                        className="biology-fifth-section-image"
                        src={paths.images[4]}
                        alt="biology-image"
                    />
                    <img
                        id="eighth-image"
                        src={paths.images[13]}
                        className="biology-fifth-section-image"
                        alt="biology-image"
                    />

                    <img
                        id="nineth-image"
                        src={paths.images[7]}
                        className="biology-fifth-section-image"
                        alt="biology-image"
                    />
                    <img
                        id="tenth-image"
                        src={paths.images[13]}
                        className="biology-fifth-section-image"
                        alt="biology-image"
                    />

                    <img
                        id="eleventh-image"
                        src={paths.images[5]}
                        className="biology-fifth-section-image"
                        alt="biology-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
