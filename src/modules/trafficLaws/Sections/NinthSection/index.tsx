import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    type ITrafficLawsPageResources,
    PageIds,
} from "@domains/Translate";

const NinthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as ITrafficLawsPageResources;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.ninthSection) return null;

    return (
        <ContentSection textData={{
            title: translation.ninthSection["title"],
            colorScheme: {
                background: "#FFFFFF",
                text: "#289FF5",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.ninthSection["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.ninthSection?.contentListData ?? []}
                    smallImageSizes={true}
                />
            </div>
        </ContentSection>
    );
};

export default NinthSection;
