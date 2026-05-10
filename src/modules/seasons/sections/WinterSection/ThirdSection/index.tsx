import { type ReactElement } from "react";
import * as paths from "@modules/seasons/locales/paths.json";
import ImageCard from "@modules/seasons/components/ImageCard";
import DSNotification from "@components/common/DSNotification";
// import snowflakeIcon from "../../../../../../public/assets/icons/logo/snowflake.svg";
import "./style.css";

interface CardContent {
    subTitle?: string;
    title?: string;
    description?: string;
    securityMeasures?: string;
}

interface ThirdSectionSectionProps {
    title?: string;
    secondTitle?: string;
    description?: string;
    cards: CardContent[];
}

const ThirdSection = ({ title, secondTitle, cards }: ThirdSectionSectionProps): ReactElement => {
    const imageCards = cards.slice(9, 12);
    const securityMeasuresCards = cards.slice(13);

    return (
        <div className="seasons-winter-section-container">

            <img className="seasons-winter-texture-bg" src={paths.texturedBg} alt="" />

            <img className="seasons-winter-third-snowflake-1 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-2 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-3 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-4 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-5 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-6 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-7 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-8 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-9 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowflake-10 seasons-winter-bg-image" src={paths.winter.snowflake} alt="" />
            <img className="seasons-winter-third-snowman seasons-winter-bg-image" src={paths.winter.snowman} alt="" />

            <div className="seasons-winter-first-section-content seasons-winter-section-content">
                <h2 className="seasons-winter-subtitle seasons-winter-third-subtitle">{title}</h2>
                <div className="seasons-winter-third-section-image-cards">
                    {imageCards.map((card, index) => (
                        <ImageCard
                            key={card.subTitle || index}
                            season="winter"
                            title={card.title || card.subTitle || ""}
                            description={card.description || ""}
                            imagePath={
                                paths.winter.snowCards?.[
                                index % paths.winter.snowCards.length
                                ] ?? ""
                            }
                        />
                    ))}
                </div>

                <h2 className="seasons-winter-subtitle seasons-winter-third-subtitle2">{secondTitle}</h2>
                <div className="seasons-winter-third-section-cards">
                    {securityMeasuresCards.map(card => (
                        <DSNotification
                            className="winter-third-card"
                            fullWidth
                            content={card.securityMeasures}
                            key={card.securityMeasures}
                            type="info"
                            backgroundColor="#085FB9"
                            textColor="#FFFFFF"
                            iconName="snowflake"
                            iconHeight="41"
                            iconWidth="40"
                            borderRadius="50px"
                            padding="24px 25px"
                            borderColor="none"
                            fontSize="24px"
                            cardGap="20px"
                            alertStyle={{
                                letterSpacing: "0px",
                                fontWeight: "700",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;