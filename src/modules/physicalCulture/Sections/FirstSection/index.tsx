import React, { type ReactElement } from "react";
import SectionMediaBlock from "@modules/aiProfession/Sections/components/SectionMediaBlock"
import FilledTitle from "@modules/physicalCulture/components/FilledTitle"
import * as paths from "@modules/physicalCulture/locales/paths.json"
import splitString from "@utils/splitString"
import './style.css'

interface HypodynamiaBlock {
    title: string,
    description: string,
    cards: {
        title: string,
        description: string,
    }[],
    activityNotifications: {
        description: string
    }[]
}

interface FirstSection {
    title: string,
    subTitle: string,
    description: string,
    hypodynamia: HypodynamiaBlock
}

interface FirstSectionProps {
    content: FirstSection
}

const FirstSection: React.FC<FirstSectionProps> = ({ 
    content
 }): ReactElement => {
    const hypodynamiaCards = content.hypodynamia.cards
    const descriptionArray = splitString(content.description)

    return(
        <section className="physical-first-section">
            <div  className="physical-first-content">
                <FilledTitle 
                    title={content.title}
                    bgColor="#C21E24"
                    className="physical-first-title"
                />

                <div className="physical-first-content-block">
                    <div className="physical-first-content-text-block">
                        <h2>{content.subTitle}</h2>
                        {descriptionArray.map((text, index) => (
                            <p 
                                key={text}
                                className={`physical-first-description-${index}`}
                            >
                                {text}
                            </p>
                        ))}
                    </div>

                    <img src={paths.firstSection.manOnTheSofa} alt=""/>
                </div>

                <div className="physical-first-hypodynamia-block">
                    <h2>{content.hypodynamia.title}</h2>
                    <p>{content.hypodynamia.description}</p>
                    <div className="physical-first-hypodynamia-block-cards-wrapper">
                        {hypodynamiaCards.map((card, index) => (
                            <SectionMediaBlock
                                key={card.title}
                                title={card.title}
                                description={card.description}
                                image={paths.firstSection.cards[index]}
                                imagePosition="left"
                                className="physical-first-cards"
                            />
                        ))}
                    </div>
                </div>

                <div className="physical-first-notifications-cards-wrapper">
                    {content.hypodynamia.activityNotifications.map((card, index) => (
                            <SectionMediaBlock
                                key={card.description}
                                description={card.description}
                                image={paths.firstSection.filledCards[index]}
                                imagePosition="left"
                                className="physical-first-notifications-cards"
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default FirstSection;