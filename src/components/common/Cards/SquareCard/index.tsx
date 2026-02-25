import React, { Fragment, type CSSProperties, type ReactElement } from "react";
import type { TFlexDirection } from "@modules/fireSafety/components/Card";
import "./style.css";

export interface ISquareCardProps {
    id?: string;
    className: string;
    title?: string;
    label?: string;
    paragraphSeparator?: string;
    titleClassName?: string;
    labelClassName?: string;
    imagePath?: string;
    flexDirection?: TFlexDirection;
    imageStyle?: CSSProperties;
    cardStyle?: CSSProperties;
    cardContentStyle?: CSSProperties;
    labelWrapperStyle?: CSSProperties;
}

const SquareCard = ({
    id,
    className,
    title = "",
    label = "",
    titleClassName = "",
    labelClassName = "",
    flexDirection = "row",
    paragraphSeparator,
    imageStyle,
    imagePath,
    labelWrapperStyle,
    cardContentStyle,
    cardStyle,
}: ISquareCardProps): ReactElement => {
    const renderLabel = (): React.ReactNode => {
        if (!label) return null;

        const blocks =
            paragraphSeparator && label.includes(paragraphSeparator)
                ? label
                      .split(paragraphSeparator)
                      .map((part) => part.trim())
                      .filter((part) => part !== "")
                : [label.trim()];

        return blocks.map((block, blockIndex) => {
            if (block.includes("•")) {
                const parts = block.split("•").map((part) => part.trim());

                const beforeList = parts[0] !== "" ? parts[0] : null;

                const listItems = parts.slice(1).filter((item) => item !== "");

                return (
                    <Fragment key={blockIndex}>
                        {beforeList && (
                            <p className={labelClassName}>{beforeList}</p>
                        )}

                        {listItems.length > 0 && (
                            <ul className={labelClassName}>
                                {listItems.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </Fragment>
                );
            } else {
                return (
                    <p key={blockIndex} className={labelClassName}>
                        {block}
                    </p>
                );
            }
        });
    };

    return (
        <div
            id={id || ""}
            className={`square-card  ${className || ""}`}
            style={{ flexDirection: flexDirection, ...cardStyle }}
        >
            {imagePath && (
                <div className="square-card-image">
                    <img src={imagePath} alt={title} style={imageStyle} />
                </div>
            )}

            <div className="square-card-content" style={cardContentStyle}>
                {title && <h2 className={titleClassName}>{title}</h2>}
                {label && (
                    <div
                        className="square-card-label-wrapper"
                        style={labelWrapperStyle}
                    >
                        {renderLabel()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SquareCard;
