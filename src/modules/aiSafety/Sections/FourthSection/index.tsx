import BackgroundedTitle from '@modules/physics/components/BackgroundedTitle';
import { type ImgCardContent } from '@modules/aiSafety/components/ImgTopicCard';
import Carousel from '@modules/kazTarih/components/Carousel';
import * as paths from "@modules/aiSafety/locales/path.json";
import DSNotification from '@components/common/DSNotification';
import ImgTopicCard from '@modules/aiSafety/components/ImgTopicCard';
import MythCards from '@modules/safetyInNature/components/MythCards';
import './style.css';

interface TitleWithDescriptionObj {
    title: string;
    description: string;
}

interface FourthSection {
    title: string;
    description: string;
    cards: ImgCardContent[];
    lawsCard: TitleWithDescriptionObj;
    mythsCard:  {
        title: string;
        cards: TitleWithDescriptionObj[][]
    }
    stepCards: {
        title: string;
        cards: TitleWithDescriptionObj[]
    }
}

interface FourthSectionProps {
    content: FourthSection;
}

const StepCard = ({ title, description }: TitleWithDescriptionObj) => {
    return (
        <div className="ai-step-card">
            <p className="ai-step-card-title">{title}</p>
            <p className="ai-step-card-description">{description}</p>
        </div>
    )
}

const FourthSection = ({content}: FourthSectionProps) => {
    const mythCards = content.mythsCard.cards;
    const stepCards = content.stepCards.cards;

    return (
        <section className="ai-safety-fourth-section">
            <div className="ai-safety-title-wrapper">
                <BackgroundedTitle
                    title={content.title}
                    description={content.description}
                    bgColor="#FFFFFF"
                    titleFontWeight="700"
                    fullWidth
                    descriptionSize="large"
                    className="ai-safety-fourth-title"
                />
            </div>

            <Carousel>
                {content.cards.map((card, index) =>
                        <ImgTopicCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            list={card.list}
                            imgPath={paths.cards[index]}
                        />
                )}
            </Carousel>

            <DSNotification
                content={content.lawsCard.description}
                backgroundColor="#FFFFFF"
                textColor="#474747"
            />

            <h3>{content.mythsCard.title}</h3>
            <div className="ai-safety-fourth-myths-cards-wrapper">
                {mythCards.map(card => 
                    <MythCards
                        key={card[0].title}
                        content={card}
                    />
                )}
            </div>

            <h3>{content.stepCards.title}</h3>
            <div className="ai-safety-step-cards-wrapper">
                {stepCards.map(card => 
                    <StepCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                    />
                )}
            </div>
        </section>
    )
}

export default FourthSection;