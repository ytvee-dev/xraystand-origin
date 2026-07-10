import { usePageData } from "@hooks/usePageData";
import Carousel from "@modules/kazTarih/components/Carousel";
import type { ReactElement } from "react";
import * as imagePaths from "@modules/emotionalIntelligence/locales/path.json";
import "./style.css";

interface ISectionContentItem {
    title: string;
    subTitle: string;
    description: string;
}

interface IIntroContent {
    title: string;
    subTitle: string;
    content: ISectionContentItem[];
}

interface ICardsContent {
    title: string;
    subTitle: string;
    content: ISectionContentItem[];
}

interface IFourthSectionProps {
    introContent: IIntroContent;
    cardsContent: ICardsContent;
}

type TChildCardTheme = "social" | "awareness" | "support" | "example" | "navigation";

interface IChildCard {
    id: string;
    title: string;
    description: string;
    theme: TChildCardTheme;
}

const CARD_THEMES: TChildCardTheme[] = [
    "social",
    "awareness",
    "support",
    "example",
    "navigation",
];

const DESKTOP_LEFT_CARD_INDEXES: number[] = [0, 2];
const DESKTOP_MIDDLE_CARD_INDEXES: number[] = [1, 4];
const DESKTOP_RIGHT_CARD_INDEXES: number[] = [3];
const MOBILE_CARD_INDEXES: number[] = [0, 4, 1, 2, 3];

const createChildCards = (items: ISectionContentItem[]): IChildCard[] => {
    const cards: IChildCard[] = [];

    for (let index = 0; index < items.length; index += 1) {
        const item = items[index];

        if (!item) {
            continue;
        }

        cards.push({
            id: `child-card-${index}`,
            title: item.title,
            description: item.description,
            theme: CARD_THEMES[index] ?? "social",
        });
    }

    return cards;
};

const getCardsByIndexes = (
    cards: IChildCard[],
    indexes: number[],
): IChildCard[] => {
    const selectedCards: IChildCard[] = [];

    for (const index of indexes) {
        const card = cards[index];

        if (card) {
            selectedCards.push(card);
        }
    }

    return selectedCards;
};

const ChildCard = ({ card }: { card: IChildCard }): ReactElement => {
    return (
        <article className={`ei-child-card ei-child-card-${card.theme}`}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </article>
    );
};

const createChildCardElement = (card: IChildCard): ReactElement => {
    return <ChildCard key={card.id} card={card} />;
};

const createIntroParagraph = (item: ISectionContentItem): ReactElement => {
    return <p key={item.description}>{item.description}</p>;
};

const DecorativeImages = (): ReactElement => {
    const { backgrounds } = imagePaths;

    return (
        <div className="ei-child-decor" aria-hidden="true">
            <img className="ei-child-decor-red" src={backgrounds.red_circle} alt="" />
            <img className="ei-child-decor-yellow" src={backgrounds.yellow_circle} alt="" />
            <img className="ei-child-decor-orange" src={backgrounds.orange_circle} alt="" />
        </div>
    );
};

const DesktopCards = ({ cards }: { cards: IChildCard[] }): ReactElement => {
    const leftCards = getCardsByIndexes(cards, DESKTOP_LEFT_CARD_INDEXES);
    const middleCards = getCardsByIndexes(cards, DESKTOP_MIDDLE_CARD_INDEXES);
    const rightCards = getCardsByIndexes(cards, DESKTOP_RIGHT_CARD_INDEXES);

    return (
        <div className="ei-child-desktop-grid">
            <div className="ei-child-card-column ei-child-card-column-left">
                {leftCards.map(createChildCardElement)}
                <img
                    className="ei-child-column-illustration ei-child-illustration-boy"
                    src={imagePaths.people.boy}
                    alt=""
                    aria-hidden="true"
                />
            </div>

            <div className="ei-child-card-column ei-child-card-column-middle">
                {middleCards.slice(0, 1).map(createChildCardElement)}
                <img
                    className="ei-child-column-illustration ei-child-illustration-children"
                    src={imagePaths.people.children}
                    alt=""
                    aria-hidden="true"
                />
                {middleCards.slice(1).map(createChildCardElement)}
            </div>

            <div className="ei-child-card-column ei-child-card-column-right">
                <img
                    className="ei-child-column-illustration ei-child-illustration-girl"
                    src={imagePaths.people.girl}
                    alt=""
                    aria-hidden="true"
                />
                {rightCards.map(createChildCardElement)}
            </div>
        </div>
    );
};

const createChildCardSlide = (card: IChildCard): ReactElement => {
    return (
        <div className="ei-child-card-slide kaz-tarih-carousel-card" key={card.id}>
            <ChildCard card={card} />
        </div>
    );
};

const MobileCards = ({ cards }: { cards: IChildCard[] }): ReactElement => {
    return (
        <>
            <Carousel className="ei-child-carousel" style={{ padding: "0 20px" }}>
                {cards.map(createChildCardSlide)}
            </Carousel>
            <img
                className="ei-child-mobile-illustration"
                src={imagePaths.people.girl}
                alt=""
                aria-hidden="true"
            />
        </>
    );
};

const FourthSection = ({
    introContent,
    cardsContent,
}: IFourthSectionProps): ReactElement => {
    const { isMobile } = usePageData();
    const cards = createChildCards(cardsContent.content);
    const mobileCards = getCardsByIndexes(cards, MOBILE_CARD_INDEXES);

    return (
        <section className="ei-fourth-section">
            <DecorativeImages />
            <div className="ei-fourth-section-content">
                <header className="ei-child-section-header">
                    <h2>{introContent.title}</h2>
                    <p>{introContent.subTitle}</p>
                </header>

                <div className="ei-child-overview">
                    <div className="ei-child-overview-copy">
                        {introContent.content.map(createIntroParagraph)}
                    </div>
                    <img
                        className="ei-child-overview-image"
                        src={imagePaths.people.people}
                        alt=""
                        aria-hidden="true"
                    />
                </div>

                <h2 className="ei-child-cards-title">{cardsContent.title}</h2>

                {isMobile ? (
                    <MobileCards cards={mobileCards} />
                ) : (
                    <DesktopCards cards={cards} />
                )}
            </div>
        </section>
    );
};

export default FourthSection;
