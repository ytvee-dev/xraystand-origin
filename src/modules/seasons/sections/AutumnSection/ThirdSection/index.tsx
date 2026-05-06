import {type ReactElement} from "react";
import * as paths from '@modules/seasons/locales/paths.json';
import { type SeasonsCard } from "@modules/seasons/types";
import ImageCard from "@modules/seasons/components/ImageCard";
import DSNotification from "@components/common/DSNotification";
import "./style.css";

interface IThirdSectionProps {
    title: string,
    cards: SeasonsCard[]
}

const ThirdSection = ({title, cards}: IThirdSectionProps): ReactElement => {
    const imgCards = cards.slice(0, 3);
    const securityMeasuresCards = cards.slice(4)
    return (
        <div className="seasons-autumn-section">
            <img src={paths.texturedBg} alt="" className="seasons-autumn-textured-bg"/>
            <img src={paths.autumn.redLeaf} alt="" className="seasons-autumn-redLeaf-top seasons-autumn-bg-img"/>
            <img src={paths.autumn.bird} alt="" className="seasons-autumn-third-bird seasons-autumn-bg-img"/>
            <img src={paths.autumn.sweater} alt="" className="seasons-autumn-sweater seasons-autumn-bg-img"/>
            <img src={paths.autumn.redLeaf} alt="" className="seasons-autumn-redLeaf-bottom seasons-autumn-bg-img"/>

            <div className="seasons-autumn-third-content seasons-autumn-section-content">
                <p className="seasons-autumn-subtitle">{title}</p>

                <div className="seasons-autumn-third-img-cards-wrapper">
                    {imgCards.map((card, index) => (
                        <ImageCard 
                            title={card.subTitle}
                            description={card.description}
                            key={card.subTitle}
                            season="autumn"
                            imagePath={paths.autumn.leaf}
                            className={`autumn-third-img-cards-${index+1}`}
                        />
                    ))}
                </div>
                <p className="seasons-autumn-security-subtitle seasons-autumn-subtitle">{cards[3].title}</p>

                <div className="seasons-autumn-third-cards-wrapper">
                    {securityMeasuresCards.map(card => (
                        <DSNotification 
                            content={card.securityMeasures}
                            key={card.securityMeasures}
                            type="info"
                            backgroundColor="#7E2A0C"
                            textColor="#FFFFFF"
                            borderRadius="50px"
                            iconName="autumn-leaf"
                            iconWidth="70"
                            iconHeight="65"
                            padding="24px"
                            cardGap="20px"
                            className="seasons-autumn-third-card"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThirdSection; 