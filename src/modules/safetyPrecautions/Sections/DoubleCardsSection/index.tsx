// import TwoBackgroundColorSection from "@components/common/Sections/TwoBackgroundColorSection";
// import type { ISectionProps } from "@modules/safetyPrecautions/types";
import type { ReactElement } from "react";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import type {HomeSection} from "@modules/home/types";
import RulesBlock from "@modules/safetyPrecautions/RulesBlock";
import './style.css';

interface DoubleCardsSectionProps {
    leftSideContent: HomeSection;
    rightSideContent: HomeSection;
}

const DoubleCardsSection = ({leftSideContent, rightSideContent}: DoubleCardsSectionProps): ReactElement => {
    return (
        <TwoColumnSection
            backgroundColorLeft={'lightgreen'}
            backgroundColorRight={'pink'}
            variant={'simple'}
            leftColumn={<RulesBlock content={leftSideContent} />}
            rightColumn={<RulesBlock content={rightSideContent} />}
            classNames={{
                leftColumn: 'rules-left-column',
                rightColumn: 'rules-right-column'
            }}
        />
    );
};

export default DoubleCardsSection;
