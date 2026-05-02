import {type ReactElement} from "react";
import * as paths from '@modules/seasons/locales/paths.json';
import { type SeasonContent } from "@modules/seasons/types";
import Card from "@modules/fireSafety/components/Card"
import "./style.css";


const FirstSection = ({title, description, content}: SeasonContent): ReactElement => {
    console.log(content)
    return (
        <div className="seasons-autumn-first-section">
            <img src={paths.texturedBg} alt="" className="seasons-autumn-textured-bg"/>

            <div className="seasons-autumn-first-section-content">
                <img src={paths.autumn.logo} alt="autumn" className="seasons-autumn-logo"/>
                <h1>{title}</h1>
                <p>{description}</p>

                <div className="seasons-autumn-first-section-cards-wrapper">
                    {content.map((card) => (
                        <Card 
                            title={card.subTitle}
                            description={card.description}
                            flexDirection="row-reverse"
                            className="seasons-autumn-first-section-cards"
                            key={card.subTitle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FirstSection;