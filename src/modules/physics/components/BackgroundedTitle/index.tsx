import { type ReactElement } from "react";
import './style.css'

interface IBackgroundedTitleProps{
    title: string;
    description?: string,
    bgColor?: string,
    titleFontWeight?: '400' | '700',
    fullWidth?: boolean;
    descriptionSize?: 'large' | 'normal';
    className?: string;
}

const BackgroundedTitle = ({
    title,
    description,
    bgColor = "#ee7630",
    titleFontWeight = "400",
    fullWidth = false,
    descriptionSize,
    className
}: IBackgroundedTitleProps): ReactElement => {
    return (
        <div className={`bg-title ${description ? 'has-description' : '' } ${className}`}
            style={{
                backgroundColor: bgColor,
                width: fullWidth ? "100%" : "auto",
            }}>
                <h2 style={{
                    fontWeight: titleFontWeight,
                }}>
                    {title}
                </h2>

                {description && 
                    <p className={`bg-title-description ${descriptionSize}`}>{description}</p>
                }
        </div>
    )
}

export default BackgroundedTitle;