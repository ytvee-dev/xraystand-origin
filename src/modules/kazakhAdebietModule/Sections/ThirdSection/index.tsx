// @ts-ignore
import React, {type ReactElement} from "react";
import ContentSection from "@components/common/Sections/DSContentSection";
import DSNotification from "@components/common/DSNotification";
import DSCard from "@components/common/Cards/DSCard";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";

import * as content from "@modules/kazakhAdebietModule/locales/kaz.json";
import * as paths from "@modules/kazakhAdebietModule/locales/paths.json";
import "./style.css";

const SecondSection = (): ReactElement => {
    return (
        <section className="kza-third-section">
            <ContentSection textData={{
                title: content.thirdSection["title"],
                description: content.thirdSection["description"],
                colorScheme: {
                    background: "#EBCD91",
                    text: "#8A2F17",
                }
            }}>
                {Array.from({length: 2}).map((_, i: number) => (
                    <DSCardsWrapper
                        key={i}
                        screenMaxWidth={1000}
                        cardsGap="24px"
                        wrapperMaxWidth={1200}
                    >
                        {content.thirdSection["content"].slice(i * 4, i * 4 + 4).map((card, indx) => (
                            <DSCard
                                key={indx}
                                imageName={paths.people[i * 4 + indx]}
                                title={card.title}
                                label={card.label}
                                backgroundColor="#FAFAFA"
                                minWidth="97px"
                                maxWidth="317px"
                                imageHeight="200px"
                                sxText={{
                                    imgObjectFit: 'contain',
                                    imgPadding: '16px',
                                    titleColor: '#333333',
                                    labelColor: '#555555',
                                    linkColor: '#FF5722',
                                    fontWeight: 500,
                                }}
                            />
                        ))}
                    </DSCardsWrapper>
                ))}
                <div className="content-section-alert-wrapper">
                    <DSNotification label={content.thirdSection.notificationLabel as string} />
                </div>
            </ContentSection>
        </section>
    );
};

export default SecondSection;
