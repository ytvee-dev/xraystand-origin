import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import SquareImageViewer from "@components/common/Other/SquareImageViewer";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    type IPageResources,
    PageIds,
} from "@domains/Translate";

const SeventhSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as IPageResources;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.SEVENTH_SECTION) return null;

    return (
        <TwoColumnSection
            leftColumn={
                <SquareImageViewer path={"/assets/images/trafficLawsPage/pointsman.png"} width={564}/>
            }
            rightColumn={
                <LargeCard
                    title={translation.SEVENTH_SECTION.title}
                    description={translation.SEVENTH_SECTION.description}
                    notificationLabel={translation.SEVENTH_SECTION.notificationLabel}
                >
                    <DefaultCardsListOL
                        content={translation.SEVENTH_SECTION["content"] as TContentItem[]}
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
