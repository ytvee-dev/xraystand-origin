import DSNotification from "@components/common/DSNotification";
import { usePageData } from "@hooks/usePageData";
import Carousel from "@modules/kazTarih/components/Carousel";
import { SvgSpriteIds } from "@utils/constants";
import type { ReactElement } from "react";
import * as imagePaths from "@modules/emotionalIntelligence/locales/path.json";
import "./style.css";

interface ICompetencyItem {
    title: string;
    subTitle: string;
    description: string;
}

interface IFirstSectionContent {
    title: string;
    content: ICompetencyItem[];
    emotionDescription: string;
}

interface ICompetencyCard {
    title: string;
    subTitle: string;
    descriptions: string[];
    theme: "self-awareness" | "self-management" | "relationship" | "social";
}

interface IFirstSectionProps {
    className?: string;
    content: IFirstSectionContent;
}

const CARD_THEMES: ICompetencyCard["theme"][] = [
    "self-awareness",
    "self-management",
    "relationship",
    "social",
];

const getFormattedTitle = (title: string): string => {
    return title.replace(/\s*\(/, " (");
};

const splitDescription = (description: string): [string, string] => {
    const separatorIndex = description.indexOf(":");

    if (separatorIndex === -1) {
        return [description, ""];
    }

    return [
        description.slice(0, separatorIndex + 1),
        description.slice(separatorIndex + 1).trimStart(),
    ];
};

const createCompetencyCards = (
    items: ICompetencyItem[],
): ICompetencyCard[] => {
    const cards: ICompetencyCard[] = [];

    items.forEach((item) => {
        if (item.title) {
            cards.push({
                title: item.title,
                subTitle: item.subTitle,
                descriptions: [item.description],
                theme: CARD_THEMES[cards.length] ?? "self-awareness",
            });
            return;
        }

        const activeCard = cards[cards.length - 1];
        activeCard?.descriptions.push(item.description);
    });

    return cards;
};

const CompetencyDescription = ({
    description,
}: {
    description: string;
}): ReactElement => {
    const [label, rest] = splitDescription(description);

    return (
        <>
            <strong>{label}</strong>
            {rest && ` ${rest}`}
        </>
    );
};

const CompetencyCard = ({ card }: { card: ICompetencyCard }): ReactElement => {
    return (
        <article
            className={`ei-competency-card ei-competency-card-${card.theme}`}
        >
            <h3>{getFormattedTitle(card.title)}</h3>
            {card.subTitle && <p className="ei-card-subtitle">{card.subTitle}</p>}

            <ul className="ei-competency-list">
                {card.descriptions.map((description) => (
                    <li key={description}>
                        <CompetencyDescription description={description} />
                    </li>
                ))}
            </ul>
        </article>
    );
};

const DecorativeImages = (): ReactElement => {
    const { backgrounds } = imagePaths;

    return (
        <div className="ei-first-section-decor" aria-hidden="true">
            <img
                className="ei-decor ei-decor-pink-circle"
                src={backgrounds.pink_circle}
                alt=""
            />
            <img
                className="ei-decor ei-decor-pink-figure"
                src={backgrounds.pink_figure}
                alt=""
            />
            <img
                className="ei-decor ei-decor-blue-circle"
                src={backgrounds.blue_circle}
                alt=""
            />
            <img
                className="ei-decor ei-decor-red-figure"
                src={backgrounds.red_circle}
                alt=""
            />
            <img
                className="ei-decor ei-decor-yellow-figure"
                src={backgrounds.yellow_figure}
                alt=""
            />
            <img
                className="ei-decor ei-decor-orange-figure"
                src={backgrounds.orange_figure}
                alt=""
            />
        </div>
    );
};

const DesktopCards = ({
    cards,
}: {
    cards: ICompetencyCard[];
}): ReactElement => {
    return (
        <div className="ei-competencies-desktop-grid">
            <div className="ei-competencies-column">
                {cards[0] && <CompetencyCard card={cards[0]} />}
                {cards[2] && <CompetencyCard card={cards[2]} />}
            </div>
            <div className="ei-competencies-column">
                {cards[1] && <CompetencyCard card={cards[1]} />}
                {cards[3] && <CompetencyCard card={cards[3]} />}
            </div>
        </div>
    );
};

const MobileCards = ({
    cards,
}: {
    cards: ICompetencyCard[];
}): ReactElement => {
    const mobileCards = [cards[0], cards[2], cards[1], cards[3]].filter(
        Boolean,
    ) as ICompetencyCard[];

    return (
        <Carousel className="ei-competencies-carousel" style={{ padding: "0 24px" }}>
            {mobileCards.map((card) => (
                <div
                    className="ei-competencies-slide kaz-tarih-carousel-card"
                    key={card.title}
                >
                    <CompetencyCard card={card} />
                </div>
            ))}
        </Carousel>
    );
};

const FirstSection = ({
    className = "",
    content,
}: IFirstSectionProps): ReactElement => {
    const { isMobile } = usePageData();
    const cards = createCompetencyCards(content.content);

    return (
        <section className={`ei-first-section ${className}`}>
            <DecorativeImages />

            <div className="ei-first-section-content">
                <h2 className="ei-first-section-title">{content.title}</h2>

                {isMobile ? (
                    <MobileCards cards={cards} />
                ) : (
                    <DesktopCards cards={cards} />
                )}

                <DSNotification
                    className="ei-competencies-note"
                    content={content.emotionDescription}
                    iconName={SvgSpriteIds.MOZAYKA}
                    iconWidth="144px"
                    iconHeight="101px"
                    backgroundColor="#EEF6F8"
                    borderColor="#5493CC"
                    borderRadius="25px"
                    textColor="#2F2F2F"
                    fontSize="24px"
                    padding="28px 36px"
                    cardGap="28px"
                    style={{ width: "min(886px, calc(100% - 48px))" }}
                    alertStyle={{ maxWidth: "none" }}
                    fullWidth
                    paragraphWeight={400}
                />
            </div>
        </section>
    );
};

export default FirstSection;
