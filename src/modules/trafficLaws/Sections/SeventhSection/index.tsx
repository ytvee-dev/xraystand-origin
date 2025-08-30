import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@modules/trafficLaws/components/DefaultCardsListOL";
import SquareImageViewer from "@modules/trafficLaws/components/SquareImageViewer";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {Languages, PageIds} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";
import { R2_BASE_URL } from "@utils/constants";

const SeventhSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.seventhSection) return null;

    return (
        <TwoColumnSection
            leftColumn={
                <SquareImageViewer
                    path={`${R2_BASE_URL}assets/images/trafficLawsPage/pointsman.avif`}
                    width={564}
                />
            }
            rightColumn={
                <LargeCard
                    title={translation.seventhSection.title}
                    description={translation.seventhSection.description}
                    notificationLabel={translation.seventhSection.notificationLabel}
                >
                    <DefaultCardsListOL
                        content={translation.seventhSection["content"] as TContentItem[]}
                        imageIdData={pageImageIdData?.seventhSection?.contentListData ?? []}
                        isCardsClickable={true}
                        smallImageSizes={true}
                    />
                </LargeCard>
            }
        />
    );
};

export default SeventhSection;
