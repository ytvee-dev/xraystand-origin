import {type ReactElement} from "react";
import type {TContentItem} from "@modules/trafficLaws/types";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import LargeCard from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@modules/trafficLaws/components/DefaultCardsListOL";
import SquareImageViewer from "@modules/trafficLaws/components/SquareImageViewer";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";
import * as paths from "@modules/trafficLaws/locales/paths.json";

const SeventhSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

    if (!translation.seventhSection) return null;

    return (
        <TwoColumnSection
            leftColumn={
                <SquareImageViewer path={"https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051930/pointsman_zlikq2.webp"} width={564}/>
            }
            rightColumn={
                <LargeCard
                    title={translation.seventhSection.title}
                    description={translation.seventhSection.description}
                    notificationLabel={translation.seventhSection.notificationLabel}
                >
                    <DefaultCardsListOL
                        content={translation.seventhSection["content"] as TContentItem[]}
                        imageIdData={paths.trafficLawsPage.seventhSection.contentListData}
                        isCardsClickable={true}
                        smallImageSizes={true}
                    />
                </LargeCard>
            }
        />
    );
};

export default SeventhSection;
