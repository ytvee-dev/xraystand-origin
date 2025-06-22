import {type ReactElement} from "react";
import ContentSection from "@components/common/Sections/ContentSection";
import AnimatedCarCard from "@components/trafficLaws/AnimatedCarCard";
import AnimatedLargeCard, {type IDescription} from "@components/trafficLaws/AnimatedLargeCard";
import usePageTranslation from "@hooks/usePageTranslation";
import {
    PageIds,
    type IPageSectionResources,
} from "@domains/Translate";
import AnimatedTrafficLight2 from "@components/trafficLaws/AnimatedTrafficLight2";

const SecondSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const secondSectionMeta: IPageSectionResources = textTranslation["secondSection"];
    const secondSectionDescription: IDescription = {
        subtitle: secondSectionMeta.subtitle!, content: secondSectionMeta.content! as string[]
    }
    return (
        <ContentSection>
            <div className="adaptive-content-container">
                <AnimatedLargeCard
                    title={textTranslation["secondSection"].title}
                    description={secondSectionDescription}
                    notificationLabel={textTranslation["secondSection"].notificationLabel}
                >
                    <AnimatedCarCard/>
                </AnimatedLargeCard>
                <AnimatedTrafficLight2/>
            </div>
        </ContentSection>
    );
};

export default SecondSection;
