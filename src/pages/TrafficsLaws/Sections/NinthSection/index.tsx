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

const NinthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as IPageResources;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.NINTH_SECTION) return null;

    return (
        <ContentSection textData={{
            title: translation.NINTH_SECTION["title"],
            colorScheme: {
                background: "#FFFFFF",
                text: "#289FF5",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.NINTH_SECTION["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.ninthSection?.contentListData ?? []}
                    smallImageSizes={true}
                />
            </div>
        </ContentSection>
    );
};

export default NinthSection;
