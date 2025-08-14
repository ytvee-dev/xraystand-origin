import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import DSNotification from "@components/common/DSNotification";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {Languages, PageIds, PageSectionIds} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";

const ThirdSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.thirdSection) return null;

    return (
        <ContentSection textData={{
            title: translation.thirdSection["title"],
            colorScheme: {
                background: "#289FF5",
                text: "#FFFFFF",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.thirdSection["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.thirdSection?.contentListData ?? []}
                />
            </div>
            <div className="content-section-alert-wrapper">
                <DSNotification label={translation[PageSectionIds.THIRD_SECTION].notificationLabel as string} />
            </div>
        </ContentSection>
    );
};

export default ThirdSection;
