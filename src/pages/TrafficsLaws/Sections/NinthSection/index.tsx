import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/ContentSection";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    PageIds,
} from "@domains/Translate";

const NinthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    return (
        <ContentSection textData={{
            title: textTranslation["ninthSection"]["title"],
            colorScheme: {
                background: "#FFFFFF",
                text: "#289FF5",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={textTranslation["ninthSection"]["content"] as TContentItem[]}
                    imageIdData={pageImageIdData.ninthSection.contentListData}
                    smallImageSizes={true}
                />
            </div>
        </ContentSection>
    );
};

export default NinthSection;
