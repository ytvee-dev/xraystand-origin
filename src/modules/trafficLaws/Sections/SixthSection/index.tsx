import {type ReactElement} from "react";
import type {TContentItem} from "../../types";
import ContentSection from "../../../../components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";
import * as paths from "../../locales/paths.json";

const SixthSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

    if (!translation.sixthSection) return null;

    return (
        <ContentSection textData={{
            title: translation.sixthSection["title"],
            colorScheme: {
                background: "#FFFFFF",
                text: "#289FF5",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.sixthSection["content"] as TContentItem[]}
                    imageIdData={paths.trafficLawsPage.sixthSection.contentListData}
                    isCardsClickable={true}
                    smallImageSizes={true}
                />
            </div>
        </ContentSection>
    );
};

export default SixthSection;
