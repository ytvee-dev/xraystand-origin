import {type ReactElement} from "react";
import type {TContentItem} from "@modules/trafficLaws/types";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@modules/trafficLaws/components/DefaultCardsListOL";
import SquareImageViewer from "@modules/trafficLaws/components/SquareImageViewer";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";

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
                <SquareImageViewer path={"https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051920/cyclistsScooters_w9fulf.webp"} width={564}/>
            }
        />
    );
};

export default FourthSection;
