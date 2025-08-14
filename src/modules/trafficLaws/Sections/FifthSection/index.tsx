import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/DSContentSection";
import ContentSectionAlert from "@components/common/Other/ContentSectionAlert";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    type ITrafficLawsPageResources,
    PageIds,
} from "@domains/Translate";

const FifthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as ITrafficLawsPageResources;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.fifthSection) return null;

    return (
        <ContentSection textData={{
            title: translation.fifthSection["title"],
            description: translation.fifthSection["description"],
            colorScheme: {
                background: "#FFFFFF",
                text: "#289FF5",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.fifthSection["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.fifthSection?.contentListData ?? []}
                />
            </div>
            <div className="content-section-alert-wrapper">
                <ContentSectionAlert label={translation.fifthSection.notificationLabel as string}/>
            </div>
        </ContentSection>
    );
};

export default FifthSection;
