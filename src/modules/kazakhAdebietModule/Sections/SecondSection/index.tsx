import {type ReactElement} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import LargeCard, {type ILargeCardColorScheme} from "@components/common/Cards/LargeCard";
import DefaultCardsListOL from "@components/common/Cards/DefaultCardsListOL";
import SquareImageViewer from "@components/common/Other/SquareImageViewer";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import * as content from "@modules/kazakhAdebietModule/locales/kaz.json";
import "./style.css";

const rightColumnColorScheme: ILargeCardColorScheme = {
    titleColor: "#EBCD91",
    subtitleColor: "#EBCD91",
    descriptionColor: "#EBCD91",
    notificationBackgroundColor: "lightSand",
    notificationTextColor: "black",
}

const SecondSection = (): ReactElement => {

    return (
        <section className="kza-second-section">
            <TwoColumnSection
                leftColumn={
                    <SquareImageViewer path={"assets/images/kazakhAdebiet/tree.png"} width={564}/>
                }
                rightColumn={
                    <LargeCard
                        title={content.secondSection.title}
                        description={content.secondSection.description}
                        notificationLabel={content.secondSection.notificationLabel}
                        colorScheme={rightColumnColorScheme}
                    >
                        <DefaultCardsListOL
                            content={content.secondSection["content"] as TContentItem[]}
                            backgroundCardsColor={"#EBCD91"}
                        />
                    </LargeCard>
                }
            />
        </section>
    );
};

export default SecondSection;



