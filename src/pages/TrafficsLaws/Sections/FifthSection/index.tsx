import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/ContentSection";
import ContentSectionAlert from "@components/common/Other/ContentSectionAlert";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    type IPageResources,
    PageIds,
} from "@domains/Translate";

const FifthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as IPageResources;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.FIFTH_SECTION) return null;

    return (
        <ContentSection textData={{
            title: translation.FIFTH_SECTION["title"],
            description: translation.FIFTH_SECTION["description"],
            colorScheme: {
                background: "#FFFFFF",
                text: "#289FF5",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.FIFTH_SECTION["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.fifthSection?.contentListData ?? []}
                />
            </div>
            <div className="content-section-alert-wrapper">
                <ContentSectionAlert label={translation.THIRD_SECTION.notificationLabel as string}/>
            </div>
        </ContentSection>
    );
};

export default FifthSection;
