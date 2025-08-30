import {type ReactElement} from "react";
import type {TContentItem} from "../../../../utils/types/trafficLawsTypes";
import ContentSection from "../../../../components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import usePageImagesIds from "../../../../hooks/usePageImagesIds";
import {
    Languages,
    PageIds,
} from "../../../../domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "../../../../store";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";

const EighthSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.eighthSection) return null;

    return (
        <ContentSection textData={{
            title: translation.eighthSection["title"],
            colorScheme: {
                background: "#289FF5",
                text: "#FFFFFF",
            }
        }}>
            <div className={"background-cards-container"}>
                <DefaultCardsListOL
                    content={translation.eighthSection["content"] as TContentItem[]}
                    imageIdData={pageImageIdData?.eighthSection?.contentListData ?? []}
                />
            </div>
        </ContentSection>
    );
};

export default EighthSection;
