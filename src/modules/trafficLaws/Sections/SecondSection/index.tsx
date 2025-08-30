import {type ReactElement} from "react";
import ContentSection from "../../../../components/common/Sections/DSContentSection";
import AnimatedCarCard from "../../components/AnimatedCarCard";
import AnimatedLargeCard, {type IDescription} from "../../components/AnimatedLargeCard";
import {type IPageSectionResources, PageSectionIds, Languages} from "../../../../domains/Translate";
import AnimatedTrafficLight from "../../components/AnimatedTrafficLight";
import {useSelector} from "react-redux";
import type {TRootState} from "../../../../store";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";

const SecondSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;
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
