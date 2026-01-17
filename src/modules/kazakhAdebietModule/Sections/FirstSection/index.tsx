import {type ReactElement} from "react";
import ContentSection from "@components/common/Sections/DSContentSection";
import DSCard from "@components/common/Cards/DSCard";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import * as content from "@modules/kazakhAdebietModule/locales/kaz.json";
import * as paths from "@modules/kazakhAdebietModule/locales/paths.json";
import "./style.css";

const FirstSection = (): ReactElement => {

    return (
        <section className="kza-first-section">
            <ContentSection textData={content.firstSection}>
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
                            backgroundColor="#FFFFFF"
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
            </ContentSection>
        </section>
    );
};

export default FirstSection;



