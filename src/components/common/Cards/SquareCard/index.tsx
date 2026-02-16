import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";
import "./style.css";

export interface IGridCardProps extends MathSectionProps {
    title?: string;
    description?: string;
    imagePath?: string;
    cardStyle: 'square' | 'square-rounded';
    sx?: {
        borderType?: 'solid' | 'dashed' | 'none';
        borderColor?: string;
        textColor?: string;
        cardPadding?: string;
        cardMaxWidth?: string;
    };
}

const SquareCard: React.FC<IGridCardProps> = ({
  title,
  description,
  imagePath,
  cardStyle = 'square',
  sx = {
      borderType: 'solid',
      borderColor: 'transparent',
      textColor: 'white',
      cardPadding: '24px',
      cardMaxWidth: '100%',
  },
  className,
}): ReactElement => {
    return (
        <div
            className={`square-card ${cardStyle} ${className || ''}`}
            style={{
                border: `1px ${sx.borderType} ${sx.borderColor}`,
                padding: sx.cardPadding,
                maxWidth: sx.cardMaxWidth,
            }}
        >
            {imagePath && (
                <div className="square-card-image">
                    <img src={imagePath} alt={title}/>
                </div>
            )}
            <div className="square-card-content">
                {title && <h3 style={{color: sx.textColor}}>{title}</h3>}
                {description && <p style={{color: sx.textColor}}>{description}</p>}
            </div>
        </div>
    );
};

export default SquareCard;
