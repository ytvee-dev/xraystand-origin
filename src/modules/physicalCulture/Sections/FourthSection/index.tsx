import React, { type ReactElement } from "react";
import SectionMediaBlock from "@modules/aiProfession/Sections/components/SectionMediaBlock"
import FilledTitle from "@modules/physicalCulture/components/FilledTitle"
import * as paths from "@modules/physicalCulture/locales/paths.json"
import splitString from "@utils/splitString"
import type { CardItem } from "@modules/aiProfession/Sections/ThirdSection"
import './style.css'

interface PainSignalsCards {
    title: string;
    list: string[];
}

interface FourthLineCards {
    title: string;
    description: string;
    cards?: CardItem[]
}

interface ContraindicationsBlock {
    title: string;
    description: string;
    list: string[]
}

interface FourthSection {
    title: string;
    lineCards: FourthLineCards[];
    painSignals: {
        title: string;
        description: string;
        cards: PainSignalsCards[];
        contraindications: ContraindicationsBlock;
        activityNotifications: string
    }
}

interface FourthSectionProps {
    content: FourthSection
}

interface FourthLineCardsComponent extends FourthLineCards {
    className: string;
    img: string;
}

const LineCards: React.FC<FourthLineCardsComponent> = ({
    title,
    description,
    cards,
    className,
    img
}): ReactElement => {
    const splitDescriptionArr = splitString(description)

    return(
        <div className={`physical-line-cards ${className}`}>
            <h3>{title}</h3>
            <div className="physical-line-cards-content">
                <img src={img} alt="" />
        
                <div className="physical-line-cards-content-description">
                    {splitDescriptionArr.map(text => (
                        <p key={text}>{text}</p>
                    ))}
                </div>

                <div className="physical-line-cards-filled-cards-wrapper">
                    {cards && cards.map(card => (
                        <div 
                            className="physical-line-cards-filled-cards"
                            key={card.title}
                        >
                            <p className="physical-line-cards-filled-cards-title">
                                {card.title}
                            </p>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const FourthSection: React.FC<FourthSectionProps> = ({ 
    content
 }): ReactElement => {
    return(
        <section className="physical-fourth-section">
        <div  className="physical-fourth-content">
            <FilledTitle 
                title={content.title}
                bgColor="#009EE0"
                className="physical-fourth-title"
            />
            <img 
                src={paths.fourthSection.safetyPrecautions}
                alt=""
                className="physical-fourth-safety-precautions"
            />
            <div className="physical-line-card-wrapper">
                {content.lineCards.map((card, index) => (
                    <LineCards
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        cards={card.cards}
                        img={paths.fourthSection.cards[index]}
                        className={`physical-line-cards-${index}`}
                    />
                ))}
            </div>

            
        </div>
    </section>
    )
}

export default FourthSection;