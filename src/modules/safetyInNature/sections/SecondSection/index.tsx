import { type ReactElement } from "react";
import { usePageData } from "@hooks/usePageData";
import Carousel from "@modules/kazTarih/components/Carousel";
import TwoImgCards from "@modules/safetyInNature/components/TwoImgCards";
import SafetyNatureHeading from "@modules/safetyInNature/components/SafetyNatureHeading";
import SafetyNatureCard from "@modules/safetyInNature/components/SafetyNatureCards";
import * as paths from "@modules/safetyInNature/locales/paths.json";
import "./style.css"

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

const secondSectionIcons = [
    "natureSafetyPreparation",
    "natureSafetyClothes",
    "natureSafetyWeather",
    "natureSafetyWildlife",
    "natureSafetyNotification",
    "natureSafetyNoise",
];

const secondSectionColumns = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const SecondSection = ({ content }: ISecondSectionProps): ReactElement => {
    const { screenWidth } = usePageData();
    const isMobile = screenWidth <= 900;

    const carouselCardsBgColor = [
        "rgba(220, 159, 74, 0.7)",
        "rgba(129, 156, 86, 0.7)",
        "rgba(61, 139, 124, 0.7)",
        "rgba(63, 123, 131, 0.7)",
        "rgba(36, 136, 153, 0.7)"
    ]

    return (
        <section className="safety-in-nature-second-section">
            <img src={paths.secondPlant} alt="" className="safety-in-nature-second-img" />

            <div className="safety-in-nature-second-content">
                <SafetyNatureHeading
                    title={content.title}
                    description={content.description}
                    titleColor="#1B847C"
                    descriptionColor="#B1D6CE"
                    backgroundColor="#E4ECEA"
                />

                <div className="safety-nature-cards">
                    {isMobile ? (
                        <Carousel className="safety-nature-second-cards-carousel">
                            {content.content.map((card, index) => (
                                <SafetyNatureCard
                                    key={card.title}
                                    cardContent={card}
                                    iconId={secondSectionIcons[index]}
                                />
                            ))}
                        </Carousel>
                    ) : (
                        secondSectionColumns.map((column, columnIndex) => (
                            <div className="second-section-cards" key={columnIndex}>
                                {column.map((cardIndex) => (
                                    <SafetyNatureCard
                                        key={content.content[cardIndex].title}
                                        cardContent={content.content[cardIndex]}
                                        iconId={secondSectionIcons[cardIndex]}
                                    />
                                ))}
                            </div>
                        ))
                    )}
                </div>

                <Carousel className="safety-in-nature-second-carousel">
                    {content.cards.map((card, index) => (
                        <div className="safety-in-nature-second-card-wrapper" key={card.title}>
                            <TwoImgCards
                                title={card.title}
                                content={card.content}
                                bgColor={carouselCardsBgColor[index]}
                                firstImg={
                                    index !== content.cards.length - 1
                                        ? paths.secondSectionCards[index]
                                        : undefined
                                }
                                secondImg={
                                    index !== content.cards.length - 1
                                        ? paths.secondSectionCards[index + 1]
                                        : undefined
                                }
                                className={`safety-in-nature-second-card-${index}`}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default SecondSection;