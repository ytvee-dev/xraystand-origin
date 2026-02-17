import { type ReactElement } from "react";
import './style.css'

interface IBackgroundedTitleProps{
    title: string;
    subTitle?: string,
    bgColor?: string,
    titleFontWeight?: '400' | '700',
    fullWidth?: boolean;
}

const BackgroundedTitle = ({
    title,
    subTitle,
    bgColor = "#ee7630",
    titleFontWeight = "400",
    fullWidth = false
}: IBackgroundedTitleProps): ReactElement => {
    return (
        <div className={`bg-title ${subTitle ? 'has-subtitle' : '' }`}
            style={{
                backgroundColor: bgColor,
                width: fullWidth ? "100%" : "auto",
            }}>
                <h2 style={{
                    fontWeight: titleFontWeight,
                }}>
                    {title}
                </h2>

                {subTitle && <p>{subTitle}</p>}
        </div>
    )
}

export default BackgroundedTitle;