import React, { type CSSProperties, type ReactElement } from "react";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import "./style.css";

export type TFlexDirection =
    | "row"
    | "column"
    | "column-reverse"
    | "row-reverse";
export interface ICardProps {
    title?: string;
    description: string;
    imagePath?: string;
    flexDirection: TFlexDirection;
    className?: string;
    style?: CSSProperties;
    imageStyle?: CSSProperties;
}

const Card: React.FC<ICardProps> = ({
    title,
    description,
    imagePath,
    className,
    flexDirection,
    style,
    imageStyle,
}): ReactElement => {
    const isMobile = useScreenWidth() < 800;
    const textAlign = flexDirection === "row-reverse" ? "start" : "end";

    return (
        <div
            className={className}
            style={{
                flexDirection: !isMobile ? flexDirection : "column-reverse",
                ...style,
            }}
        >
            <div className={"math-card-text"}>
                {title && (
                    <h3 style={{ textAlign: !isMobile ? textAlign : "center" }}>
                        {title}
                    </h3>
                )}
                <p style={{ textAlign: !isMobile ? textAlign : "center" }}>
                    {description}
                </p>
            </div>
            {imagePath && (
                <div className={"fire-safety-card-image"}>
                    <img src={imagePath} alt={title} style={imageStyle} />
                </div>
            )}
        </div>
    );
};

export default Card;
