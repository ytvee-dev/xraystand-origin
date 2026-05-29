import {type ReactElement} from "react";
import * as paths from '@modules/seasons/locales/paths.json';
import { type SeasonContent } from "@modules/seasons/types";
import Card from "@modules/seasons/components/Card";
import "./style.css";

const imgPaths = [
    {
        path: paths.texturedBg,
        class: "seasons-autumn-textured-bg"
    },
    {
        path: paths.autumn.yellowLeaf,
        class: "seasons-autumn-yellow-leaf seasons-autumn-bg-img"
    },
    {
        path: paths.autumn.greenLeaf,
        class: "seasons-autumn-green-leaf seasons-autumn-bg-img"
    },
    {
        path: paths.autumn.redLeaf,
        class: "seasons-autumn-red-leaf seasons-autumn-bg-img"
    },
    {
        path: paths.autumn.bird,
        class: "seasons-autumn-bird seasons-autumn-bg-img"
    },
    {
        path: paths.autumn.bear,
        class: "seasons-autumn-bear seasons-autumn-bg-img"
    }
]

const FirstSection = ({title, description, content}: SeasonContent): ReactElement => {
    return (
        <div className="seasons-autumn-section">
            {imgPaths.map(img => (
                <img src={img.path} alt="" className={img.class} key={img.path}/>
            ))}

            <div className="seasons-autumn-section-content">
                <img src={paths.autumn.logo} alt="autumn" className="seasons-autumn-logo"/>
                <h2 className="seasons-autumn-title">{title}</h2>
                <p className="seasons-autumn-subtitle">{description}</p>

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