import {type ReactElement, type ReactNode} from "react";
import "./style.css";

export interface TwoColorsSectionProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    notification?: ReactNode;
    sx?: {
        titleColor?: string;
        descriptionColor?: string;
        leftSideBackgroundColor?: string;
        rightSideBackgroundColor?: string;
    },
}

const TwoColorsSection = ({
    title,
    description,
    imageSrc,
    notification,
    sx,
}: TwoColorsSectionProps): ReactElement => {
    const titleColor = sx?.titleColor || '#000';
    const descriptionColor = sx?.descriptionColor || '#000';
    const leftSideBackgroundColor = sx?.leftSideBackgroundColor || '#fff';
    const rightSideBackgroundColor = sx?.rightSideBackgroundColor || '#fff';

    return (
        <section className="two-colors-section">
            <div className="two-colors-section-backgrounds">
                <div style={{background: leftSideBackgroundColor}} className="two-colors-background left"></div>
                <div style={{background: rightSideBackgroundColor}} className="two-colors-background right"></div>
            </div>
            <div className="two-colors-section-content">
                {title && <h2 style={{color: titleColor}}>{title}</h2>}
                {description && <p style={{color: descriptionColor}}>{description}</p>}
                {imageSrc && (
                    <div className="two-colors-image-wrapper">
                        <img src={imageSrc} alt="image" />
                    </div>
                )}
                {notification && (
                    <div className="two-colors-section-alert-wrapper">
                        {notification}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TwoColorsSection;
