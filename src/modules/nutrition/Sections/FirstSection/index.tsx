import React, {type ReactElement} from "react";
import type {FirstSection as TFirstSection} from "@modules/nutrition/types";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import BgContentSection from "@components/common/Sections/BgContentSection";
import LightCard from "@components/common/Cards/LightCard";
import * as paths from "@modules/nutrition/locales/paths.json";
import {dsCardImagePathPrefix} from "@components/common/Cards/cardsMeta.tsx";
import "./style.css";

interface FirstSectionProps {
    content: { firstSection: TFirstSection };
}

const FirstSection: React.FC<FirstSectionProps> = ({content}: FirstSectionProps): ReactElement => {
    const backgroundImage = dsCardImagePathPrefix + paths.backgrounds.firstSection;

    return (
        <BgContentSection
            textData={content.firstSection}
            sectionName={'nutrition-first-section'}
            backgroundImage={backgroundImage}
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
                            fontWeight: 600,
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
