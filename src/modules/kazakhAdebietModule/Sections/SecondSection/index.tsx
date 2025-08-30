import {type ReactElement} from "react";
import SquareImageViewer from "@modules/trafficLaws/components/SquareImageViewer";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import DSContentBlock, {type DSContentBlockColorScheme} from "@components/common/DSContentBlock";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import DSInformationCard from "@components/common/Cards/DSInformationCard";
import * as content from "@modules/kazakhAdebietModule/locales/kaz.json";
import "./style.css";
import getImageUrl from "@utils/getImageUrl.ts";

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
                    <SquareImageViewer path={getImageUrl('kazakhAdebeit/tree')} width={564}/>
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



