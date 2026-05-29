import Card from "@modules/seasons/components/Card";
import * as paths from "@modules/seasons/locales/paths.json";
import type { SeasonContent, SeasonsCard } from "@modules/seasons/types";
import type { ReactElement } from "react";
import "./style.css";

const FirstSection = ({
    title,
    description,
    content,
}: SeasonContent): ReactElement => {
    return (
        <div className="winter-first-section">
            <img
                alt=""
                className="seasons-winter-textured-bg"
                src="https://res.cloudinary.com/dy6zg8dhs/image/upload/v1776683839/cover_bg_1_1_vxzrdh.webp"
            />

            <div className="winter-first-section-background-images">
                <img
                    id="winter-bear-img"
                    className="winter-section-img"
                    src={paths.winter.snowBear}
                    alt="winter-image"
                />

                <div className="winter-first-section-background-images">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <img
                            key={index}
                            id={`winter-section-snowflake-${index}`}
                            className="winter-section-img"
                            src={paths.winter.snowflake}
                            alt="winter-image"
                        />
                    ))}
                </div>
            </div>

            <div className="winter-first-section-content">
                <div className="winter-first-section-header">
                    <img
                        className="winter-first-section-logo"
                        src={paths.winter.logo}
                        alt="winter-image"
                    />

                    <h1 className="seasons-section-title">{title}</h1>

                    <span className="seasons-section-description">
                        {description}
                    </span>
                </div>

                <div className="winter-first-section-blocks-container">
                    {content.map((blockData: SeasonsCard, index: number) => (
                        <Card
                            key={`winter-card-${index}`}
                            className="winter-first-section-card"
                            subTitle={blockData.subTitle}
                            description={blockData.description || ""}
                            season="winter"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
