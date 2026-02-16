import { type ReactElement } from "react";
import './style.css'

interface ITitleCardProps{
    title: string;
    subTitle?: string,
    bgColor?: string,
    fontWeight?: '400' | '700',
    fullWidth?: boolean;
}

const TitleCard = ({
    title,
    subTitle,
    bgColor = "#ee7630",
    fontWeight = "400",
    fullWidth = false
}: ITitleCardProps): ReactElement => {
    return (
        <div className="title-card"
            style={{
                backgroundColor: bgColor,
                width: fullWidth ? "100%" : "auto",
                padding: subTitle ? "24px" : "15px"
            }}>
                <h2 style={{
                    fontWeight: fontWeight,
                    fontFamily: subTitle ? 'var(--title-font)' : 'var(--text-font)',
                    marginBottom: subTitle ? '16px' : '',
                }}>
                    {title}
                </h2>

                {subTitle && <h3>{subTitle}</h3>}
        </div>
    )
}

export default TitleCard;