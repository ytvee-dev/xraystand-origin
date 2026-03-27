import DSContentBlock, {
    type DSContentBlockColorScheme,
} from "@components/common/DSContentBlock";
import * as content from "@modules/kazakhAdebietModule/locales/kaz.json";
import * as paths from "@modules/kazakhAdebietModule/locales/paths.json";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import DefaultCardsListOL from "@components/common/Other/DefaultCardsListOL";
import SquareImageViewer from "@modules/trafficLaws/components/SquareImageViewer";
import { setModalContentName } from "@store/slices/KazakhAdebietPage";
import type { TContentItem } from "@modules/trafficLaws/types";
import { type ReactElement } from "react";
import "./style.css";

const rightColumnColorScheme: DSContentBlockColorScheme = {
    titleColor: "#EBCD91",
    subtitleColor: "#EBCD91",
    descriptionColor: "#EBCD91",
    notificationBackgroundColor: "#EBCD91",
    notificationTextColor: "black",
};

const SecondSection = (): ReactElement => {
    return (
        <section className="kza-second-section">
            <TwoColumnSection
                leftColumn={<SquareImageViewer path={paths.tree} width={564} />}
                rightColumn={
                    <DSContentBlock
                        title={content.secondSection.title}
                        description={content.secondSection.description}
                        notificationLabel={
                            content.secondSection.notificationLabel
                        }
                        colorScheme={rightColumnColorScheme}
                    >
                        <DefaultCardsListOL
                            content={
                                content.secondSection.content as TContentItem[]
                            }
                            isCardsClickable={true}
                            smallImageSizes={false}
                            setModalContentName={setModalContentName}
                        />
                    </DSContentBlock>
                }
            />
        </section>
    );
};

export default SecondSection;
