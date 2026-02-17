import * as paths from "@modules/biology/locales/paths.json";
import DSNotification from "@components/common/DSNotification";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKaz from "@modules/biology/locales/kaz.json";
import type { BiologySectionProps } from "@modules/biology/types";
import { useLocaleContent } from "@hooks/useLocale";
import { SvgSpriteIds } from "@utils/constants";
import type { ReactElement } from "react";
import "./style.css";

const SixthSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKaz);

    return (
        <section className={className}>
            <div className="header-sixth-section-wrapper">
                <h2 className="header-sixth-section header-biology-section-text">
                    {textContent.prokaryotesToHumansSection.title}
                </h2>

                <span
                    className="description-biology-medium-text"
                    style={{ textAlign: "center" }}
                >
                    {textContent.prokaryotesToHumansSection.description}
                </span>
            </div>

            <div className="sixth-section-cards-container">
                <div id="first-card" className="sixth-section-card">
                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[0].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[0].description
                            }
                        </span>
                    </div>

                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[9]}
                            alt="biology-image"
                        />
                    </div>
                </div>

                <div id="second-card" className="sixth-section-card">
                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[8]}
                            alt="biology-image"
                        />
                    </div>

                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[1].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[1].description
                            }
                        </span>
                    </div>
                </div>

                <div id="third-card" className="sixth-section-card">
                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[2].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[2].description
                            }
                        </span>
                    </div>

                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[7]}
                            alt="biology-image"
                        />
                    </div>
                </div>

                <div id="fourth-card" className="sixth-section-card">
                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[6]}
                            alt="biology-image"
                        />
                    </div>

                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[3].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[3].description
                            }
                        </span>
                    </div>
                </div>

                <div id="fifth-card" className="sixth-section-card">
                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[4].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[4].description
                            }
                        </span>
                    </div>

                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[5]}
                            alt="biology-image"
                        />
                    </div>
                </div>

                <div id="sixth-card" className="sixth-section-card">
                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[4]}
                            alt="biology-image"
                        />
                    </div>

                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[5].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[5].description
                            }
                        </span>
                    </div>
                </div>

                <div id="seventh-card" className="sixth-section-card">
                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[6].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[6].description
                            }
                        </span>
                    </div>

                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[3]}
                            alt="biology-image"
                        />
                    </div>
                </div>

                <div id="eighth-card" className="sixth-section-card">
                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[2]}
                            alt="biology-image"
                        />
                    </div>

                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[7].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[7].description
                            }
                        </span>
                    </div>
                </div>

                <div id="nineth-card" className="sixth-section-card">
                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[8].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[8].description
                            }
                        </span>
                    </div>

                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[1]}
                            alt="biology-image"
                        />
                    </div>
                </div>

                <div id="tenth-card" className="sixth-section-card">
                    <div className="sixth-section-card-picture-wrapper">
                        <img
                            className="sixth-section-card-picture"
                            src={paths.cards[0]}
                            alt="biology-image"
                        />
                    </div>

                    <div className="sixth-section-card-info-block">
                        <h2 className="title-bilogy-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[9].title
                            }
                        </h2>
                        <span className="description-biology-small-text">
                            {
                                textContent.prokaryotesToHumansSection
                                    .content[9].description
                            }
                        </span>
                    </div>
                </div>
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
                borderRadius="45px"
                iconWidth="39px"
                iconHeight="39px"
                cardGap="1.25rem"
            />
        </section>
    );
};

export default SixthSection;
