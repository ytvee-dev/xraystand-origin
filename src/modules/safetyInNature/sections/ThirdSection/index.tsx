import React, { type ReactElement } from "react";
import { usePageData } from "@hooks/usePageData";
import * as paths from "../../locales/paths.json";
import MythCards from "@modules/safetyInNature/components/MythCards";
import Carousel from "@modules/kazTarih/components/Carousel";
import SafetyNatureHeading from "@modules/safetyInNature/components/SafetyNatureHeading";
import "./style.css";

interface IMythCardItem {
    title: string;
    description: string;
}

interface IMythGroup {
    title: string;
    content: IMythCardItem[][];
}

interface IThirdSectionContent {
    title: string;
    description: string;
    content: IMythGroup[];
}

interface IThirdSectionProps {
    content: IThirdSectionContent;
}

const ThirdSection: React.FC<IThirdSectionProps> = ({ content }): ReactElement => {
    const { screenWidth } = usePageData();
    const isMobile = screenWidth <= 900;

    return (
        <section className="safety-nature-third-section">
            <img className="third-section-first-img" src={paths.thirdPlant} alt="" />
            <img className="third-section-second-img" src={paths.firstPlant} alt="" />
            <SafetyNatureHeading
                title={content.title}
                description={content.description}
                titleColor="#1B847C"
                descriptionColor="#B1D6CE"
                backgroundColor="#E4ECEA"
            />

            <div className="safety-nature-third-section-content">
                {content.content.map((group) => (
                    <div className="safety-nature-third-section-group" key={group.title}>
                        <h3 className="safety-nature-third-section-group-title">{group.title}</h3>

                        {isMobile ? (
                            <Carousel className="safety-nature-myth-carousel">
                                {group.content.map((card, index) => (
                                    <MythCards
                                        key={`${group.title}-${index}`}
                                        content={card}
                                    />
                                ))}
                            </Carousel>
                        ) : (
                            <div className="safety-nature-third-section-cards">
                                {group.content.map((card, index) => (
                                    <MythCards
                                        key={`${group.title}-${index}`}
                                        content={card}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ThirdSection;