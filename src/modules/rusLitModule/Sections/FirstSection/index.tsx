import {type ReactElement} from "react";
import ContentSection from "@components/common/Sections/DSContentSection";
import DSCard from "@components/common/Cards/DSCard";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import DSNotification from "@components/common/DSNotification";
import {usePageData} from "@hooks/usePageData";

import * as content from "../../locales/rus.json";
import * as paths from "../../locales/paths.json";

import "./style.css";

const FirstSection = (): ReactElement => {
    const { screenWidth } = usePageData();

    return (
        <section className="ruslit-first-section">
            <ContentSection textData={content.firstSection}>
                <div className="ruslit-content-container">
                    <DSCardsWrapper
                        screenMaxWidth={1000}
                        cardsGap="24px"
                        wrapperMaxWidth={1200}
                    >
                        {content.firstSection["content"].map((card, indx) => (
                            <DSCard
                                key={indx}
                                imageName={paths.cards[indx]}
                                title={card.title}
                                minWidth="97px"
                                maxWidth={screenWidth > 511 ? "210px" : "310px"}
                                imageHeight="300px"
                                sxText={{
                                    imgObjectFit: 'cover',
                                    titleColor: '#333333',
                                    labelColor: '#555555',
                                    linkColor: '#FF5722',
                                    fontWeight: 500,
                                }}
                            />
                        ))}
                    </DSCardsWrapper>
                    <div style={{maxWidth: 1200}}>
                        <DSNotification
                            label={content.firstSection.notificationLabel as string}
                            backgroundColor={"#FFE9E9"}
                            iconColor={"#871A16"}
                            fullWidth={true}
                        />
                    </div>
                </div>
            </ContentSection>
        </section>
    );
};

export default FirstSection;



