import React, { type ReactElement } from "react";
import { usePageData } from "@hooks/usePageData";
import * as paths from "../../locales/paths.json";
import SafetyNatureCard from "@modules/safetyInNature/components/SafetyNatureCards";
import SafetyNatureBlocks from "@modules/safetyInNature/components/SafetyNatureBlocks";
import Carousel from "@modules/kazTarih/components/Carousel";
import "./style.css";

interface ISafetyNatureItem {
    title: string;
    description: string;
}

interface ISafetyNatureBlock {
    title: string;
    content: ISafetyNatureItem[];
}

interface IFirstSectionContent {
    title: string;
    description: string;
    content: ISafetyNatureItem[];
    cards: ISafetyNatureBlock[];
}

interface IFirstSectionProps {
    content: IFirstSectionContent;
}

const firstSectionIcons = [
    "natureSafetyTrail",
    "natureSafetyFire",
    "natureSafetyTrash",
    "natureSafetyFlora",
    "natureSafetyPets",
    "natureSafetyAnimals",
    "natureSafetyTransport",
];

const firstSectionColumns = [
    [0, 1],
    [2, 3],
    [4, 5, 6],
];

const parksIcons = [
    "natureSafetyTicks",
    "natureSafetyAnimalInfections",
    "natureSafetyQuiet",
    "natureSafetyInfrastructure",
];

const reserveIcons = [
    "natureSafetyTrailRule",
    "natureSafetyDrone",
    "natureSafetyWildlifeDistance",
    "natureSafetyMicroclimate",
];

const waterIcons = [
    "natureSafetyConcreteBanks",
    "natureSafetyCrossing",
    "natureSafetyWaterRise",
    "natureSafetySwimming",
];

const parksImages = [
    paths.cards.firstPresidentPark,
    paths.cards.botanicalGargen,
];

const reserveImages = [
    paths.cards.almatyPreacher,
    paths.cards.ileAlatau,
];

const waterImages = [
    paths.cards.terrenkur,
    paths.cards.esentay,
];

const safetyNatureBlocks = [
    {
        iconId: parksIcons,
        images: parksImages,
        contentSide: "left" as const,
        backgroundColor: "#77BA8FB2",
        titleBackgroundColor: "#9CCFAE",
    },
    {
        iconId: reserveIcons,
        images: reserveImages,
        contentSide: "right" as const,
        backgroundColor: "#4DAC90B2",
        titleBackgroundColor: "#6CC2B4",
    },
    {
        iconId: waterIcons,
        images: waterImages,
        contentSide: "left" as const,
        backgroundColor: "#348F91B2",
        titleBackgroundColor: "#18AFAE",
    },
];



const FirstSection: React.FC<IFirstSectionProps> = ({ content }): ReactElement => {
    const { screenWidth } = usePageData();
    const isMobile = screenWidth <= 900;

    return (
        <section className="safety-nature-first-section">

            <img className="safety-nature-first-plant-bg" src={paths.firstPlant} alt="" />
            <img className="safety-nature-second-plant-bg" src={paths.firstPlant} alt="" />
            <img className="safety-nature-third-plant-bg" src={paths.thirdPlant} alt="" />

            <div className="safety-nature-first-section-heading">
                <h2 className="safety-nature-first-section-title">{content.title}</h2>
                <p className="safety-nature-first-section-description">{content.description}</p>
            </div>

            <div className="safety-nature-cards">
                {isMobile ? (
                    <Carousel className="safety-nature-first-carousel">
                        {content.content.map((card, index) => (
                            <SafetyNatureCard
                                key={card.title}
                                cardContent={card}
                                iconId={firstSectionIcons[index]}
                            />
                        ))}
                    </Carousel>
                ) : (
                    firstSectionColumns.map((column, columnIndex) => (
                        <div className="first-section-cards" key={columnIndex}>
                            {column.map((cardIndex) => (
                                <SafetyNatureCard
                                    key={content.content[cardIndex].title}
                                    cardContent={content.content[cardIndex]}
                                    iconId={firstSectionIcons[cardIndex]}
                                />
                            ))}
                        </div>
                    ))
                )}
            </div>

            <div className="safety-nature-blocks">
                {content.cards.map((block, index) => (
                    <SafetyNatureBlocks
                        key={block.title}
                        title={block.title}
                        content={block.content}
                        iconId={safetyNatureBlocks[index].iconId}
                        images={safetyNatureBlocks[index].images}
                        contentSide={safetyNatureBlocks[index].contentSide}
                        backgroundColor={safetyNatureBlocks[index].backgroundColor}
                        titleBackgroundColor={safetyNatureBlocks[index].titleBackgroundColor}
                    />
                ))}
            </div>
        </section>
    );
};

export default FirstSection;