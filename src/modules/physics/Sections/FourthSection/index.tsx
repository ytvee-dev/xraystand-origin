import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as paths from "@modules/physics/locales/paths.json";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import ContentSection from "@components/common/Sections/DSContentSection";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import DSCard from "@components/common/Cards/DSCard";

import "./style.css";


// type TInLifeCard = {
//     title: string;
//     subtitle?: string;
//     description?: string;
// };

const FourthSection: React.FC = (): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const content = textContent.inLifeSection.content;

    return (
        <section className="physics-fourth-section">

            <div className="physcs-fourth-section-title">
                <BackgroundedTitle
                    title={textContent.inLifeSection.title}
                    bgColor="#ee7630"
                    titleFontWeight="700"
                    fullWidth
                />
            </div>

            <div className="physics-fourth-section-content-wrapper">
                <ContentSection>
                    <DSCardsWrapper
                        screenMaxWidth={1000}
                        cardsGap="24px"
                        wrapperMaxWidth={1200}
                    >
                        {content.map((card, indx) => (
                            <DSCard
                                key={indx}
                                imageName={paths.cardsBg}
                                title={card}
                                minWidth="97px"
                                maxWidth="317px"
                                imageHeight="300px"
                                backgroundColor="transparent"
                                sxText={{
                                    imgObjectFit: "contain",
                                    // imgPadding: "16px",
                                    // titleColor: "#333333",
                                    // labelColor: "#555555",
                                    // linkColor: "#FF5722",
                                    fontWeight: 500,
                                }}
                            />
                        ))}
                    </DSCardsWrapper>
                </ContentSection>
            </div>
        </section>
    );
};

export default FourthSection;