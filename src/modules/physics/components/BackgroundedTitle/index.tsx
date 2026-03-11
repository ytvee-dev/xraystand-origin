import { type ReactElement } from "react";
import './style.css'

interface IBackgroundedTitleProps{
    title: string;
    subtitle?: string;
    description?: string,
    bgColor?: string,
    titleFontWeight?: '400' | '700',
    subtitleFontSize?: string,
    fullWidth?: boolean;
}

const BackgroundedTitle = ({
    title,
    subtitle,
    description,
    bgColor = "#ee7630",
    titleFontWeight = "400",
    subtitleFontSize = "16px",
    fullWidth = false
}: IBackgroundedTitleProps): ReactElement => {
    return (
        <div className={`bg-title ${description ? 'has-description' : '' }`}
            style={{
                backgroundColor: bgColor,
                width: fullWidth ? "100%" : "auto",
            }}>
                <h2 style={{
                    fontWeight: titleFontWeight,
                }}>
                    {title}
                    {subtitle && <p style={{ fontSize: subtitleFontSize }}>{subtitle}</p>}
                </h2>

                {description && <p>{description}</p>}
        </div>
    )
}

export default BackgroundedTitle;