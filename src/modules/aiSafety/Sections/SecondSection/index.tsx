import React, { type ReactElement } from "react";
import * as paths from "../../locales/path.json";
import TopicBlock from "@modules/aiSafety/components/TopicBlock";
import DSNotification from "@components/common/DSNotification";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import "./style.css";

type TopicListItem = {
  highlightedText: string;
  text: string;
};

type Topic = {
  title: string;
  description: string;
  listDescription: string;
  list: TopicListItem[];
  lawsCard: {
    title: string;
    description: string;
  };
};

type SecondSectionContent = {
  title: string;
  description: string;
  topics: Topic[];
};

type SecondSectionProps = {
  textContent: SecondSectionContent;
};

const SecondSection: React.FC<SecondSectionProps> = ({ textContent }): ReactElement => {
  const section = textContent;

  return (
    <section className="ai-security-second-section">
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
        image={paths.blockImages[1]}
        imagePosition="left"
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
        iconWidth="87px"
        iconHeight="82px"
        imgPosition="flex-start"
        cardGap="24px"
        padding="24px 36px"
      />

      <TopicBlock
        title={section.topics[1].title}
        description={section.topics[1].description}
        listDescription={section.topics[1].listDescription}
        list={section.topics[1].list}
        image={paths.blockImages[2]}
        imagePosition="right"
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
        iconWidth="87px"
        iconHeight="82px"
        imgPosition="flex-start"
        cardGap="24px"
        padding="24px 36px"
      />

      <TopicBlock
        title={section.topics[2].title}
        description={section.topics[2].description}
        listDescription={section.topics[2].listDescription}
        list={section.topics[2].list}
        image={paths.blockImages[3]}
        imagePosition="left"
      />
    </section>
  );
};

export default SecondSection;