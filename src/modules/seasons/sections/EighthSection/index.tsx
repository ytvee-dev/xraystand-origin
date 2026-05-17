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
        class: "seasons-summer-eighth-textured-bg"
    },
    {
        path: paths.summer.darkYellowButterfly,
        class: "seasons-summer-eighth-dark-yellow-butterfly seasons-summer-eighth-bg-img"
    },
    {
        path: paths.summer.yellowButterfly,
        class: "seasons-summer-eighth-yellow-butterfly seasons-summer-eighth-bg-img"
    },
    {
        path: paths.summer.lightPinkButterfly,
        class: "seasons-summer-eighth-light-pink-butterfly seasons-summer-eighth-bg-img"
    },
    {
        path: paths.summer.bee,
        class: "seasons-summer-eighth-bee seasons-summer-eighth-bg-img"
    },
    {
        path: paths.summer.giraffe,
        class: "seasons-summer-eighth-giraffe seasons-summer-eighth-bg-img"
    },
]

const EighthSection = ({content}: SummerNumberSectionOnlyContent): ReactElement => {
    const cards = content.content;
    
    return (
        <section className="seasons-summer-eighth-section">
            {imgPaths.map(img => (
                <img src={img.path} alt="" className={img.class} key={img.path}/>
            ))}

            <div className="seasons-summer-eighth-section-content seasons-summer-section-eighth-content">
                <p className="seasons-summer-eighth-subtitle">{content.description}</p>

                <div className="seasons-summer-eighth-section-cards-wrapper">
                    {cards.map((card, index) => (
                        <Card 
                            title={card.subtitle}
                            description={card.description}
                            key={card.subtitle}
                            imagePath={paths.summer.summerAnimals[index]}
                            reverse={index % 2 == 1 ? false : true}
                            height="fit-content"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EighthSection;