import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@modules/trafficLaws/components/DefaultCardsListOL";
import SquareImageViewer from "@modules/trafficLaws/components/SquareImageViewer";
import {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";

const FourthSection = (): ReactElement | null => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;

    if (!translation.fourthSection) return null;

    return (
        <TwoColumnSection
            leftColumn={
                <LargeCard
                    title={translation.fourthSection.title}
                    description={translation.fourthSection.description}
                    notificationLabel={translation.fourthSection.notificationLabel}
                >
                    <DefaultCardsListOL content={translation.fourthSection["content"] as TContentItem[]}/>
                </LargeCard>
            }
            rightColumn={
                <SquareImageViewer path={"/assets/images/trafficLawsPage/cyclistsScooters.png"} width={564}/>
            }
        />
    );
};

export default FourthSection;
