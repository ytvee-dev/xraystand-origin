import {type ReactElement} from "react";
import type {TContentItem} from "../../../../utils/types/trafficLawsTypes";
import ContentSection from "../../../../components/common/Sections/DSContentSection";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import usePageImagesIds from "../../../../hooks/usePageImagesIds";
import {Languages, PageIds} from "../../../../domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "../../../../store";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";

const SixthSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

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
                    imageIdData={pageImageIdData?.sixthSection?.contentListData ?? []}
                    isCardsClickable={true}
                    smallImageSizes={true}
                />
            </div>
        </ContentSection>
    );
};

export default SixthSection;
