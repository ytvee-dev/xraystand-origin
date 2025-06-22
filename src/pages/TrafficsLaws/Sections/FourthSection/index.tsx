import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import SquareImageViewer from "@components/common/Other/SquareImageViewer";
import usePageTranslation from "@hooks/usePageTranslation";
import {
    PageIds,
} from "@domains/Translate";

const FourthSection = (): ReactElement | null => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);

    return (
        <TwoColumnSection
            leftColumn={
                <LargeCard
                    title={textTranslation["fourthSection"].title}
                    description={textTranslation["fourthSection"].description}
                    notificationLabel={textTranslation["fourthSection"].notificationLabel}
                >
                    <DefaultCardsListOL content={textTranslation["fourthSection"]["content"] as TContentItem[]}/>
                </LargeCard>
            }
            rightColumn={
                <SquareImageViewer path={"/assets/images/trafficLawsPage/cyclistsScooters.png"} width={564}/>
            }
        />
    );
};

export default FourthSection;
