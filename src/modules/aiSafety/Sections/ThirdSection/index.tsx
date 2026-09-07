import React, { type ReactElement } from "react";
import { usePageData } from "@hooks/usePageData";
import * as paths from "../../locales/path.json";
import TopicBlock from "@modules/aiSafety/components/TopicBlock";
import DSNotification from "@components/common/DSNotification";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import MythCards from "@modules/safetyInNature/components/MythCards";
import Carousel from "@modules/kazTarih/components/Carousel";
import '../../../aiProfession/Sections/components/glass.css';
import "./style.css";

interface TopicListItem {
    highlightedText: string;
    text: string;
}

interface Topic {
    title: string;
    description: string;
    listDescription: string;
    list: TopicListItem[];

    lawsCard: {
        title: string;
        description: string;
    };
}

interface MythCardItem {
    title: string;
    description: string;
}

interface MythsCard {
    title: string;
    card: MythCardItem[][];
}

interface ThirdSectionContent {
    title: string;
    description: string;
    topics: Topic[];
    mythsCard: MythsCard;
}

interface ThirdSectionProps {
    textContent: ThirdSectionContent;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ textContent }): ReactElement => {
    const section = textContent;

    const { screenWidth } = usePageData();

    const isMobile = screenWidth <= 650;

    return (
        <section className="ai-security-third-section  ai-safety-section">
            <img className="ai-security-third-section-image" src={paths.backgroundImages.privacySecurity} alt="AI Security" />
            <BackgroundedTitle
                title={section.title}
                description={section.description}
                bgColor="rgb(255, 255, 255)"
                titleFontWeight="700"
                fullWidth={true}
                descriptionSize="normal"
                className="ai-security-section-title"
            />

            <TopicBlock
                title={section.topics[0].title}
                description={section.topics[0].description}
                listDescription={section.topics[0].listDescription}
                list={section.topics[0].list}
                image={paths.blockImages[4]}
                imagePosition="right"
            />

            <DSNotification
                content={
                    <>
                        <h3 className="ai-security-notification-title">
                            {section.topics[0].lawsCard.title}
                        </h3>

                        <p className="ai-security-notification-description">
                            {section.topics[0].lawsCard.description}
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
            <TopicBlock
                title={section.topics[1].title}
                description={section.topics[1].description}
                listDescription={section.topics[1].listDescription}
                list={section.topics[1].list}
                image={paths.blockImages[5]}
                imagePosition="left"
            />

            <DSNotification
                content={
                    <>
                        <h3 className="ai-security-notification-title">
                            {section.topics[1].lawsCard.title}
                        </h3>

                        <p className="ai-security-notification-description">
                            {section.topics[1].lawsCard.description}
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

            <div className="ai-security-myths">
                <h2 className="ai-security-myths-title">
                    {section.mythsCard.title}
                </h2>

                <div className="ai-security-myths-cards">
                    {isMobile ? (
                        <Carousel className="ai-security-myths-carousel">
                            {section.mythsCard.card.map((card, index) => (
                                <MythCards
                                    key={index}
                                    content={card}
                                />
                            ))}
                        </Carousel>
                    ) : (
                        section.mythsCard.card.map((card, index) => (
                            <MythCards
                                key={index}
                                content={card}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;