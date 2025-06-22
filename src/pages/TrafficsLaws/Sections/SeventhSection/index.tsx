import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import SquareImageViewer from "@components/common/Other/SquareImageViewer";
import usePageTranslation from "@hooks/usePageTranslation";
import usePageImagesIds from "@hooks/usePageImagesIds";
import {
    PageIds,
} from "@domains/Translate";

const SeventhSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const {pageImageIdData} = usePageImagesIds(PageIds.TRAFFIC_LAWS_PAGE);

    return (
        <TwoColumnSection
            leftColumn={
                <SquareImageViewer path={"/assets/images/trafficLawsPage/pointsman.png"} width={564}/>
            }
            rightColumn={
                <LargeCard
                    title={textTranslation["seventhSection"].title}
                    description={textTranslation["seventhSection"].description}
                    notificationLabel={textTranslation["seventhSection"].notificationLabel}
                >
                    <DefaultCardsListOL
                        content={textTranslation["seventhSection"]["content"] as TContentItem[]}
                        imageIdData={pageImageIdData.seventhSection.contentListData}
                        isCardsClickable={true}
                        smallImageSizes={true}
                    />
                </LargeCard>
            }
        />
    );
};

export default SeventhSection;
