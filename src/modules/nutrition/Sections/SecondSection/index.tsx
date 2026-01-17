import React, {type ReactElement} from "react";
import type {SecondSection as TSecondSection} from "../../types";
import CirclePlate from "../../components/CirclePlate";
import BgContentSection from "@components/common/Sections/BgContentSection";
import * as paths from "../../locales/paths.json";
import "./style.css";

interface SecondSectionProps {
    content: { secondSection: TSecondSection };
}

const SecondSection: React.FC<SecondSectionProps> = ({content}: SecondSectionProps): ReactElement => {

    return (
        <BgContentSection
            textData={content.secondSection}
            sectionName={'nutrition-second-section'}
            backgroundImage={paths.backgrounds.secondSection}
            strictHeight={true}
        >
            <CirclePlate content={content.secondSection.content} />
        </BgContentSection>
    );
};

export default SecondSection;
