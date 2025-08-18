import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import ContentSection from "@components/common/Sections/DSContentSection";
import DefaultCardsListOL from "@modules/trafficLaws/components/DefaultCardsListOL";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    Languages,
    PageIds,
} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";

const NinthSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

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
                    imageIdData={pageImageIdData?.ninthSection?.contentListData ?? []}
                    smallImageSizes={true}
                />
            </div>
        </ContentSection>
    );
};

export default NinthSection;
