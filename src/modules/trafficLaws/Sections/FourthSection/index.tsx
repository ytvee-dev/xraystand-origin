import {type ReactElement} from "react";
import type {TContentItem} from "../../../../utils/types/trafficLawsTypes";
import TwoColumnSection from "../../../../components/common/Sections/TwoColumnSection";
import LargeCard from "../../../../components/common/Cards/LargeCard";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import SquareImageViewer from "../../components/SquareImageViewer";
import {Languages} from "../../../../domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "../../../../store";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";

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
                <SquareImageViewer path={"/assets/images/trafficLawsPage/cyclistsScooters.avif"} width={564}/>
            }
        />
    );
};

export default FourthSection;
