import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import "./style.css";

export type TFlexDirection = 'row' | 'column' | 'column-reverse' | 'row-reverse';
export interface ICubeCardProps extends MathSectionProps {
    title: string;
    description: string;
    imagePath: string;
    flexDirection: TFlexDirection;
}

const CubeCard: React.FC<ICubeCardProps> = ({title, description, imagePath, className, flexDirection}): ReactElement => {
    const isMobile = useScreenWidth() < 800;
    const textAlign = flexDirection === 'row-reverse' ? 'start' : 'end';

    return (
        // class: math-types-card
        <div
            className={className}
             style={{
                 flexDirection: !isMobile ? flexDirection : 'column-reverse',
             }}>
            <div className={'math-card-text'}>
                <h3 style={{textAlign: !isMobile ? textAlign : 'center'}}>{title}</h3>
                <p style={{textAlign: !isMobile ? textAlign : 'center'}}>{description}</p>
            </div>
            <div className={'math-card-image'}>
                <img src={imagePath} alt={title} />
            </div>
        </div>
    );
};

export default CubeCard;
