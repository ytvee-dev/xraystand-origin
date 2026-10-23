import type { ReactElement } from 'react';
import * as paths from "@modules/ecology/locales/path.json"
import NumberTitle from '@modules/ecology/components/NumberTitle';
import type { BaseCards } from "@modules/ecology/types";
import './style.css'

interface FourthSectionCards {
    title: string;
    description: string;
    solutionСard: BaseCards;
}

interface mainConclusionCards {
    title: string;
    subtitle: string;
    cardsTitle: string;
    cards: BaseCards[];
}

interface FourthSection {
    title: string;
    description: string;
    cards: FourthSectionCards[];
    mainConclusion: mainConclusionCards;
} 

interface FourthSectionProps {
    content: FourthSection;
} 

function SplitCard({
    title,
    description,
    solutionСard,
    className
}: FourthSectionCards & {className: string}) {
    return(
        <div className={`ecology-split-card ${className}`}>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="ecology-split-card-accent-block">
                <p className="ecology-split-card-accent-bold-text">{solutionСard.title}</p>
                <p>{solutionСard.description}</p>
            </div>
        </div>
)}

export default function FourthSection({ 
    content
}: FourthSectionProps): ReactElement {
    const mainConclusion = content.mainConclusion;
    return(
        <section className="ecology-fourth-section">
            <NumberTitle 
                number='04'
                title={content.title}
            />
            <p>{content.description}</p>

            {content.cards.map((card, index) => (
                <SplitCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    solutionСard={card.solutionСard}
                    className={`ecology-split-card-${index}`}
                />
            ))}

            <div className="ecology-fourth-section-second-title">
                <p>{mainConclusion.subtitle}</p>
                <h2>{mainConclusion.title}</h2>
            </div>

            <h2 className="ecology-fourth-section-card-title">
                {mainConclusion.cardsTitle}
            </h2>

            <div className="ecology-main-conclusion-card-wrapper">
                {mainConclusion.cards.map((card, index) => (
                    <div
                        className="ecology-main-conclusion-card"
                        key={card.title}
                    >
                        <div>
                            <p className="ecology-main-conclusion-card-title">{card.title}</p>
                            <p>{card.description}</p>
                        </div>
                        <img src={paths.fourthSectionCards[index]} alt="" />
                    </div>
                ))}
            </div>
        </section>
    )
}