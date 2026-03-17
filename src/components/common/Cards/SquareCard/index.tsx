import { type CSSProperties, type ReactElement, type ReactNode } from "react";
import type { TFlexDirection } from "@modules/fireSafety/components/Card";
import "./style.css";

export interface ICardData {
    id: string;
    title: string;
    labels: ICardLabel[];
    imagePath?: string;
    imageStyle?: CSSProperties;
}

export interface ICardLabel {
    description: string;
    listParts?: string[];
}

export interface ISquareCardProps {
    id?: string;
    className: string;
    title?: string;
    labels: ICardLabel[];
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
    labels,
    titleClassName = "",
    labelClassName = "",
    flexDirection = "row",
    imageStyle,
    imagePath,
    labelWrapperStyle,
    cardContentStyle,
    cardStyle,
}: ISquareCardProps): ReactElement => {
    const renderLabel = (): ReactNode => {
        return labels.map((labelData: ICardLabel, index: number) => {
            if (labelData.listParts?.length !== 0) {
                return (
                    <div className="square-card-list" key={index}>
                        <p className={labelClassName}>
                            {labelData.description}
                        </p>
                        <ul className={labelClassName}>
                            {labelData.listParts?.map(
                                (listPart: string, index: number) => (
                                    <li key={index}>{listPart}</li>
                                ),
                            )}
                        </ul>
                    </div>
                );
            }

            return (
                <p key={index} className={labelClassName}>
                    {labelData.description}
                </p>
            );
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
                {labels && (
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
