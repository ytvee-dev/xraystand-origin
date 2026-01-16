import type {ReactElement} from "react";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import RulesBlock, {type RulesBlockProps} from "@modules/safetyPrecautions/RulesBlock";
import './style.css';


export interface DoubleCardsSectionProps {
    leftSideContent: RulesBlockProps;
    rightSideContent: RulesBlockProps;
    leftBackground?: string;
    rightBackground?: string;
}

const DoubleCardsSection = ({leftSideContent, rightSideContent, leftBackground, rightBackground}: DoubleCardsSectionProps): ReactElement => {
    const leftSideSX = leftSideContent.sx || {titleColor: "#000000", descriptionColor: "#000000",};
    const rightSideSX = rightSideContent.sx || {titleColor: "#000000", descriptionColor: "#000000",};

    return (
        <TwoColumnSection
            backgroundColorLeft={leftBackground || 'white'}
            backgroundColorRight={rightBackground || 'white'}
            variant={'simple'}
            leftColumn={<RulesBlock content={leftSideContent.content} sx={leftSideSX}/>}
            rightColumn={<RulesBlock content={rightSideContent.content} sx={rightSideSX}/>}
            classNames={{
                leftColumn: 'rules-left-column',
                rightColumn: 'rules-right-column'
            }}
        />
    );
};

export default DoubleCardsSection;
