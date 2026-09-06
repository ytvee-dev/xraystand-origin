import BackgroundedTitle from '@modules/physics/components/BackgroundedTitle';
import Carousel from '@modules/kazTarih/components/Carousel';
import * as paths from "@modules/aiSafety/locales/path.json";
import DSNotification from '@components/common/DSNotification';
import splitString from '@utils/splitString';
import { usePageData } from '@hooks/usePageData';
import './style.css';

interface TitleWithDescriptionObj {
    title: string;
    description: string;
}

interface LawsCard {
    title: string;
    description: string;
    subtitle: string;
    text: string;
}

interface FirstSection {
    title: string;
    description: string;
    topics: TitleWithDescriptionObj;
    cards: LawsCard[];
    warningCard: TitleWithDescriptionObj;
}

interface FirstSectionProps {
    content: FirstSection;
}

const LawCard = ({ title, description, subtitle, text, className }: LawsCard & { className?: string }) => {
    return (
        <div className={`ai-law-card ${className}`}>
            <h2 className="ai-law-card-title">{title}</h2>
            <p className="ai-law-card-description">{description}</p>
            <p className="ai-law-card-subtitle">{subtitle}</p>
            <p className="ai-law-card-text">{text}</p>
        </div>
    )
}

const FirstSection = ({content}: FirstSectionProps) => {
    const { isMobile } = usePageData();
    const topicCard = content.topics;
    const descriptionArr = splitString(topicCard.description);

    return (
        <section className="ai-safety-first-section">
            <img 
                src={paths.backgroundImages.digitalLaw} 
                alt="" 
                className="ai-safety-first-bg-img ai-safety-first-bg-law"
            />

            <div className="ai-safety-first-content">
                <div className="ai-safety-first-title-wrapper">
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

                <div className="ai-first-topic-card">
                    <h3>{topicCard.title}</h3>
                    <div className="ai-first-topic-card-content">
                        <div className="ai-first-topic-card-text-wrapper">
                            {descriptionArr.map(text => (
                                <p className="ai-first-topic-card-text" key={text}>{text}</p>
                            ))}
                        </div>
                        <img 
                            src={paths.blockImages[0]} 
                            alt="" 
                            className="ai-first-topic-card-img"
                        />
                    </div>
                </div>

                {isMobile ? (
                    <Carousel className="ai-first-law-cards-carousel">
                        {content.cards.map((card, index) => (
                            <LawCard
                                key={card.text}
                                title={card.title}
                                description={card.description}
                                subtitle={card.subtitle}
                                text={card.text}
                                className={`ai-first-law-card-${index}`}
                            />
                        ))}
                    </Carousel>
                ) : (
                    <div className="ai-first-law-cards-wrapper">
                        {content.cards.map(card => (
                            <LawCard
                                key={card.text}
                                title={card.title}
                                description={card.description}
                                subtitle={card.subtitle}
                                text={card.text}
                            />
                        ))}
                    </div>
                )}

                <div className="ai-safety-notifivation-wrapper">
                    <DSNotification
                        content={
                        <>
                            <h3 className="ai-security-notification-title">
                            {content.warningCard.title}
                            </h3>

                            <p className="ai-security-notification-description">
                            {content.warningCard.description}
                            </p>
                        </>
                        }
                        className="ai-security-notification"
                        fullWidth={true}
                        borderColor="rgba(255, 255, 255, 0.35)"
                        iconName="aiSecurityWarning"
                        iconColor="#4EA4DA"
                        backgroundColor="rgba(255, 255, 255, 0.55)"
                        borderRadius="20px"
                        iconWidth="87px"
                        iconHeight="82px"
                        imgPosition="flex-start"
                        cardGap="24px"
                        padding="24px 36px"
                    />
               </div>

                {/* <Carousel className="ai-safety-first-carousel-imgtopiccard">
                    {content.cards.map((card, index) =>
                        <ImgTopicCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            list={card.list}
                            imgPath={paths.cards[index]}
                            className={`ai-safety-first-imgtopiccard-${index}`}
                        />
                    )}
                </Carousel>

                <h2 className="ai-security-myths-title ai-safety-first-subtitles">
                    {content.mythsCards.title}
                </h2>
                <div className="ai-safety-first-myths-cards-wrapper">
                    {isMobile ? (
                        <Carousel className="ai-safety-first-myths-cards-mobile">
                            {mythCards.map((card, index )=> 
                                <MythCards
                                    key={card[0].title}
                                    content={card}
                                    className={`
                                        ai-safety-first-myths-${index}
                                        ai-safety-first-myths-cards
                                    `}
                                />
                            )}
                        </Carousel>
                    ) : (
                        <div className="ai-safety-first-myths-cards-wrapper">
                            {mythCards.map(card => 
                                <MythCards
                                    key={card[0].title}
                                    content={card}
                                    className="ai-safety-first-myths-cards"
                                />
                            )}
                        </div>
                    )}
                </div>

                <h2 className="ai-safety-first-topic-title ai-safety-first-subtitles">
                    {content.stepCards.title}
                </h2>
                {isMobile ? (
                    <Carousel className="ai-safety-first-step-cards-mobile">
                        {stepCards.map((card, index)=> 
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
                )} */}
            </div>
        </section>
    )
}

export default FirstSection;