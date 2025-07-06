import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/ContentSection";
import ContentSectionAlert from "@components/common/Other/ContentSectionAlert";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    type ITrafficLawsPageResources,
    PageIds,
    PageSectionIds,
} from "@domains/Translate";

const FirstSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as ITrafficLawsPageResources;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    return (
        <ContentSection textData={translation.FIRST_SECTION}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation[PageSectionIds.FIRST_SECTION]["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.firstSection.contentListData}
                    backgroundCardsColor={"#289FF5"}
                />
            </div>
            <div className="content-section-alert-wrapper">
                <ContentSectionAlert label={translation[PageSectionIds.FIRST_SECTION].notificationLabel as string}/>
            </div>
        </ContentSection>
    );
};

export default FirstSection;
