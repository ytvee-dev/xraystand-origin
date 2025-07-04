import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import SquareImageViewer from "@components/common/Other/SquareImageViewer";
import usePageTranslation from "@hooks/usePageTranslation";
import {
    type IPageResources,
    PageIds,
} from "@domains/Translate";

const FourthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as IPageResources;

    if (!translation.FOURTH_SECTION) return null;

    return (
        <TwoColumnSection
            leftColumn={
                <LargeCard
                    title={translation.FOURTH_SECTION.title}
                    description={translation.FOURTH_SECTION.description}
                    notificationLabel={translation.FOURTH_SECTION.notificationLabel}
                >
                    <DefaultCardsListOL content={translation.FOURTH_SECTION["content"] as TContentItem[]}/>
                </LargeCard>
            }
            rightColumn={
                <SquareImageViewer path={"/assets/images/trafficLawsPage/cyclistsScooters.png"} width={564}/>
            }
        />
    );
};

export default FourthSection;
