import {type ReactElement} from "react";
import ContentSection from "@components/common/Sections/ContentSection";
import AnimatedCarCard from "@components/trafficLaws/AnimatedCarCard";
import AnimatedLargeCard, {type IDescription} from "@components/trafficLaws/AnimatedLargeCard";
import usePageTranslation from "@hooks/usePageTranslation";
import {
    PageIds,
    type IPageSectionResources, type IPageResources, PageSectionIds,
} from "@domains/Translate";
import AnimatedTrafficLight from "@components/trafficLaws/AnimatedTrafficLight";

const SecondSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as IPageResources;
    const secondSectionMeta: IPageSectionResources = translation[PageSectionIds.SECOND_SECTION];
    const secondSectionDescription: IDescription = {
        subtitle: secondSectionMeta.subtitle!, content: secondSectionMeta.content! as string[]
    }
    return (
        <ContentSection>
            <div className="adaptive-content-container">
                <AnimatedLargeCard
                    title={translation[PageSectionIds.SECOND_SECTION].title}
                    description={secondSectionDescription}
                    notificationLabel={translation[PageSectionIds.SECOND_SECTION].notificationLabel}
                >
                    <AnimatedCarCard/>
                </AnimatedLargeCard>
                <AnimatedTrafficLight/>
            </div>
        </ContentSection>
    );
};

export default SecondSection;
