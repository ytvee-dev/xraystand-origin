import BackgroundedTitle from '@modules/physics/components/BackgroundedTitle';
import { type ImgCardList } from '@modules/aiSafety/components/ImgTopicCard';
import Carousel from "@components/common/Carousel";
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

const StepCard = ({ 
    title,
    description,
    className
}: TitleWithDescriptionObj & { className?: string }) => {
    return (
        <div className={`ai-step-card ${className}`}>
            <p className="ai-step-card-title">{title}</p>
            <p className="ai-step-card-description">{description}</p>
        </div>
    )
}

const FourthSection = ({ content }: FourthSectionProps) => {
    const mythCards = content.mythsCards.cards;
    const stepCards = content.stepCards.cards;
    const { isMobile } = usePageData();

    return (
        <section className="ai-safety-fourth-section ai-safety-section">
            <img 
                src={paths.backgroundImages.dataProcessing} 
                alt="" 
                className="ai-safety-fourth-bg-img ai-safety-fourth-bg-processing"
            />
            <img
                src={paths.backgroundImages.digitalFootprint}
                alt=""
                className="ai-safety-fourth-bg-img ai-safety-fourth-bg-footprint"
            />

            <div className="ai-safety-fourth-content">
                <div className="ai-safety-fourth-title-wrapper">
                    <BackgroundedTitle
                        title={content.title}
                        description={content.description}
                        bgColor="#FFFFFF"
                        titleFontWeight="700"
                        fullWidth
                        descriptionSize="large"
                        className="ai-security-section-title"
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

                <div className="ai-safety-notifivation-wrapper">
                    <DSNotification
                        content={
                            <>
                                <h3 className="ai-security-notification-title">
                                    {content.lawsCards.title}
                                </h3>

                                <p className="ai-security-notification-description">
                                    {content.lawsCards.description}
                                </p>
                            </>
                        }
                        className="ai-security-notification"
                        fullWidth={true}
                        borderColor="rgba(255, 255, 255, 0.35)"
                        iconName="aiSecurityScales"
                        iconColor="#4EA4DA"
                        backgroundColor="rgba(255, 255, 255, 0.55)"
                        borderRadius="20px"
                        iconWidth={isMobile ? "95px" : "137px"}
                        iconHeight={isMobile ? "97px" : "140px"}
                        imgPosition={isMobile ? "flex-start" : "center"}
                        cardGap="24px"
                        padding="24px 36px"
                    />
                </div>

                <h2 className="ai-security-myths-title ai-safety-fourth-subtitles">
                    {content.mythsCards.title}
                </h2>
                <div className="ai-safety-fourth-myths-cards-wrapper">
                    {isMobile ? (
                        <Carousel className="ai-safety-fourth-myths-cards-mobile">
                            {mythCards.map((card, index) =>
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

                <h2 className="ai-safety-fourth-topic-title ai-safety-fourth-subtitles">
                    {content.stepCards.title}
                </h2>
                {isMobile ? (
                    <Carousel className="ai-safety-fourth-step-cards-mobile">
                        {stepCards.map((card, index) =>
                            <StepCard
                                key={card.title}
                                title={card.title}
                                description={card.description}
                                className={`ai-safety-step-card-${index}`}
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
            </div>
        </section>
    )
}

export default FourthSection;