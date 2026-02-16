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
        <div className="bg-title"
            style={{
                backgroundColor: bgColor,
                width: fullWidth ? "100%" : "auto",
                padding: subTitle ? "24px" : "15px"
            }}>
                <h2 className={subTitle ? 'font-ubuntu' : 'font-roboto'}
                style={{
                    fontWeight: titleFontWeight,
                    marginBottom: subTitle ? '16px' : '',
                }}>
                    {title}
                </h2>

                {subTitle && <h3>{subTitle}</h3>}
        </div>
    )
}

export default BackgroundedTitle;