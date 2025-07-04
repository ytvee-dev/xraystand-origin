import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/ContentSection";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    type IPageResources,
    PageIds,
} from "@domains/Translate";

const EighthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as IPageResources;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.EIGHTH_SECTION) return null;

    return (
        <ContentSection textData={{
            title: translation.EIGHTH_SECTION["title"],
            colorScheme: {
                background: "#289FF5",
                text: "#FFFFFF",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.EIGHTH_SECTION["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.eighthSection?.contentListData ?? []}
                />
            </div>
        </ContentSection>
    );
};

export default EighthSection;
