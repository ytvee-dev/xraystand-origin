import {type ReactElement} from "react";
import type {TContentItem} from "../../types";
import TwoColumnSection from "../../../../components/common/Sections/TwoColumnSection";
import LargeCard from "../../../../components/common/Cards/LargeCard";
import DefaultCardsListOL from "../../components/DefaultCardsListOL";
import SquareImageViewer from "../../components/SquareImageViewer";
import {useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";
import * as paths from "../../locales/paths.json";

const SeventhSection = (): ReactElement | null => {
    const translation = useLocaleContent(textContentRu, textContentKz);

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
