import {type ReactElement} from "react";
import ContentSection from "@components/common/Sections/DSContentSection";
import AnimatedCarCard from "../../components/AnimatedCarCard";
import AnimatedLargeCard, {type IDescription} from "../../components/AnimatedLargeCard";
import {type IPageSectionResources, PageSectionIds} from "@domains/Translate";
import AnimatedTrafficLight from "../../components/AnimatedTrafficLight";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";
import {useLocaleContent} from "@hooks/useLocale";

const SecondSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);
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
