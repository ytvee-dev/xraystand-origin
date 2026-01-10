import {type ReactElement} from "react";
import type {TContentItem} from "../../types";
import ContentSection from "../../../../components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import DSNotification from "../../../../components/common/DSNotification";
import usePageImagesIds from "../../../../hooks/usePageImagesIds";
import {PageIds} from "../../../../domains/Translate";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";

const FifthSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);
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
