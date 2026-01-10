import {type ReactElement} from "react";
import SquareImageViewer from "../../../trafficLaws/components/SquareImageViewer";
import TwoColumnSection from "../../../../components/common/Sections/TwoColumnSection";
import DSContentBlock, {type DSContentBlockColorScheme} from "../../../../components/common/DSContentBlock";
import DSCardsWrapper from "../../../../components/common/Wrappers/DSCadsWrapper";
import DSInformationCard from "../../../../components/common/Cards/DSInformationCard";
import * as content from "../../locales/kaz.json";
import * as paths from "../../locales/paths.json";
import "./style.css";

const rightColumnColorScheme: DSContentBlockColorScheme = {
    titleColor: "#EBCD91",
    subtitleColor: "#EBCD91",
    descriptionColor: "#EBCD91",
    notificationBackgroundColor: "#EBCD91",
    notificationTextColor: "black",
}

const SecondSection = (): ReactElement => {

    return (
        <section className="kza-second-section">
            <TwoColumnSection
                leftColumn={
                    <SquareImageViewer path={paths.tree} width={564}/>
                }
                rightColumn={
                    <DSContentBlock
                        title={content.secondSection.title}
                        description={content.secondSection.description}
                        notificationLabel={content.secondSection.notificationLabel}
                        colorScheme={rightColumnColorScheme}
                    >
                        <DSCardsWrapper>
                            {content.secondSection["content"].map((item, indx) => (
                                <DSInformationCard
                                    key={indx}
                                    title={item.title}
                                    liOptions={item.pointsTextList}
                                    sxText={{
                                        titleColor: "rgba(0,0,0,0.87)",
                                        labelColor: "rgba(0,0,0,0.6)",
                                        imgObjectFit: "none",
                                        imgPadding: "0",
                                        fontWeight: 500,
                                        titleFontSize: "20px",
                                        labelFontSize: "16px",
                                    }}
                                    sxContent={{
                                        minWidth: "270px",
                                        maxWidth: "270px",
                                        listPadding: 17,
                                    }}
                                    backgroundColor={"#EBCD91"}
                                />
                            ))}
                        </DSCardsWrapper>
                    </DSContentBlock>
                }
            />
        </section>
    );
};

export default SecondSection;



