import type { TFlexDirection } from "@utils/stylesHelper";
import type { CSSProperties } from "@mui/material";
import type { ReactElement } from "react";
import "./style.css";

export interface IBlockLabel {
    subtitle?: string;
    description?: string;
}

export interface IBlockData {
    title?: string;
    description?: string;
    content?: IBlockLabel[];
}

interface IInfoBlockProps {
    id?: string;
    className?: string;
    title?: string;
    description?: string;
    labels?: IBlockLabel[];
    imagePath?: string;
    flexDirection?: TFlexDirection;
    titleStyles?: CSSProperties;
}

const InfoBlock = ({
    id,
    className,
    title,
    description,
    labels,
    imagePath,
    flexDirection,
    titleStyles,
}: IInfoBlockProps): ReactElement => {
    return (
        <div id={id || ""} className={`info-block ${className || ""}`}>
            <div
                className="info-block-content"
                style={{ flexDirection: flexDirection }}
            >
                <div className="info-block-title" style={titleStyles}>
                    {title}
                </div>

                {imagePath && (
                    <div className="info-block-image-wrapper">
                        <img
                            className="info-block-image"
                            src={imagePath}
                            alt="image"
                        />
                    </div>
                )}

                <div className="info-block-labels-container">
                    {description && (
                        <span className="info-block-description">
                            {description}
                        </span>
                    )}

                    {labels &&
                        labels.map((labelData: IBlockLabel, index: number) => (
                            <div
                                key={index}
                                className="info-block-label-wrapper"
                            >
                                {labelData.subtitle && (
                                    <span className="info-block-subtitle">
                                        {labelData.subtitle}
                                    </span>
                                )}

                                {labelData.description && (
                                    <span className="info-block-description">
                                        {labelData.description}
                                    </span>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default InfoBlock;
