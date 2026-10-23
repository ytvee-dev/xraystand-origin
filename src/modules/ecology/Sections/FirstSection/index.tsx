import type { ReactElement } from 'react';
import * as paths from "@modules/ecology/locales/path.json"
import NumberTitle from '@modules/ecology/components/NumberTitle';
import SpriteIcon from "@components/common/Other/SpriteIcon";
import type { BaseCards } from "@modules/ecology/types";
import './style.css'

interface MathEcologyCards {
    title: string;
    description: string;
    accentText: string;
}

interface IFirstSection {
    title: string;
    description: string;
    cards: BaseCards[];
    mathCard: MathEcologyCards;
}

interface FirstSectionProps {
    content: IFirstSection;
    isMobile: boolean;
}

const BaseCards = ({
    title,
    description,
    isMobile
}: BaseCards & {isMobile: boolean}): ReactElement => {
    return (
        <div className="ecology-first-section-cards">
            <div className="ecology-first-card-title-wrapper">
                <SpriteIcon
                    iconId="ecologyLeaf"
                    width={isMobile ? "34" : "52" }
                    height={isMobile ? "27" : "42" }
                />
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default function FirstSection({ 
    content,
    isMobile
}: FirstSectionProps): ReactElement {
    const mathCard = content.mathCard;

    return(
        <section className="ecology-first-section">
            <NumberTitle 
                number='01'
                title={content.title}
                className='ecology-first-section-title'
            />

            <div className="ecology-first-cards-wrapper">
                {content.cards.map(card => 
                    <BaseCards
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        isMobile={isMobile}
                    />
                )}
            </div>
            <img src={paths.firstSectionThreeBg} alt=""/>

            <div className="ecology-first-math-card">
                <div className="ecology-first-math-card-block">
                    <div id="number-one-block">1</div>
                    <div id="multiplication-block">×</div>
                    <div id="million-block">1 000 000</div>
                </div>

                <div className="ecology-first-math-card-text">
                    <h2>{mathCard.title}</h2>
                    <p className="ecology-first-math-card-description">{mathCard.description}</p>
                    <p id="ecology-first-math-card-accent-text">
                        {mathCard.accentText}
                    </p>
                </div>
            </div>
        </section>
    )
}