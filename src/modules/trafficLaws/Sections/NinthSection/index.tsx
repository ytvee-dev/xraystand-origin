import {type ReactElement} from "react";
import type {TContentItem} from "../../types";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";
import * as paths from "../../locales/paths.json";

const NinthSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

    if (!translation.ninthSection) return null;

    return (
        <ContentSection textData={{
            title: translation.ninthSection["title"],
            colorScheme: {
                background: "#FFFFFF",
                text: "#289FF5",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.ninthSection["content"] as TContentItem[]}
                    imageIdData={paths.trafficLawsPage.ninthSection.contentListData}
                    smallImageSizes={true}
                />
            </div>
        </ContentSection>
    );
};

export default NinthSection;
