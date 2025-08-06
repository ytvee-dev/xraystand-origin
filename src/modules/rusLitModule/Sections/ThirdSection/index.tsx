import {type ReactElement} from "react";
import ContentSection from "@components/common/Sections/DSContentSection";
import DSNotification from "@components/common/DSNotification";
import DSCard from "@components/common/Cards/DSCard";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";

import * as content from "@modules/rusLitModule/locales/rus.json";
import * as paths from "@modules/rusLitModule/locales/paths.json";
import "./style.css";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import DSContentBlock from "@components/common/DSContentBlock";
import SquareImageViewer from "@components/common/Other/SquareImageViewer";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import DSInforamtionCard from "@components/common/Cards/DSInformationCard";

const notificationColorScheme = {
    titleColor: "#FEFCF3",
    subtitleColor: "#FEFCF3",
    descriptionColor: "#FEFCF3",
    notificationBackgroundColor: "#FFE9E9",
    notificationTextColor: "black",
    notificationIconColor: "#871A16",
}

const SecondSection = (): ReactElement => {
    const imagePrefix = "./public/assets/images/";
    const screenWidth = useScreenWidth();

    return (
        <section className="ruslit-third-section">
            <TwoColumnSection
                leftColumn={
                    <DSContentBlock
                        title={content.sixthSection.title}
                        description={content.sixthSection.description}
                        notificationLabel={content.sixthSection.notificationLabel}
                        colorScheme={notificationColorScheme}
                    >
                        <DSInforamtionCard
                            title={content.sixthSection.content[0].title}
                            liOptions={content.sixthSection.content[0].pointsTextList}
                            backgroundColor={"#FEFCF3"}
                            sxText={{
                                titleFontSize: "20px",
                                titleColor: "rgba(0,0,0,1)",
                                labelFontSize: "16px",
                                labelColor: "rgba(0,0,0,0.6)",
                            }}
                        />
                    </DSContentBlock>
                }
                rightColumn={
                    <SquareImageViewer
                        path={imagePrefix + paths.images.genres}
                        width={575}
                        height={575}
                        objectFit="cover"
                        imagePadding={screenWidth > 800 ? 0 : "20px"}
                    />
                }
            />
        </section>
    );
};

export default SecondSection;
