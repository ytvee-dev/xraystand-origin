import {type ReactElement} from "react";
import { type SeasonsCard } from "@modules/seasons/types/index";
import Card from "@modules/seasons/components/Card";
import * as paths from '@modules/seasons/locales/paths.json';
import "./style.css";

interface ISecondSectionProps {
    title: string,
    cards: SeasonsCard[]
}

const imgPaths = [
    {
        path: paths.texturedBg,
        class: "seasons-summer-textured-bg"
    },
    {
        path: paths.summer.darkYellowButterfly,
        class: "seasons-summer-second-dark-yellow-butterfly seasons-summer-bg-img"
    },
    {
        path: paths.summer.yellowButterfly,
        class: "seasons-summer-second-yellow-butterfly seasons-summer-bg-img"
    },
    {
        path: paths.summer.lightPinkButterfly,
        class: "seasons-summer-second-light-pink-butterfly seasons-summer-bg-img"
    },
    {
        path: paths.summer.bee,
        class: "seasons-summer-second-bee seasons-summer-bg-img"
    },
    {
        path: paths.summer.giraffe,
        class: "seasons-summer-second-giraffe seasons-summer-bg-img"
    },
]

const EighthSection = ({ title, cards }: ISecondSectionProps): ReactElement => {
    return (
        <div className="seasons-summer-section">
            {imgPaths.map(img => (
                <img src={img.path} alt="" className={img.class} key={img.path}/>
            ))}

            <div className="seasons-summer-section-content">
                <p className="seasons-summer-subtitle">{title}</p>

                <div className="seasons-summer-second-section-cards-wrapper">
                    {cards.map((card, index) => (
                        <Card 
                            title={card.subTitle}
                            description={card.description}
                            key={card.subTitle}
                            imagePath={paths.summer.summerAnimals[index]}
                            reverse={index % 2 == 1 ? false : true}
                            height="fit-content"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EighthSection;