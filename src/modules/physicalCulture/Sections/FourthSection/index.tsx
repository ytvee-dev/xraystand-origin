import React, { type ReactElement } from "react";
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
    const painSignals = content.painSignals

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

            <h2>{painSignals.title}</h2>
            <p className="physical-pain-signals-description">{painSignals.description}</p>

            <div className="physical-pain-signals-card-wrapper">
                {painSignals.cards.map((card, cardIndex)=> (
                    <div 
                        key={card.title}
                        className={`physical-pain-signals-card physical-pain-signals-${cardIndex}`}
                    >
                        <h3 className="physical-pain-signal-title">
                            {card.title}
                        </h3>

                        <ul className="physical-pain-signals-list">
                            {card.list.map((item, index) => (
                                <li
                                    className="physical-pain-signals-item"
                                    key={`${item}-${index}`}
                                >
                                    <img src={paths.fourthSection.icons[cardIndex]} alt="" />
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                </div>
                ))}
            </div>

            <div className="physical-fourth-contraindications-wrapper">
                <div className="physical-fourth-contraindications">
                    <h3>{painSignals.contraindications.title}</h3>
                    <p>{painSignals.contraindications.description}</p>
                    <ul>
                        {painSignals.contraindications.list.map(text => (
                            <li key={text}>{text}</li>
                        ))}
                    </ul>
                </div>
                <img src={paths.fourthSection.rest} alt="" />
            </div>

            <div className="physical-fourth-activity-notifications">
                <img src={paths.fourthSection.blueHeart} alt="" />
                <p>{painSignals.activityNotifications}</p>
            </div>
        </div>
    </section>
    )
}

export default FourthSection;