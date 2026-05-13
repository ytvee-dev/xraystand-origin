import { type ReactElement } from "react";
import * as paths from "@modules/seasons/locales/paths.json";
import Card from "@modules/seasons/components/Card";
import "./style.css";

interface CardContent {
    subTitle?: string;
    description?: string;
}

interface SeasonContent {
    title: string;
    description: string;
    content: CardContent[];
}


const snowflakes = [
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-first-snowflake-1 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-first-snowflake-2 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-first-snowflake-3 seasons-winter-bg-image",
    },
    {
        path: paths.winter.snowflake,
        className: "seasons-winter-first-snowflake-4 seasons-winter-bg-image",
    },
];

const FirstSection = ({
    title,
    description,
    content,
}: SeasonContent): ReactElement => {
    return (
        <div className="seasons-winter-section-container">

            <img className="seasons-winter-texture-bg" src={paths.texturedBg} alt=""/>
            <img className="seasons-winter-bear seasons-winter-bg-image" src={paths.winter.snowBear} alt=""/>

            {snowflakes.map((image) => (
                <img key={image.className} className={image.className} src={image.path} alt=""
 />
            ))}
            <div className="seasons-winter-first-section-content seasons-winter-section-content">

                <img className="seasons-winter-logo" src={paths.winter.logo} alt="" />
                <h2 className="seasons-winter-title seasons-winter-first-title">{title}</h2>
                <p className="seasons-winter-subtitle seasons-winter-first-subtitle">{description}</p>

                <div className="seasons-winter-first-section-cards">
                    {content.map((card: CardContent) => (
                        <Card
                            key={card.subTitle}
                            title={card.subTitle}
                            description={card.description || ""}
                            season="winter"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FirstSection;