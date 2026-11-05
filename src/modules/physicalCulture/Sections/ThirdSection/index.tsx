import React, { type ReactElement } from "react";
// import SectionMediaBlock from "@modules/aiProfession/Sections/components/SectionMediaBlock"
import FilledTitle from "@modules/physicalCulture/components/FilledTitle"
import * as paths from "@modules/physicalCulture/locales/paths.json"
// import splitString from "@utils/splitString"
import './style.css'
// import splitString from "@utils/splitString";

interface muscleGroupsCards {
    title: string;
    description: string;
    roleTitle: string;
    roleDescription: string
}

interface TrainingCards {
    title: string;
    descriptionTop: string;
    boldText: string;
    descriptionBottom: string
}

interface ThirdSection {
    title: string;
    description: string;
    trainingTypes: {
        title: string;
        cards: TrainingCards[]
    };
    muscleGroups: {
        title: string;
        description: string;
        cards: muscleGroupsCards[];
        activityNotifications: string
    }
}

interface ThirdSectionProps {
    content: ThirdSection;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ 
    content
 }): ReactElement => {
    return(
        <section className="physical-third-section">
            <div  className="physical-third-content">
                <FilledTitle 
                    title={content.title}
                    bgColor="#4C9F2D"
                    className="physical-third-title"
                />
                <p className="physics-third-description">
                    {content.description}
                </p>

                <FilledTitle 
                    title={content.trainingTypes.title}
                    bgColor="#4C9F2D"
                    className="physical-third-title"
                    variant="h2"
                />

                <div className="physical-third-training-block-wrapper">
                    {content.trainingTypes.cards.map((card, index) => (
                        <div 
                            className={`
                                physical-third-training-block
                                physical-third-training-${index}
                            `}
                            key={card.title}
                        >
                            <img 
                                className={`physical-third-training-img-${index}`}
                                src={paths.thirdSection.threePillarsCards[index]}
                                alt=""
                            />

                            <div className="physical-third-training-card">
                                <h3>{card.title}</h3>
                                <p>{card.descriptionTop}</p>
                                <p className="physical-third-training-bold-text">
                                    {card.boldText}
                                </p>
                                <p>{card.descriptionBottom}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <FilledTitle 
                    title={content.muscleGroups.title}
                    bgColor="#4C9F2D"
                    className="physical-third-title"
                    variant="h2"
                />
                <p className="physics-third-muscle-description">
                    {content.muscleGroups.description}
                </p>
                
                <div className="physics-third-muscle-card-wrapper">
                    {content.muscleGroups.cards.map((card, index) => (
                        <div 
                            className="physics-third-muscle-card"
                            key={card.title}
                        >
                            <h3>{card.title}</h3>
                            <img src={paths.thirdSection.muscleMapCards[index]} alt="" />
                            <p>{card.description}</p>
                            <p className="physical-third-training-bold-text">{card.roleTitle}</p>
                            <p>{card.roleDescription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThirdSection;