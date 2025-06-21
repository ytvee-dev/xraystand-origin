import { type ReactElement } from "react";
import DefaultLayout from "@layout/Default";
import ContentSection from "@components/ContentSection";
import usePageTranslation from "@hooks/usePageTranslation";
import ContentCardsList from "@components/ContentCardsList";
import ContentSectionAlert from "@components/ContentSectionAlert";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    PageIds,
    PageSectionIds,
    type IImageCardResources, type IPageSectionResources,
} from "@domains/Translate";
import "./style.css";
import CoverSection from "@components/trafficLaws/CoverSection";
import AnimatedCarCard from "@components/trafficLaws/AnimatedCarCard";
import AnimatedLargeCard, {type IDescription} from "@components/trafficLaws/AnimatedLargeCard";
import AnimatedTrafficLight from "@components/trafficLaws/AnimatedTrafficLight";

const TrafficsLawsPage = (): ReactElement => {
    const { textTranslation } = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const { pageImageIdData } = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    const alertText: string = textTranslation[PageSectionIds.FIRST_SECTION].notificationLabel || "";
    const secondSectionMeta: IPageSectionResources = textTranslation["secondSection"];
    const secondSectionDescription: IDescription = {
        subtitle: secondSectionMeta.subtitle!, content: secondSectionMeta.content! as string[]
    }

    return (
        <DefaultLayout>
            <main className="traffics-laws-page">
                <CoverSection/>
                <ContentSection textData={textTranslation["firstSection"]}>
                    <div className={"background-cards-container"}>
                        <ContentCardsList
                            cardsTextData={textTranslation["firstSection"]["content"] as IImageCardResources[]}
                            imageIdData={pageImageIdData.firstSection.contentListData}
                        />
                    </div>
                    <div className="content-section-alert-wrapper">
                        <ContentSectionAlert label={alertText}/>
                    </div>
                </ContentSection>
                <ContentSection>
                    <div className="adaptive-content-container">
                        <AnimatedLargeCard
                            title={textTranslation["secondSection"].title}
                            description={secondSectionDescription}
                            notificationLabel={textTranslation["secondSection"].notificationLabel}
                        >
                            <AnimatedCarCard />
                        </AnimatedLargeCard>
                        <AnimatedTrafficLight />
                    </div>
                </ContentSection>
            </main>
        </DefaultLayout>
    );
};

export default TrafficsLawsPage;
