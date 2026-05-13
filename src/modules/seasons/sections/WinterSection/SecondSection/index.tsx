import { type ReactElement } from "react";
import * as paths from "@modules/seasons/locales/paths.json";
import Card from "@modules/seasons/components/Card";
import "./style.css";

interface CardContent {
    subTitle?: string;
    title?: string;
    description?: string;
}

interface SecondSectionProps {
    title?: string;
    description?: string;
    cards: CardContent[];
}

const snowflakes = [
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-1 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-2 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-3 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-4 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-5 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-6 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-7 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-8 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-9 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-11 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-12 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-13 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-14 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-15 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-16 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-17 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-18 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-second-snowflake-19 seasons-winter-bg-image",
    },
];

const SecondSection = ({
    title,
    cards,
}: SecondSectionProps): ReactElement => {
    return (
        <div className="seasons-winter-section-container">

            <img className="seasons-winter-texture-bg" src={paths.texturedBg} alt="" />
            <img className="seasons-winter-romanBranch seasons-winter-bg-image" src={paths.winter.rowanBranch} alt="" />
            <img className="seasons-winter-spruce seasons-winter-bg-image" src={paths.winter.spruce} alt="" />

            {snowflakes.map((image) => (
                <img key={image.className} className={image.className} src={image.path} alt="" />
            ))}
            <div className="seasons-winter-second-section-content seasons-winter-section-content">
                <h2 className="seasons-winter-subtitle seasons-winter-second-title">{title}</h2>

                <div className="seasons-winter-first-section-cards">
                    {cards.map((card, index) => (
                        <Card
                            season="winter"
                            key={card.subTitle || index}
                            title={card.title || card.subTitle || ""}
                            description={card.description || ""}
                            imagePath={paths.winter.winterAnimals?.[index % paths.winter.winterAnimals.length] ?? ""}
                            reverse={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondSection;