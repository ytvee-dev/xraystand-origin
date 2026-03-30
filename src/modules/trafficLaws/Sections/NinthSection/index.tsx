import { type ReactElement } from "react";
import type { TContentItem } from "@modules/trafficLaws/types";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "@components/common/Other/DefaultCardsListOL";
import { useLocaleContent } from "@hooks/useLocale";
import { setModalContentName } from "@store/slices/TrafficLawsPage";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";
import * as paths from "@modules/trafficLaws/locales/paths.json";

const NinthSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

    if (!translation.ninthSection) return null;

    return (
        <ContentSection
            textData={{
                title: translation.ninthSection["title"],
                colorScheme: {
                    background: "#FFFFFF",
                    text: "#289FF5",
                },
            }}
        >
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={
                        translation.ninthSection["content"] as TContentItem[]
                    }
                    imageIdData={
                        paths.trafficLawsPage.ninthSection.contentListData
                    }
                    smallImageSizes={true}
                    setModalContentName={setModalContentName}
                />
            </div>
        </ContentSection>
    );
};

export default NinthSection;
