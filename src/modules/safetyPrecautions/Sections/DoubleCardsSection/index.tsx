import type {ReactElement} from "react";
import TwoColumnSection from "@components/common/Sections/TwoColumnSection";
import RulesBlock, {type RulesBlockProps} from "@modules/safetyPrecautions/components/RulesBlock";
import './style.css';
import {type BackgroundLayerName} from "@modules/safetyPrecautions/components/BackgroundLayer";


export interface DoubleCardsSectionProps {
    leftSideContent: RulesBlockProps;
    rightSideContent: RulesBlockProps;
    leftBackground?: string;
    rightBackground?: string;
    leftLayer?: BackgroundLayerName;
    rightLayer?: BackgroundLayerName;
}


const DoubleCardsSection = ({
                                leftSideContent,
                                rightSideContent,
                                leftBackground,
                                rightBackground,
                                leftLayer,
                                rightLayer,
                            }: DoubleCardsSectionProps): ReactElement => {
    const leftSideSX = leftSideContent.sx || {titleColor: "#000000", descriptionColor: "#000000",};
    const rightSideSX = rightSideContent.sx || {titleColor: "#000000", descriptionColor: "#000000",};

    return (
        <div style={{position: 'relative'}}>
            <TwoColumnSection
                backgroundColorLeft={leftBackground || 'white'}
                backgroundColorRight={rightBackground || 'white'}
                variant={'simple'}
                leftColumn={<RulesBlock content={leftSideContent.content} sx={leftSideSX}/>}
                rightColumn={<RulesBlock content={rightSideContent.content} sx={rightSideSX}/>}
                leftLayer={leftLayer}
                rightLayer={rightLayer}
                classNames={{
                    leftColumn: 'rules-left-column',
                    rightColumn: 'rules-right-column'
                }}
            />
        </div>

    );
};

export default DoubleCardsSection;
