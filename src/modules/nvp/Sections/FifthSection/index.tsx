import Carousel from "@modules/kazTarih/components/Carousel";
import type {
    INvpEquipmentCardContent,
    INvpEquipmentHotspotContent,
    INvpEquipmentSectionContent,
} from "@modules/nvp/types";
import * as paths from "@modules/nvp/locales/paths.json";
import { usePageData } from "@hooks/usePageData";
import { useState, type CSSProperties, type ReactElement } from "react";
import "./style.css";

interface IFifthSectionProps {
    className?: string;
    content: INvpEquipmentSectionContent;
}

type SoldierIndex = 0 | 1 | 2;
type TooltipPosition = "left" | "right";

interface IHotspotConfig {
    soldierIndex: SoldierIndex;
    top: string;
    left: string;
    tooltipPosition: TooltipPosition;
}

const HOTSPOTS: IHotspotConfig[] = [
    { soldierIndex: 0, top: "31%", left: "30%", tooltipPosition: "right" },
    { soldierIndex: 0, top: "28%", left: "62%", tooltipPosition: "right" },
    { soldierIndex: 1, top: "40%", left: "53%", tooltipPosition: "right" },
    { soldierIndex: 1, top: "7%", left: "51%", tooltipPosition: "right" },
    { soldierIndex: 1, top: "29%", left: "61%", tooltipPosition: "right" },
    { soldierIndex: 1, top: "93%", left: "39%", tooltipPosition: "right" },
    { soldierIndex: 2, top: "6%", left: "44%", tooltipPosition: "right" },
    { soldierIndex: 2, top: "13%", left: "57%", tooltipPosition: "left" },
];

const CARD_FLEX = {
    desktop: "0 0 22%",
    mobile: "0 0 72%",
} as const;

const FifthSection = ({
    className,
    content,
}: IFifthSectionProps): ReactElement => {
    const { isMobile } = usePageData();
    const [selectedHotspotIndex, setSelectedHotspotIndex] = useState<
        number | null
    >(null);

    const handleHotspotClick = (index: number): void => {
        setSelectedHotspotIndex((currentIndex) =>
            currentIndex === index ? null : index,
        );
    };

    const getHotspotsBySoldier = (
        soldierIndex: SoldierIndex,
    ): Array<IHotspotConfig & { index: number; content: INvpEquipmentHotspotContent }> =>
        HOTSPOTS.map((hotspot, index) => ({
            ...hotspot,
            index,
            content: content.hotspots[index],
        })).filter((hotspot) => hotspot.soldierIndex === soldierIndex);

    const renderTooltip = (
        hotspot: IHotspotConfig & {
            index: number;
            content: INvpEquipmentHotspotContent;
        },
        style?: CSSProperties,
    ): ReactElement => (
        <div
            className={`nvp-equipment-tooltip nvp-equipment-tooltip-${hotspot.tooltipPosition}`}
            style={style}
        >
            {hotspot.content.label}
        </div>
    );

    return (
        <section className={className}>
            <div
                className="nvp-fifth-section-content nvp-frame"
                style={{
                    backgroundImage: `linear-gradient(rgba(65, 72, 56, 0.88), rgba(65, 72, 56, 0.88)), url(${paths.background})`,
                }}
            >
                <div className="nvp-fifth-section-header nvp-frame">
                    <span className="nvp-title">{content.title}</span>
                    <span className="nvp-description">
                        {content.description}
                    </span>
                </div>

                <div className="nvp-equipment-stage">
                    <img
                        className="nvp-equipment-map"
                        src={paths.fifthSection.mapFlag}
                        alt=""
                        aria-hidden="true"
                    />

                    <div className="nvp-equipment-soldiers">
                        {paths.fifthSection.soldiers.map(
                            (soldierPath: string, soldierIndex: number) => (
                                <div
                                    className="nvp-equipment-soldier"
                                    key={soldierPath}
                                >
                                    <div className="nvp-equipment-soldier-visual">
                                        <img
                                            className="nvp-equipment-soldier-map"
                                            src={paths.fifthSection.mapFlag}
                                            alt=""
                                            aria-hidden="true"
                                        />

                                        <img
                                            className="nvp-equipment-soldier-img"
                                            src={soldierPath}
                                            alt={`soldier-${soldierIndex + 1}`}
                                        />

                                        {getHotspotsBySoldier(
                                            soldierIndex as SoldierIndex,
                                        ).map((hotspot) => (
                                            <div
                                                className="nvp-equipment-hotspot-wrapper"
                                                key={hotspot.index}
                                                style={{
                                                    top: hotspot.top,
                                                    left: hotspot.left,
                                                }}
                                            >
                                                <button
                                                    className={`nvp-equipment-hotspot ${
                                                        selectedHotspotIndex ===
                                                        hotspot.index
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    type="button"
                                                    aria-label={
                                                        hotspot.content.label
                                                    }
                                                    aria-pressed={
                                                        selectedHotspotIndex ===
                                                        hotspot.index
                                                    }
                                                    onClick={() =>
                                                        handleHotspotClick(
                                                            hotspot.index,
                                                        )
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            paths.fifthSection
                                                                .target
                                                        }
                                                        alt=""
                                                        aria-hidden="true"
                                                    />
                                                </button>

                                                {!isMobile &&
                                                    selectedHotspotIndex ===
                                                        hotspot.index &&
                                                    renderTooltip(hotspot)}
                                            </div>
                                        ))}
                                    </div>

                                    {isMobile &&
                                        getHotspotsBySoldier(
                                            soldierIndex as SoldierIndex,
                                        )
                                            .filter(
                                                (hotspot) =>
                                                    selectedHotspotIndex ===
                                                    hotspot.index,
                                            )
                                            .map((hotspot) => (
                                                <div
                                                    className="nvp-equipment-mobile-tooltip"
                                                    key={`nvp-equipment-mobile-tooltip-${hotspot.index}`}
                                                >
                                                    {renderTooltip(hotspot, {
                                                        position: "relative",
                                                    })}
                                                </div>
                                            ))}
                                </div>
                            ),
                        )}
                    </div>
                </div>

                <div className="nvp-equipment-note nvp-frame">
                    {content.equipmentNote}
                </div>

                <Carousel
                    className="nvp-equipment-carousel"
                    style={{
                        padding: "1rem",
                        backgroundColor: "#292c26",
                        border: "0.0625rem solid #ffffff",
                    }}
                >
                    {content.cards.map(
                        (
                            card: INvpEquipmentCardContent,
                            index: number,
                        ) => (
                            <div
                                className="nvp-equipment-card kaz-tarih-carousel-card"
                                key={`${card.title}-${index}`}
                                style={{
                                    flex: isMobile
                                        ? CARD_FLEX.mobile
                                        : CARD_FLEX.desktop,
                                }}
                            >
                                <div className="nvp-equipment-card-image-wrap">
                                    <img
                                        className="nvp-equipment-card-img"
                                        src={
                                            paths.fifthSection.equipmentCards[
                                                index
                                            ]
                                        }
                                        alt={card.title}
                                    />
                                </div>

                                <div className="nvp-equipment-card-text">
                                    <span className="nvp-equipment-card-title">
                                        {card.title}
                                    </span>
                                    <span>{card.description}</span>
                                </div>
                            </div>
                        ),
                    )}
                </Carousel>
            </div>
        </section>
    );
};

export default FifthSection;
