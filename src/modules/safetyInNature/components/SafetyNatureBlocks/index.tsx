import React from "react";
import { type ReactElement } from "react";
import { usePageData } from "@hooks/usePageData";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import "./style.css";

export interface ISafetyNatureBlockItem {
    title: string;
    description: string;
}

interface ISafetyNatureBlocksProps {
    title: string;
    content: ISafetyNatureBlockItem[];
    iconId: string[];
    images: string[];
    contentSide: "left" | "right";
    backgroundColor?: string;
    titleBackgroundColor?: string;
}

const SafetyNatureBlocks: React.FC<ISafetyNatureBlocksProps> = ({
    title,
    content,
    iconId,
    images,
    contentSide,
    backgroundColor,
    titleBackgroundColor,
}): ReactElement => {

    const { screenWidth } = usePageData();

    const iconSize =
        screenWidth <= 390 ? "66px"
            : screenWidth <= 1024
                ? "80px"
                : "120px";
    return (
        <div className={`safety-nature-block safety-nature-block--${contentSide}`} style={{ backgroundColor }}>
            <h2 className="safety-nature-block-title" style={{ backgroundColor: titleBackgroundColor }}>{title}</h2>

            <div className="safety-nature-block-content">
                <div className="safety-nature-block-items">
                    {content.map((item, index) => (
                        <div className="safety-nature-block-item" key={item.title}>
                            <SpriteIcon
                                iconId={iconId[index]}
                                width={iconSize}
                                height={iconSize}
                            />

                            <div className="safety-nature-block-text">
                                <h3 className="safety-nature-block-item-title">{item.title}</h3>
                                <p className="safety-nature-block-item-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="safety-nature-block-images">
                    {images.map((image) => (
                        <img className="safety-nature-block-image safety-nature-block-image" key={image} src={image} alt="" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SafetyNatureBlocks;