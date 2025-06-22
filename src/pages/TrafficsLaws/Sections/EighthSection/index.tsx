import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/ContentSection";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    PageIds,
} from "@domains/Translate";

const EighthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    return (
        <ContentSection textData={{
            title: textTranslation["eighthSection"]["title"],
            colorScheme: {
                background: "#289FF5",
                text: "#FFFFFF",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={textTranslation["eighthSection"]["content"] as TContentItem[]}
                    imageIdData={pageImageIdData.eighthSection.contentListData}
                />
            </div>
        </ContentSection>
    );
};

export default EighthSection;
