import BackgroundedTitle from '@modules/physics/components/BackgroundedTitle';
import { type ImgCardList } from '@modules/aiSafety/components/ImgTopicCard';
import Carousel from '@modules/kazTarih/components/Carousel';
import * as paths from "@modules/aiSafety/locales/path.json";
import DSNotification from '@components/common/DSNotification';
import ImgTopicCard from '@modules/aiSafety/components/ImgTopicCard';
import MythCards from '@modules/safetyInNature/components/MythCards';
import { usePageData } from '@hooks/usePageData';
import './style.css';

interface TitleWithDescriptionObj {
    title: string;
    description: string;
}

interface ImgCardContent {
    title: string;
    description: string;
    list?: ImgCardList[];
}

interface MythCard {
    title: string;
    cards: TitleWithDescriptionObj[][];
}

interface StepCard {
    title: string;
    cards: TitleWithDescriptionObj[];
}

interface FourthSection {
    title: string;
    description: string;
    cards: ImgCardContent[];
    lawsCards: TitleWithDescriptionObj;
    mythsCards: MythCard;
    stepCards: StepCard;
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
    const mythCards = content.mythsCards.cards;
    const stepCards = content.stepCards.cards;
    const { isMobile } = usePageData();

    return (
        <section className="ai-safety-fourth-section">
            <div className="ai-safety-fourth-title-wrapper">
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

            <Carousel className="ai-safety-fourth-carousel-imgtopiccard">
                {content.cards.map((card, index) =>
                    <ImgTopicCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        list={card.list}
                        imgPath={paths.cards[index]}
                        className={`ai-safety-fourth-imgtopiccard-${index}`}
                    />
                )}
            </Carousel>

            <DSNotification
                content={content.lawsCards.description}
                backgroundColor="#FFFFFF"
                textColor="#474747"
                className="ai-safety-fourth-law-card"
            />

            <h3 className="ai-safety-fourth-topic-title">
                {content.mythsCards.title}
            </h3>
            <div className="ai-safety-fourth-myths-cards-wrapper">
                {isMobile ? (
                    <Carousel className="ai-safety-fourth-myths-cards-mobile">
                        {mythCards.map((card, index )=> 
                            <MythCards
                                key={card[0].title}
                                content={card}
                                className={`
                                    ai-safety-fourth-myths-${index}
                                    ai-safety-fourth-myths-cards
                                `}
                            />
                        )}
                    </Carousel>
                ) : (
                    <div className="ai-safety-fourth-myths-cards-wrapper">
                        {mythCards.map(card => 
                            <MythCards
                                key={card[0].title}
                                content={card}
                                className="ai-safety-fourth-myths-cards"
                            />
                        )}
                    </div>
                )}
            </div>

            <h3  className="ai-safety-fourth-topic-title">
                {content.stepCards.title}
            </h3>
            {isMobile ? (
                <Carousel className="ai-safety-fourth-stepcards-mobile">
                    {stepCards.map(card => 
                        <StepCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                        />
                    )}
                </Carousel>
            ) : (
                <div className="ai-safety-step-cards-wrapper">
                    {stepCards.map(card => 
                        <StepCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                        />
                    )}
                </div>
            )}
        </section>
    )
}

export default FourthSection;