import {type ReactElement} from "react";
import type {TContentItem} from "../../types";
import TwoColumnSection from "../../../../components/common/Sections/TwoColumnSection";
import LargeCard from "../../../../components/common/Cards/LargeCard";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import SquareImageViewer from "../../components/SquareImageViewer";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";

const FourthSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

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
