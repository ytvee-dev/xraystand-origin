import Card from "@modules/seasons/components/Card";
import * as paths from "@modules/seasons/locales/paths.json";
import type { SeasonContent, SeasonsCard } from "@modules/seasons/types";
import type { ReactElement } from "react";
import "./style.css";
import { usePageData } from "@hooks/usePageData";

const SecondSection = ({
    description,
    content,
}: SeasonContent): ReactElement => {
    const { isMobile } = usePageData();

    return (
        <div className="winter-second-section">
            <img
                alt=""
                className="seasons-winter-textured-bg"
                src="https://res.cloudinary.com/dy6zg8dhs/image/upload/v1776683839/cover_bg_1_1_vxzrdh.webp"
            />

            <div className="winter-second-section-background-images">
                <img
                    id="winter-second-section-img-1"
                    className="winter-second-section-img"
                    src={paths.winter.rowanBranch}
                    alt="winter-image"
                />
                <img
                    id="winter-second-section-img-2"
                    className="winter-second-section-img"
                    src={paths.winter.spruce}
                    alt="winter-image"
                />
                <img
                    id="winter-second-section-img-3"
                    className="winter-second-section-img"
                    src={
                        isMobile
                            ? paths.winter.snowflakeBackgroundMobile
                            : paths.winter.snowflakeBackground
                    }
                    alt="winter-image"
                />
            </div>

            <div className="winter-second-section-content">
                <div className="winter-second-section-header">
                    <span className="seasons-section-description">
                        {description}
                    </span>
                </div>

                <div className="winter-second-section-blocks-container">
                    {content.map((blockData: SeasonsCard, index: number) => (
                        <Card
                            key={`winter-card-${index}`}
                            id={`winter-second-section-card-${index}`}
                            imagePath={paths.winter.winterAnimals[index]}
                            className="winter-second-section-card"
                            title={blockData.subTitle}
                            description={blockData.description || ""}
                            season="winter"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
