import { type ReactElement } from "react";
import Carousel from "@modules/kazTarih/components/Carousel";
import TwoImgCards from "@modules/safetyInNature/components/TwoImgCards";
import SafetyNatureCard from "@modules/safetyInNature/components/SafetyNatureCards"
import * as paths from "@modules/safetyInNature/locales/paths.json";
import "./style.css";

interface ISecondSectionContent {
    title: string;
    description: string;
}

interface IListContent {
    highlightedText: string;
    text: string;
}

interface ISecondSectionCards {
    title: string;
    content: IListContent[];
}

interface ISecondSection {
    title: string;
    description: string;
    content: ISecondSectionContent[];
    cards: ISecondSectionCards[]
}

interface ISecondSectionProps {
    content: ISecondSection;
}

const SecondSection = ({ content }: ISecondSectionProps): ReactElement => {
    const carouselCardsBgColor = [
        "rgba(220, 159, 74, 0.7)",
        "rgba(129, 156, 86, 0.7)",
        "rgba(61, 139, 124, 0.7)",
        "rgba(63, 123, 131, 0.7)",
        "rgba(36, 136, 153, 0.7)"
    ]

    return (
        <section className="safety-in-nature-second-section">
            <img src={paths.secondPlant} alt="" className="safety-in-nature-second-img"/>

            <div className="safety-in-nature-second-content">
                <div className="safety-in-nature-second-title">
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                </div>

                <div className="safety-in-nature-second-cards">
                    {content.content.map(card => (
                        <div className="safety-in-nature-second-cards" key={card.title}>
                            
                        </div>
                    ))}
                </div>

                <Carousel className="safety-in-nature-second-carousel">
                    {content.cards.map((card, index) => 
                        <div 
                            className="safety-in-nature-second-carousel-card-wrapper"
                            key={card.title}
                        >
                            <TwoImgCards 
                                title={card.title}
                                content={card.content}
                                bgColor={carouselCardsBgColor[index]}
                                firstImg={paths.secondSectionCards[index]}
                                secondImg={paths.secondSectionCards[index + 1]}
                                className={`safety-in-nature-second-carousel-card-${index}`}
                            />
                        </div>
                    )}
                </Carousel>
            </div>
        </section>
    )
}

export default SecondSection;