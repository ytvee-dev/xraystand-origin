import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import DSNotification from "@components/common/DSNotification";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    Languages,
    PageIds,
} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";

const FifthSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;
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
                <DSNotification label={translation.fifthSection.notificationLabel as string} />
            </div>
        </ContentSection>
    );
};

export default FifthSection;
