import {type ReactElement} from "react";

import "./style.css";
import * as content from "@modules/nutrition/locales/rus.json";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import * as paths from "@modules/nutrition/locales/paths.json";
import BgContentSection from "@components/common/Sections/BgContentSection";
import LightCard from "@components/common/Cards/LightCard";

const FirstSection = (): ReactElement => {
    return (
        <BgContentSection
            textData={content.firstSection}
            sectionName={'nutrition-first-section'}
            backgroundImage={'./public/assets/images/nutrition/backgrounds/bg3.png'}
            strictHeight={true}
        >
            <DSCardsWrapper
                screenMaxWidth={1000}
                cardsGap="24px"
                wrapperMaxWidth={1200}
            >
                {content.firstSection["content"].map((card, indx) => (
                    <LightCard
                        key={1}
                        imageName={paths.cards[indx]}
                        title={card.title}
                        subTitle={card.subTitle}
                        label={card.description}
                        backgroundColor="#FAFFDE"
                        minWidth="97px"
                        maxWidth={'372px'}
                        imageHeight={'188px'}
                        sxText={{
                            imgObjectFit: 'cover',
                            titleColor: '#1D1B20',
                            labelColor: '#49454F',
                            fontWeight: 400,
                            titleFontSize: '16px',
                            subTitleFontSize: '14px',
                            labelFontSize: '14px',
                        }}
                    />
                ))}
            </DSCardsWrapper>
        </BgContentSection>
    );
};

export default FirstSection;
