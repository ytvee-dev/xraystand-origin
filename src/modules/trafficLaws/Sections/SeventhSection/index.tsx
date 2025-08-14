import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import SquareImageViewer from "@components/common/Other/SquareImageViewer";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    type ITrafficLawsPageResources,
    PageIds,
} from "@domains/Translate";

const SeventhSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as ITrafficLawsPageResources;
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    if (!translation.seventhSection) return null;

    return (
        <TwoColumnSection
            leftColumn={
                <SquareImageViewer path={"/assets/images/trafficLawsPage/pointsman.png"} width={564}/>
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
