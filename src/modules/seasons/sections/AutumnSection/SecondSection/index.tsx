import {type ReactElement} from "react";
import * as paths from '@modules/seasons/locales/paths.json';
import { type SeasonsCard } from "@modules/seasons/types";
import Card from "@modules/seasons/components/Card";
import "./style.css";

interface ISecondSectionProps {
    title: string,
    cards: SeasonsCard[]
}

const SecondSection = ({title, cards}: ISecondSectionProps): ReactElement => {
    return (
        <div className="seasons-autumn-section">
            <img src={paths.texturedBg} alt="" className="seasons-autumn-textured-bg"/>
            <img src={paths.autumn.deer} alt="" className="seasons-autumn-deer seasons-autumn-bg-img"/>
            <img src={paths.autumn.umbrella} alt="" className="seasons-autumn-umbrella seasons-autumn-bg-img"/>
            <img src={paths.autumn.greenLeaf} alt="" className="seasons-autumn-second-green-leaf seasons-autumn-bg-img"/>
            <img src={paths.autumn.yellowLeaf} alt="" className="seasons-autumn-second-yellow-leaf seasons-autumn-bg-img"/>

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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondSection; 