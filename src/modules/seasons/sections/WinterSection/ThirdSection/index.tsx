import type { ReactElement } from "react";
import DSNotification from "@components/common/DSNotification";
import SnowCard from "@modules/seasons/components/SnowCard";
import * as paths from "@modules/seasons/locales/paths.json";
import type { SeasonsCard } from "@modules/seasons/types";
import { SvgSpriteIds } from "@utils/constants";
import "./style.css";

export interface IWinterThirdSectionProps {
    title: string;
    activityCards: SeasonsCard[];
    safetyTitle: string;
    safetyCards: SeasonsCard[];
}

const snowflakeClasses = [
    "seasons-winter-snowflake-top",
    "seasons-winter-snowflake-left-small",
    "seasons-winter-snowflake-left-large",
    "seasons-winter-snowflake-left-lower",
    "seasons-winter-snowflake-left-bottom",
    "seasons-winter-snowflake-right-small",
];

const snowCardClasses = [
    "seasons-winter-snow-card-first",
    "seasons-winter-snow-card-second",
    "seasons-winter-snow-card-third",
];

const ThirdSection = ({
    title,
    activityCards,
    safetyTitle,
    safetyCards,
}: IWinterThirdSectionProps): ReactElement => {
    return (
        <div className="seasons-winter-third-section">
            <img
                src={paths.texturedBg}
                alt=""
                className="seasons-winter-textured-bg"
            />

            {snowflakeClasses.map((className) => (
                <img
                    key={className}
                    src={paths.winter.snowflake}
                    alt=""
                    className={`seasons-winter-snowflake ${className}`}
                />
            ))}

            <img
                src={paths.winter.snowman}
                alt=""
                className="seasons-winter-snowman"
            />

            <div className="seasons-winter-third-content">
                <h2 className="seasons-winter-third-title">{title}</h2>

                <div className="seasons-winter-snow-cards">
                    {activityCards.map((card, index) => (
                        <SnowCard
                            key={card.subTitle}
                            title={card.subTitle}
                            description={card.description}
                            imagePath={paths.winter.snowCards[index]}
                            className={snowCardClasses[index]}
                        />
                    ))}
                </div>

                <h2 className="seasons-winter-safety-title">{safetyTitle}</h2>

                <div className="seasons-winter-notifications">
                    {safetyCards.map((card) => (
                        <DSNotification
                            key={card.description}
                            className="seasons-winter-notification"
                            content={card.description}
                            type="info"
                            borderColor=""
                            textColor="#ffffff"
                            iconName={SvgSpriteIds.SNOW_LEAF}
                            iconColor="#ffffff"
                            backgroundColor="#2f64b2"
                            borderRadius="50px"
                            cardGap="20px"
                            padding="18px 24px"
                            iconWidth="52px"
                            iconHeight="52px"
                            alertStyle={{
                                fontSize: "24px",
                                lineHeight: "26px",
                                letterSpacing: "0",
                                fontWeight: "700",
                            }}
                            paragraphWeight={700}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
