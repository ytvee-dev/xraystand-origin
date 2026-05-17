import {type ReactElement} from "react";
import Card from "@modules/seasons/components/Card";
import * as paths from '@modules/seasons/locales/paths.json';
import "./style.css";

interface SummerNumberContent {
    subtitle: string,
    description: string
} 

interface SummerNumberSection {
    title: string,
    description: string,
    content: SummerNumberContent[]
}
// переименовать
interface SummerNumberSectionOnlyContent {
    content: SummerNumberSection
}
const imgPaths = [
    {
        path: paths.texturedBg,
        class: "seasons-summer-seventh-textured-bg"
    },
    {
        path: paths.summer.darkYellowButterfly,
        class: "seasons-summer-yellow-butterfly seasons-summer-seventh-bg-img"
    },
    {
        path: paths.summer.darkYellowButterfly,
        class: "seasons-summer-yellow-butterfly-mobile seasons-summer-seventh-bg-img"
    },
    {
        path: paths.summer.fox,
        class: "seasons-summer-fox seasons-summer-seventh-bg-img"
    },
    {
        path: paths.summer.pinkButterfly,
        class: "seasons-summer-pink-butterfly seasons-summer-seventh-bg-img"
    }
]

const SeventhSection = ({content}: SummerNumberSectionOnlyContent): ReactElement => {
    const cards = content.content;
    console.log(cards);
    
    return (
        <section className="seasons-summer-seventh-section">
            {imgPaths.map(img => (
                <img src={img.path} alt="" className={img.class} key={img.path}/>
            ))}

            <div className="seasons-summer-seventh-section-content seasons-summer-section-seventh-content">
                <img src={paths.summer.logo} alt="summer" className="seasons-summer-seventh-logo"/>
                <h2 className="seasons-summer-seventh-title">{content.title}</h2>
                <p className="seasons-summer-seventh-subtitle">{content.description}</p>

                <div className="seasons-summer-seventh-section-cards-wrapper">
                    {cards.map((card) => (
                        <Card 
                            title={card.subtitle}
                            description={card.description}
                            season="summer"
                            key={card.subtitle}
                            height="min"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeventhSection;