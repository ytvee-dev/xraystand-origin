import {type ReactElement} from "react";
import type {TContentItem} from "../../types";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import DSNotification from "@components/common/DSNotification";
import {
    PageSectionIds,
} from "../../../../domains/Translate";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";
import * as paths from "../../locales/paths.json";
import {useLocaleContent} from "@hooks/useLocale";

const FirstSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

    return (
        <ContentSection textData={translation.firstSection}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation[PageSectionIds.FIRST_SECTION]["content"] as TContentItem[]}
                    imageIdData={paths.trafficLawsPage.firstSection.contentListData}
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
