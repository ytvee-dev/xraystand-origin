import {type ReactElement} from "react";
import * as paths from '@modules/seasons/locales/paths.json';
import { type SeasonContent } from "@modules/seasons/types";
import Card from "@modules/seasons/components/Card";
import "./style.css";


const FirstSection = ({title, description, content}: SeasonContent): ReactElement => {
    console.log(content)

    return (
        <div className="seasons-autumn-first-section">
            <img src={paths.texturedBg} alt="" className="seasons-autumn-textured-bg"/>
            <img src={paths.autumn.yellowLeaf} alt="" className="seasons-autumn-yellow-leaf seasons-autumn-bg-img"/>
            <img src={paths.autumn.greenLeaf} alt="" className="seasons-autumn-green-leaf seasons-autumn-bg-img"/>
            <img src={paths.autumn.redLeaf} alt="" className="seasons-autumn-red-leaf seasons-autumn-bg-img"/>
            <img src={paths.autumn.bird} alt="" className="seasons-autumn-bird seasons-autumn-bg-img"/>
            <img src={paths.autumn.bear} alt="" className="seasons-autumn-bear seasons-autumn-bg-img"/>

            <div className="seasons-autumn-first-section-content">
                <img src={paths.autumn.logo} alt="autumn" className="seasons-autumn-logo"/>
                <h2>{title}</h2>
                <p>{description}</p>

                <div className="seasons-autumn-first-section-cards-wrapper">
                    {content.map((card) => (
                        <Card 
                            title={card.subTitle}
                            description={card.description}
                            season="autumn"
                            key={card.subTitle}
                            height="min"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FirstSection;