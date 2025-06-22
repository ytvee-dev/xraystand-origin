import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/ContentSection";
import ContentSectionAlert from "@components/common/Other/ContentSectionAlert";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    PageIds,
} from "@domains/Translate";

const ThirdSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    return (
        <ContentSection textData={{
            title: textTranslation["thirdSection"]["title"],
            colorScheme: {
                background: "#289FF5",
                text: "#FFFFFF",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={textTranslation["thirdSection"]["content"] as TContentItem[]}
                    imageIdData={pageImageIdData.thirdSection.contentListData}
                />
            </div>
            <div className="content-section-alert-wrapper">
                <ContentSectionAlert label={textTranslation["thirdSection"].notificationLabel as string}/>
            </div>
        </ContentSection>
    );
};

export default ThirdSection;
