import React, {type ReactElement} from "react";
import type {FourthSection as TFourthSection} from "@modules/nutrition/types";
import BgContentSection from "@components/common/Sections/BgContentSection";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import IconTextItem from "@components/common/Other/IconTextItem";
import {dsCardImagePathPrefix} from "@components/common/Cards/cardsMeta.tsx";
import * as paths from "@modules/nutrition/locales/paths.json";
import "./style.css";

interface FourthSectionProps {
    content: { fourthSection: TFourthSection };
}

const FourthSection: React.FC<FourthSectionProps> = ({content}: FourthSectionProps): ReactElement => {
    const backgroundImage = dsCardImagePathPrefix + paths.backgrounds.fourthSection;
    const plateImage = dsCardImagePathPrefix + paths.images.plate;
    const itemsIcons = [
        "fruits",
        "bread",
        "eggs",
        "water",
    ];

    return (
        <BgContentSection
            textData={content.fourthSection}
            sectionName={'nutrition-fourth-section'}
            backgroundImage={backgroundImage}
            strictHeight={true}
        >
            <div style={{ padding: '0 20px' }}>
                <TwoColumnSection leftColumn={
                    <div className='nutrition-fourth-section-img-wrapper'>
                        <img src={plateImage} alt="plate image"/>
                    </div>
                } rightColumn={
                    <div className={'nutrition-fourth-section-items'}>
                        {itemsIcons.map((item) => (
                            <IconTextItem
                                iconName={`${dsCardImagePathPrefix}nutrition/icons/${item}.avif`}
                                iconType={'png'}
                                title={content.fourthSection.title}
                                text={content.fourthSection.description}
                            />
                        ))}
                    </div>
                } />
            </div>
        </BgContentSection>
    );
};

export default FourthSection;
