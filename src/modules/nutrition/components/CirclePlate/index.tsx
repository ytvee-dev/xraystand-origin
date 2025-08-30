import React, {type ReactElement} from "react";
import type {LabeledItem} from "../../types";
import useScreenWidth from "../../../../hooks/useScreenWidth.ts";
import LightCard from "../../../../components/common/Cards/LightCard";
import {dsCardImagePathPrefix} from "../../../../components/common/Cards/cardsMeta.tsx";
import * as paths from "../../locales/paths.json";
import "./style.css";

type TDescriptionBlock =
    'unHovered'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'

    | 'mobile-unHovered'
    | 'mobile-top-left'
    | 'mobile-top-right'
    | 'mobile-bottom-left'
    | 'mobile-bottom-right';

interface CirclePlateProps {
    content: LabeledItem[];
}


const CirclePlate: React.FC<CirclePlateProps> = ({content}: CirclePlateProps): ReactElement => {
    const screenWidth = useScreenWidth();
    const backgroundImage = dsCardImagePathPrefix + paths.images.plate;
    const [currentBlock, setCurrentBlock] = React.useState<TDescriptionBlock>('unHovered');
    const descriptionBlocksContent = {
        'unHovered': content[0],
        'top-left': content[1],
        'top-right': content[2],
        'bottom-left': content[3],
        'bottom-right': content[4],

        'mobile-unHovered': content[0],
        'mobile-top-left': content[1],
        'mobile-top-right': content[2],
        'mobile-bottom-left': content[3],
        'mobile-bottom-right': content[4],

    };

    const handleChoose = (block: TDescriptionBlock) => {
        setCurrentBlock(block);
    };

    const DescriptionBlock = (): ReactElement => {
        const containerClasses = screenWidth > 768 ? `quarters block-${currentBlock}` : `mobile-quarters mobile-block-${currentBlock}`;
        const descriptionClasses = screenWidth > 768 ? `description-block ${currentBlock}` : `mobile-description-block ${currentBlock}`;

        return (
            <div className={containerClasses}>
                <LightCard
                    key={1}
                    title={descriptionBlocksContent[currentBlock].title}
                    label={descriptionBlocksContent[currentBlock].label}
                    backgroundColor="#FAFFDE"
                    minWidth="272px"
                    maxWidth={'272px'}
                    sxText={{
                        titleColor: '#1D1B20',
                        labelColor: '#49454F',
                        fontWeight: 400,
                        titleFontSize: '16px',
                        subTitleFontSize: '14px',
                        labelFontSize: '14px',
                    }}
                    classes={descriptionClasses}
                />
            </div>
        );
    }

    // DESKTOP VERSION
    if (screenWidth > 768) {
        return (
            <div className="circle-plate-wrapper">
                <div className="circle-plate">
                    <div className="plate">
                        <img src={backgroundImage} alt="circle plate"/>
                    </div>
                    <div className="circle">
                        <div className="quarters">
                            <div className="quarter top-left" onMouseEnter={() => handleChoose('top-left')}/>
                            <div className="quarter top-right" onMouseEnter={() => handleChoose('top-right')}/>
                            <div className="quarter bottom-left" onMouseEnter={() => handleChoose('bottom-left')}/>
                            <div className="quarter bottom-right" onMouseEnter={() => handleChoose('bottom-right')}/>
                        </div>
                    </div>
                </div>

                <div className="description-blocks">
                    <DescriptionBlock/>
                </div>
            </div>
        );
    }

    // MOBILE VERSION
    return (
        <div className="mobile-circle-plate-wrapper">
            <div className="circle-plate">
                <div className="plate">
                    <img src={backgroundImage} alt="mobile-circle plate"/>
                </div>
                <div className="circle">
                    <div className="quarters">
                        <div className="quarter top-left" onMouseEnter={() => handleChoose('mobile-top-left')}/>
                        <div className="quarter top-right" onMouseEnter={() => handleChoose('mobile-top-right')}/>
                        <div className="quarter bottom-left" onMouseEnter={() => handleChoose('mobile-bottom-left')}/>
                        <div className="quarter bottom-right" onMouseEnter={() => handleChoose('mobile-bottom-right')}/>
                    </div>
                </div>
            </div>

            <div className="mobile-description-blocks">
                <DescriptionBlock/>
            </div>
        </div>
    );


};

export default CirclePlate;
