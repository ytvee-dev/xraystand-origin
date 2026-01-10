import {type ReactElement} from "react";
import type {TContentItem} from "../../types";
import ContentSection from "../../../../components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import DSNotification from "../../../../components/common/DSNotification";
import {PageSectionIds} from "../../../../domains/Translate";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";
import * as paths from "../../locales/paths.json";

const ThirdSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

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
                    imageIdData={paths.trafficLawsPage.thirdSection.contentListData}
                />
            </div>
            <div className="content-section-alert-wrapper">
                <DSNotification label={translation[PageSectionIds.THIRD_SECTION].notificationLabel as string} />
            </div>
        </ContentSection>
    );
};

export default ThirdSection;
