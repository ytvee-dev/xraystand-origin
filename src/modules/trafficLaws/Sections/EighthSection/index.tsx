import { type ReactElement } from "react";
import type { TContentItem } from "@modules/trafficLaws/types";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "@components/common/Other/DefaultCardsListOL";
import { setModalContentName } from "@store/slices/TrafficLawsPage";
import { useLocaleContent } from "@hooks/useLocale";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";
import * as paths from "@modules/trafficLaws/locales/paths.json";

const EighthSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

    if (!translation.eighthSection) return null;

    return (
        <ContentSection
            textData={{
                title: translation.eighthSection["title"],
                colorScheme: {
                    background: "#289FF5",
                    text: "#FFFFFF",
                },
            }}
        >
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={
                        translation.eighthSection["content"] as TContentItem[]
                    }
                    imageIdData={
                        paths.trafficLawsPage.eighthSection.contentListData
                    }
                    setModalContentName={setModalContentName}
                />
            </div>
        </ContentSection>
    );
};

export default EighthSection;
