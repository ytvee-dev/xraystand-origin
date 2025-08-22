import React, {type ReactElement} from "react";
import type {SecondSection as TSecondSection} from "@modules/nutrition/types";
// import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import BgContentSection from "@components/common/Sections/BgContentSection";
// import LightCard from "@components/common/Cards/LightCard";
import * as paths from "@modules/nutrition/locales/paths.json";
import {dsCardImagePathPrefix} from "@components/common/Cards/cardsMeta.tsx";

interface SecondSectionProps {
    content: { secondSection: TSecondSection };
}

const SecondSection: React.FC<SecondSectionProps> = ({content}: SecondSectionProps): ReactElement => {
    const backgroundImage = dsCardImagePathPrefix + paths.backgrounds.secondSection;

    return (
        <BgContentSection
            textData={content.secondSection}
            sectionName={'nutrition-second-section'}
            backgroundImage={backgroundImage}
            strictHeight={true}
        >
        </BgContentSection>
    );
};

export default SecondSection;
