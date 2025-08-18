import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "@modules/trafficLaws/components/DefaultCardsListOL";
import DSNotification from "@components/common/DSNotification";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    Languages,
    PageIds,
    PageSectionIds,
} from "@domains/Translate";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";

const FirstSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;

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
