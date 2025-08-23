import React, {type ReactElement} from "react";
import type {SecondSection as TSecondSection} from "@modules/nutrition/types";
import CirclePlate from "@modules/nutrition/components/CirclePlate";
import BgContentSection from "@components/common/Sections/BgContentSection";
import {dsCardImagePathPrefix} from "@components/common/Cards/cardsMeta.tsx";
import * as paths from "@modules/nutrition/locales/paths.json";
import "./style.css";

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
            <CirclePlate content={content.secondSection.content} />
        </BgContentSection>
    );
};

export default SecondSection;
