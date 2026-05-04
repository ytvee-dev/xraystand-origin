import {type ReactElement} from "react";
import * as paths from '@modules/seasons/locales/paths.json';
import { type SeasonsCard } from "@modules/seasons/types";
import Card from "@modules/fireSafety/components/Card";
import "./style.css";

interface ISecondSectionProps {
    title: string,
    cards: SeasonsCard[]
}

const SecondSection = ({title, cards}: ISecondSectionProps): ReactElement => {
    console.log(cards)
    return (
        <div className="seasons-autumn-first-section">
            <img src={paths.texturedBg} alt="" className="seasons-autumn-textured-bg"/>
            <img src={paths.autumn.yellowLeaf} alt="" className="seasons-autumn-yellow-leaf seasons-autumn-bg-img"/>
            <img src={paths.autumn.greenLeaf} alt="" className="seasons-autumn-green-leaf seasons-autumn-bg-img"/>
            <img src={paths.autumn.redLeaf} alt="" className="seasons-autumn-red-leaf seasons-autumn-bg-img"/>
            <img src={paths.autumn.bird} alt="" className="seasons-autumn-bird seasons-autumn-bg-img"/>
            <img src={paths.autumn.bear} alt="" className="seasons-autumn-bear seasons-autumn-bg-img"/>

            <div className="seasons-autumn-first-section-content">
                <p>{title}</p>

                <div className="seasons-autumn-first-section-cards-wrapper">
                    {cards.map((card) => (
                        <Card 
                            title={card.subTitle}
                            description={card.description}
                            flexDirection="column"
                            className="seasons-autumn-first-section-card"
                            key={card.subTitle}
                            style={{color: "#7E2A0C"}}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondSection; 