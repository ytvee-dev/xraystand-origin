import {type ReactElement} from "react";
import type {TContentItem} from "../../../../utils/types/trafficLawsTypes";
import ContentSection from "../../../../components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import DSNotification from "../../../../components/common/DSNotification";
import usePageImagesIds from "../../../../hooks/usePageImagesIds";
import {
    PageIds,
    PageSectionIds,
} from "../../../../domains/Translate";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";
import {useLocaleContent} from "@hooks/useLocale";

const FirstSection = (): ReactElement | null => {
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = useLocaleContent(textContentRu, textContentKz);

    return (
        <ContentSection textData={translation.firstSection}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation[PageSectionIds.FIRST_SECTION]["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.firstSection.contentListData}
                    backgroundCardsColor={"#289FF5"}
                />
            </div>
            <div className="content-section-alert-wrapper">
                <DSNotification label={translation[PageSectionIds.FIRST_SECTION].notificationLabel as string} />
            </div>
        </ContentSection>
    );
};

export default FirstSection;
