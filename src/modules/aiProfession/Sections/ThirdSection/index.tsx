import React, { type ReactElement } from "react";
import Carousel from "@modules/kazTarih/components/Carousel";
import { usePageData } from "@hooks/usePageData";
import ProfessionCard from "../components/ProfessionCards";
import PracticeCards from "../components/PracticeCards";
import * as paths from "../../locales/path.json";
import "./style.css";

interface CardItem {
    title: string;
    description: string;
}

interface CardsBlock {
    title: string;
    subTitle: string;
    cards: CardItem[];
}

interface PracticeCardItem {
    title: string;
    buttonDescription: string;
    description: string;
}


interface PracticeCardItem {
    title: string;
    buttonDescription: string;
    description: string;
}

interface PracticeBlock {
    title: string;
    subTitle: string;
    cards: PracticeCardItem[];
}

interface ThirdSectionContent {
    title: string;
    subTitle: string[];
    trainer: CardsBlock;
    professions: CardsBlock;
    practice: PracticeBlock;
    aiProffesionDescription: string;
}

interface ThirdSectionProps {
    content: ThirdSectionContent;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ content }): ReactElement => {
    const { screenWidth } = usePageData();
    const isMobile = screenWidth <= 900;

    const trainerImages = [
        paths.cards.thirdSection[0],
        paths.cards.thirdSection[1],
        paths.cards.thirdSection[2],
    ];

    const professionImages = [
        paths.cards.thirdSection[3],
        paths.cards.thirdSection[4],
        paths.cards.thirdSection[5],
    ];

    const [reminderTitle, reminderText] = content.aiProffesionDescription.split(/(?<=!)\s/);

    return (
        <section className="ai-profession-third-section">
            <img className="ai-profession-third-bg-top" src={paths.backgrounds.thirdSection[0]} alt="" />
            <img className="ai-profession-third-bg-bottom" src={paths.backgrounds.thirdSection[1]} alt="" />

            <div className="ai-profession-third-title-container">
                <h2 className="ai-profession-third-title">{content.title}</h2>
                <div className="ai-profession-third-subtitles">
                    {content.subTitle.map((subtitle, index) => (
                        <p className="ai-profession-third-subtitle" key={index}>{subtitle}</p>
                    ))}
                </div>
            </div>

            <div className="ai-profession-third-block">
                <div className="ai-profession-third-block-title-container">
                    <h2 className="ai-profession-third-block-title">{content.trainer.title}</h2>
                    <p className="ai-profession-third-block-subtitle">{content.trainer.subTitle}</p>
                </div>

                <div className="ai-profession-third-cards">
                    {isMobile ? (
                        <Carousel className="ai-profession-third-carousel">
                            {content.trainer.cards.map((card, index) => (
                                <ProfessionCard
                                    key={index}
                                    variant="trainer"
                                    title={card.title}
                                    description={card.description}
                                    image={trainerImages[index]}
                                />
                            ))}
                        </Carousel>
                    ) : (
                        content.trainer.cards.map((card, index) => (
                            <ProfessionCard
                                key={index}
                                variant="trainer"
                                title={card.title}
                                description={card.description}
                                image={trainerImages[index]}
                            />
                        ))
                    )}
                </div>
            </div>

            <div className="ai-profession-third-block">
                <div className="ai-profession-third-block-title-container">
                    <h2 className="ai-profession-third-block-title">{content.professions.title}</h2>
                    <p className="ai-profession-third-block-subtitle">{content.professions.subTitle}</p>
                </div>

                <div className="ai-profession-third-cards ai-profession-third-profession-cards">
                    {isMobile ? (
                        <Carousel className="ai-profession-third-carousel ai-profession-third-profession-carousel">
                            {content.professions.cards.map((card, index) => (
                                <ProfessionCard
                                    key={index}
                                    variant="profession"
                                    title={card.title}
                                    description={card.description}
                                    image={professionImages[index]}
                                />
                            ))}
                        </Carousel>
                    ) : (
                        content.professions.cards.map((card, index) => (
                            <ProfessionCard
                                key={index}
                                variant="profession"
                                title={card.title}
                                description={card.description}
                                image={professionImages[index]}
                            />
                        ))
                    )}
                </div>
            </div>

            <div className="ai-profession-third-block">
                <div className="ai-profession-third-block-title-container">
                    <h2 className="ai-profession-third-block-title third-block-title-3">{content.practice.title}</h2>
                    <p className="ai-profession-third-block-subtitle">{content.practice.subTitle}</p>
                </div>

                <PracticeCards cards={content.practice.cards} />

                <div className="ai-profession-description">
                    <strong>{reminderTitle}</strong>
                    <p>{reminderText}</p>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;