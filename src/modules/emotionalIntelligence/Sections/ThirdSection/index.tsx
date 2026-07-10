import { usePageData } from "@hooks/usePageData";
import Carousel from "@modules/kazTarih/components/Carousel";
import type { ReactElement } from "react";
import * as imagePaths from "@modules/emotionalIntelligence/locales/path.json";
import "./style.css";

interface IThirdSectionItem {
    title: string;
    subTitle: string;
    description: string;
}

interface IThirdSectionContent {
    title: string;
    subTitle: string;
    content: IThirdSectionItem[];
}

interface IThirdSectionProps {
    className?: string;
    content: IThirdSectionContent;
}

type TGrowthCardTheme =
    | "self-awareness"
    | "sleep"
    | "mindfulness"
    | "empathy"
    | "self-control";

interface IGroupedGrowthCard {
    id: string;
    title: string;
    descriptions: string[];
}

interface IGrowthCard extends IGroupedGrowthCard {
    theme: TGrowthCardTheme;
    imageSource: string;
}

const CARD_THEMES: TGrowthCardTheme[] = [
    "self-awareness",
    "sleep",
    "mindfulness",
    "empathy",
    "self-control",
];

const CARD_IMAGE_INDEXES: number[] = [0, 1, 3, 2, 4];
const DESKTOP_LEFT_CARD_INDEXES: number[] = [0, 2];
const DESKTOP_RIGHT_CARD_INDEXES: number[] = [1, 3, 4];
const MOBILE_CARD_INDEXES: number[] = [0, 1, 3, 2, 4];

const formatCardTitle = (title: string): string => {
    return title.replace(/\s*\(/, " (");
};

const createGrowthCards = (
    items: IThirdSectionItem[],
    imageSources: string[],
): IGrowthCard[] => {
    const groupedCards: IGroupedGrowthCard[] = [];

    for (const item of items) {
        if (item.title.trim()) {
            groupedCards.push({
                id: `growth-card-${groupedCards.length}`,
                title: item.title,
                descriptions: [item.description],
            });
            continue;
        }

        const activeCard = groupedCards[groupedCards.length - 1];
        activeCard?.descriptions.push(item.description);
    }

    const cards: IGrowthCard[] = [];

    for (let index = 0; index < groupedCards.length; index += 1) {
        const groupedCard = groupedCards[index];

        if (!groupedCard) {
            continue;
        }

        const imageIndex = CARD_IMAGE_INDEXES[index] ?? index;
        const theme = CARD_THEMES[index] ?? "self-awareness";

        cards.push({
            ...groupedCard,
            theme,
            imageSource: imageSources[imageIndex] ?? "",
        });
    }

    return cards;
};

const getCardsByIndexes = (
    cards: IGrowthCard[],
    indexes: number[],
): IGrowthCard[] => {
    const selectedCards: IGrowthCard[] = [];

    for (const index of indexes) {
        const card = cards[index];

        if (card) {
            selectedCards.push(card);
        }
    }

    return selectedCards;
};

const GrowthCard = ({ card }: { card: IGrowthCard }): ReactElement => {
    return (
        <article className={`ei-growth-card ei-growth-card-${card.theme}`}>
            <h3>{formatCardTitle(card.title)}</h3>
            <div className="ei-growth-card-body">
                <img src={card.imageSource} alt="" />
                <ul>
                    {card.descriptions.map((description) => (
                        <li key={description}>{description}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

const createGrowthCardElement = (card: IGrowthCard): ReactElement => {
    return <GrowthCard key={card.id} card={card} />;
};

const DesktopCards = ({
    leftCards,
    rightCards,
}: {
    leftCards: IGrowthCard[];
    rightCards: IGrowthCard[];
}): ReactElement => {
    return (
        <div className="ei-growth-desktop-grid">
            <div className="ei-growth-card-column">
                {leftCards.map(createGrowthCardElement)}
            </div>
            <div className="ei-growth-card-column">
                {rightCards.map(createGrowthCardElement)}
            </div>
        </div>
    );
};

const createGrowthCardSlide = (card: IGrowthCard): ReactElement => {
    return (
        <div
            className="ei-growth-card-slide kaz-tarih-carousel-card"
            key={card.id}
        >
            <GrowthCard card={card} />
        </div>
    );
};

const MobileCards = ({ cards }: { cards: IGrowthCard[] }): ReactElement => {
    return (
        <Carousel
            className="ei-growth-carousel"
            style={{ padding: "0 20px" }}
        >
            {cards.map(createGrowthCardSlide)}
        </Carousel>
    );
};

const DecorativeImages = (): ReactElement => {
    const { backgrounds } = imagePaths;

    return (
        <div className="ei-growth-decor" aria-hidden="true">
            <img
                className="ei-growth-decor-yellow"
                src={backgrounds.yellow_circle}
                alt=""
            />
            <img
                className="ei-growth-decor-orange"
                src={backgrounds.orange_circle}
                alt=""
            />
            <img
                className="ei-growth-decor-red"
                src={backgrounds.red_circle}
                alt=""
            />
        </div>
    );
};

const ThirdSection = ({
    className = "",
    content,
}: IThirdSectionProps): ReactElement => {
    const { isMobile } = usePageData();
    const cards = createGrowthCards(content.content, imagePaths.cards);
    const leftCards = getCardsByIndexes(cards, DESKTOP_LEFT_CARD_INDEXES);
    const rightCards = getCardsByIndexes(cards, DESKTOP_RIGHT_CARD_INDEXES);
    const mobileCards = getCardsByIndexes(cards, MOBILE_CARD_INDEXES);

    return (
        <section className={`ei-third-section ${className}`}>
            <DecorativeImages />
            <div className="ei-third-section-content">
                <header className="ei-growth-section-header">
                    <h2>{content.title}</h2>
                    <p>{content.subTitle}</p>
                </header>

                {isMobile ? (
                    <MobileCards cards={mobileCards} />
                ) : (
                    <DesktopCards
                        leftCards={leftCards}
                        rightCards={rightCards}
                    />
                )}
            </div>
        </section>
    );
};

export default ThirdSection;
