import React, {type ReactElement} from "react";
import * as paths from "@modules/nutrition/locales/paths.json";
import {dsCardImagePathPrefix} from "@components/common/Cards/cardsMeta.tsx";
import "./style.css";
import LightCard from "@components/common/Cards/LightCard";
import type {LabeledItem} from "@modules/nutrition/types";

type TDescriptionBlock = 'unHovered' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface CirclePlateProps {
    content: LabeledItem[];
}


const CirclePlate: React.FC<CirclePlateProps> = ({content}: CirclePlateProps): ReactElement => {
    const backgroundImage = dsCardImagePathPrefix + paths.images.plate;
    const [currentBlock, setCurrentBlock] = React.useState<TDescriptionBlock>('unHovered');
    const descriptionBlocksContent = {
        'unHovered': content[0],
        'top-left': content[1],
        'top-right': content[2],
        'bottom-left': content[3],
        'bottom-right': content[4],
    };

    const handleChoose = (block: TDescriptionBlock) => {
        setCurrentBlock(block);
    };

    const DescriptionBlock = (): ReactElement => {
        return (
            <div className={`quarters block-${currentBlock}`}>
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
                    classes={`description-block ${currentBlock}`}
                />
            </div>
        );
    }

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
};

export default CirclePlate;
