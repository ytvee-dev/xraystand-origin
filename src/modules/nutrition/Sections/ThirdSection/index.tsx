import React, {type ReactElement} from "react";
import type {ThirdSection as TThirdSection} from "@modules/nutrition/types";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import BgContentSection from "@components/common/Sections/BgContentSection";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import NestedCard from "@components/common/Cards/NestedCard";
import {dsCardImagePathPrefix} from "@components/common/Cards/cardsMeta.tsx";
import * as paths from "@modules/nutrition/locales/paths.json";

interface ThirdSectionProps {
    content: { thirdSection: TThirdSection };
}

const ThirdSection: React.FC<ThirdSectionProps> = ({content}: ThirdSectionProps): ReactElement => {
    const backgroundImage = dsCardImagePathPrefix + paths.backgrounds.thirdSection;
    const screenWidth = useScreenWidth();

    return (
        <BgContentSection
            textData={content.thirdSection}
            sectionName={'nutrition-third-section'}
            backgroundImage={backgroundImage}
            strictHeight={true}
        >
            <div style={{ padding: '0 20px' }}>
                <TwoColumnSection leftColumn={
                    <NestedCard
                        imageName={paths.cards[4]}
                        title={'Полезные продукты'}
                        nestedCards={content.thirdSection.content.splice(0,5)}
                        minWidth={'361px'}
                        maxWidth={'568px'}
                        imageHeight={screenWidth < 768 ? '188px' : '316px'}
                        sxText={{
                            imgObjectFit: 'cover',
                        }}
                        sxNestedCards={{
                            titleColor: '#49454F',
                            labelColor: '#49454F',
                            titleFontSize: '14px',
                            titleFontWeight: 500,
                            labelFontSize: '12px',
                            fontWeight: 400,
                            backgroundColor: '#56AB2F',
                        }}
                    />
                } rightColumn={
                    <NestedCard
                        imageName={paths.cards[4]}
                        title={'Нежелательные продукты'}
                        nestedCards={content.thirdSection.content}
                        minWidth={'361px'}
                        maxWidth={'568px'}
                        imageHeight={screenWidth < 768 ? '188px' : '316px'}
                        sxText={{
                            imgObjectFit: 'cover',
                        }}
                        sxNestedCards={{
                            titleColor: '#49454F',
                            labelColor: '#49454F',
                            titleFontSize: '14px',
                            titleFontWeight: 500,
                            labelFontSize: '12px',
                            fontWeight: 400,
                            backgroundColor: '#FFA726',
                        }}
                    />
                } />
            </div>
        </BgContentSection>
    );
};

export default ThirdSection;
