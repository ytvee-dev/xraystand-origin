import {type ReactElement} from "react";
import { type SeasonContent } from "@modules/seasons/types/index";
import Card from "@modules/seasons/components/Card";
import * as paths from '@modules/seasons/locales/paths.json';
import "./style.css";

const imgPaths = [
    {
        path: paths.texturedBg,
        class: "seasons-summer-textured-bg"
    },
    {
        path: paths.summer.darkYellowButterfly,
        class: "seasons-summer-first-yellow-butterfly seasons-summer-bg-img"
    },
    {
        path: paths.summer.darkYellowButterfly,
        class: "seasons-summer-first-yellow-butterfly-mobile seasons-summer-bg-img"
    },
    {
        path: paths.summer.fox,
        class: "seasons-summer-first-fox seasons-summer-bg-img"
    },
    {
        path: paths.summer.pinkButterfly,
        class: "seasons-summer-first-pink-butterfly seasons-summer-bg-img"
    }
]

const SeventhSection = ({
    title, 
    description,
    content}: SeasonContent): ReactElement => {
    
    return (
        <div className="seasons-summer-section">
            {imgPaths.map(img => (
                <img src={img.path} alt="" className={img.class} key={img.class}/>  
            ))}

            <div className="seasons-summer-section-content">
                <img src={paths.summer.logo} alt="summer" className="seasons-summer-first-logo"/>
                <h2 className="seasons-summer-title">{title}</h2>
                <p className="seasons-summer-subtitle">{description}</p>

                <div className="seasons-summer-first-section-cards-wrapper">
                    {content.map((card) => (
                        <Card 
                            title={card.subTitle}
                            description={card.description}
                            season="summer"
                            key={card.subTitle}
                            height="min"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeventhSection;