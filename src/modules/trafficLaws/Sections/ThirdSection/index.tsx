import {type ReactElement} from "react";
import type {TContentItem} from "../../../../utils/types/trafficLawsTypes";
import ContentSection from "../../../../components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import DSNotification from "../../../../components/common/DSNotification";
import usePageImagesIds from "../../../../hooks/usePageImagesIds";
import {PageIds, PageSectionIds} from "../../../../domains/Translate";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";

const ThirdSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);
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
