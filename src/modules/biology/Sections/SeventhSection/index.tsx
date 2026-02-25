import * as paths from "@modules/biology/locales/paths.json";
import SquareCard from "@components/common/Cards/SquareCard";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKaz from "@modules/biology/locales/kaz.json";
import type { BiologySectionProps } from "@modules/biology/types";
import type { CSSProperties, ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import "./style.css";

const SeventhSection = ({ className }: BiologySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKaz);

    const firstCardLabel =
        `${textContent.virusesSection.content[1].description} /` +
        `${textContent.virusesSection.content[2].description} •` +
        `${textContent.virusesSection.content[3].description} •` +
        `${textContent.virusesSection.content[4].description} •` +
        `${textContent.virusesSection.content[5].description} •` +
        `${textContent.virusesSection.content[6].description} •` +
        `${textContent.virusesSection.content[7].description} /` +
        textContent.virusesSection.content[8].description;

    const secondCardLabel =
        `${textContent.virusesSection.content[10].description} /` +
        `${textContent.virusesSection.content[11].description} /` +
        `${textContent.virusesSection.content[12].description} /` +
        `${textContent.virusesSection.content[13].description} /` +
        `${textContent.virusesSection.content[14].description} /` +
        `${textContent.virusesSection.content[15].description} /` +
        `${textContent.virusesSection.content[16].description} /` +
        `${textContent.virusesSection.content[17].description} /` +
        `${textContent.virusesSection.content[18].description} /` +
        `${textContent.virusesSection.content[19].description} /` +
        `${textContent.virusesSection.content[20].description} •` +
        `${textContent.virusesSection.content[21].description} •` +
        `${textContent.virusesSection.content[22].description} /` +
        textContent.virusesSection.content[23].description;

    const thirdCardLabel =
        `${textContent.virusesSection.content[25].description} /` +
        `${textContent.virusesSection.content[26].description} /` +
        `${textContent.virusesSection.content[27].description} /` +
        `${textContent.virusesSection.content[28].description} /` +
        `${textContent.virusesSection.content[29].description} /` +
        `${textContent.virusesSection.content[30].description} /` +
        `${textContent.virusesSection.content[31].description} /` +
        `${textContent.virusesSection.content[32].description} /` +
        `${textContent.virusesSection.content[33].description} •` +
        `${textContent.virusesSection.content[34].description} •` +
        `${textContent.virusesSection.content[35].description} •` +
        textContent.virusesSection.content[36].description;

    const fourthCardLabel =
        `${textContent.virusesSection.content[38].description} •` +
        `${textContent.virusesSection.content[39].description} •` +
        `${textContent.virusesSection.content[40].description} •` +
        `${textContent.virusesSection.content[41].description} •` +
        `${textContent.virusesSection.content[42].description} •` +
        `${textContent.virusesSection.content[43].description} •` +
        `${textContent.virusesSection.content[44].description} /` +
        textContent.virusesSection.content[45].description;

    const fifthCardLabel =
        `${textContent.virusesSection.content[47].description} /` +
        `${textContent.virusesSection.content[48].description} •` +
        `${textContent.virusesSection.content[49].description} •` +
        `${textContent.virusesSection.content[50].description} •` +
        `${textContent.virusesSection.content[51].description} •` +
        `${textContent.virusesSection.content[52].description} •` +
        `${textContent.virusesSection.content[53].description} /` +
        `${textContent.virusesSection.content[54].description} •` +
        `${textContent.virusesSection.content[55].description} •` +
        `${textContent.virusesSection.content[56].description} •` +
        `${textContent.virusesSection.content[57].description} •` +
        `${textContent.virusesSection.content[58].description} /` +
        textContent.virusesSection.content[59].description;

    const sixthCardLabel =
        `${textContent.virusesSection.content[61].description} /` +
        `${textContent.virusesSection.content[62].description} /` +
        `${textContent.virusesSection.content[63].description} /` +
        `${textContent.virusesSection.content[64].description} /` +
        `${textContent.virusesSection.content[65].description} /` +
        `${textContent.virusesSection.content[66].description} •` +
        `${textContent.virusesSection.content[67].description} •` +
        `${textContent.virusesSection.content[68].description} /` +
        `${textContent.virusesSection.content[69].description} /` +
        textContent.virusesSection.content[70].description;

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
                    src={paths.backgrounds.seventhSection[11]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="second-7th-image"
                    src={paths.backgrounds.seventhSection[10]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="third-7th-image"
                    src={paths.backgrounds.seventhSection[9]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="fourth-7th-image"
                    src={paths.backgrounds.seventhSection[8]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="fifth-7th-image"
                    src={paths.backgrounds.seventhSection[7]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="sixth-7th-image"
                    src={paths.backgrounds.seventhSection[6]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="seventh-7th-image"
                    src={paths.backgrounds.seventhSection[5]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="eighth-7th-image"
                    src={paths.backgrounds.seventhSection[4]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="nineth-7th-image"
                    src={paths.backgrounds.seventhSection[3]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="tenth-7th-image"
                    src={paths.backgrounds.seventhSection[2]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="eleven-7th-image"
                    src={paths.backgrounds.seventhSection[1]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
                <img
                    id="twelve-7th-image"
                    src={paths.backgrounds.seventhSection[0]}
                    className="biology-seventh-section-picture"
                    alt="biology-image"
                />
            </div>

            <div className="biology-seventh-section-cards-container">
                <SquareCard
                    id="first-7th-card"
                    className="biology-seventh-section-card"
                    title={textContent.virusesSection.content[0].title}
                    titleClassName="biology-seventh-section-card-header title-biology-medium-text"
                    label={firstCardLabel}
                    labelClassName="biology-seventh-section-card-label description-biology-medium-text"
                    paragraphSeparator="/"
                    labelWrapperStyle={labelWrapperStyle}
                />

                <SquareCard
                    id="second-7th-card"
                    className="biology-seventh-section-card"
                    title={textContent.virusesSection.content[9].title}
                    titleClassName="biology-seventh-section-card-header title-biology-medium-text"
                    label={secondCardLabel}
                    labelClassName="description-biology-medium-text"
                    paragraphSeparator="/"
                    labelWrapperStyle={labelWrapperStyle}
                />

                <SquareCard
                    id="third-7th-card"
                    className="biology-seventh-section-card"
                    title={textContent.virusesSection.content[24].title}
                    titleClassName="biology-seventh-section-card-header title-biology-medium-text"
                    label={thirdCardLabel}
                    labelClassName="description-biology-medium-text"
                    paragraphSeparator="/"
                    labelWrapperStyle={labelWrapperStyle}
                />

                <SquareCard
                    id="fourth-7th-card"
                    className="biology-seventh-section-card"
                    title={textContent.virusesSection.content[37].title}
                    titleClassName="biology-seventh-section-card-header title-biology-medium-text"
                    label={fourthCardLabel}
                    labelClassName="description-biology-medium-text"
                    paragraphSeparator="/"
                    labelWrapperStyle={labelWrapperStyle}
                />

                <SquareCard
                    id="fifth-7th-card"
                    className="biology-seventh-section-card"
                    title={textContent.virusesSection.content[46].title}
                    titleClassName="biology-seventh-section-card-header title-biology-medium-text"
                    label={fifthCardLabel}
                    labelClassName="description-biology-medium-text"
                    paragraphSeparator="/"
                    labelWrapperStyle={labelWrapperStyle}
                />

                <SquareCard
                    id="sixth-7th-card"
                    className="biology-seventh-section-card"
                    title={textContent.virusesSection.content[60].title}
                    titleClassName="biology-seventh-section-card-header title-biology-medium-text"
                    label={sixthCardLabel}
                    labelClassName="description-biology-medium-text"
                    paragraphSeparator="/"
                    labelWrapperStyle={labelWrapperStyle}
                />
            </div>
        </section>
    );
};

export default SeventhSection;
