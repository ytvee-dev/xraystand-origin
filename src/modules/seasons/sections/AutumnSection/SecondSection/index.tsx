import { type ReactElement } from "react";
import * as paths from "@modules/seasons/locales/paths.json";
import { type SeasonsCard } from "@modules/seasons/types";
import Card from "@modules/seasons/components/Card";
import "./style.css";

interface ISecondSectionProps {
    title: string;
    cards: SeasonsCard[];
}

const imgPaths = [
    {
        path: paths.texturedBg,
        class: "seasons-autumn-textured-bg",
    },
    {
        path: paths.autumn.deer,
        class: "seasons-autumn-deer seasons-autumn-bg-img",
    },
    {
        path: paths.autumn.umbrella,
        class: "seasons-autumn-umbrella seasons-autumn-bg-img",
    },
    {
        path: paths.autumn.greenLeaf,
        class: "seasons-autumn-second-green-leaf seasons-autumn-bg-img",
    },
    {
        path: paths.autumn.yellowLeaf,
        class: "seasons-autumn-second-yellow-leaf seasons-autumn-bg-img",
    },
];

const SecondSection = ({ title, cards }: ISecondSectionProps): ReactElement => {
    return (
        <div className="seasons-autumn-section">
            {imgPaths.map((img) => (
                <img
                    src={img.path}
                    alt=""
                    className={img.class}
                    key={img.path}
                />
            ))}

            <div className="seasons-autumn-second-section-content seasons-autumn-section-content">
                <p className="seasons-autumn-subtitle">{title}</p>

                <div className="seasons-autumn-second-section-cards-wrapper">
                    {cards.map((card, index) => (
                        <Card
                            title={card.subTitle}
                            description={card.description}
                            key={card.subTitle}
                            imagePath={paths.autumn.autumnAnimals[index]}
                            reverse={index % 2 == 1 ? false : true}
                            height="fit-content"
                            season="autumn"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
