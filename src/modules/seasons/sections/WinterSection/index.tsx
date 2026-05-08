import { type ReactElement } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import "./style.css";

interface CardContent {
    title?: string;
    subTitle?: string;
    description?: string;
}

interface SeasonData {
    title: string;
    description: string;
    content: CardContent[];
}

interface WinterSectionProps {
    content: SeasonData;
}

const WinterSection = ({ content }: WinterSectionProps): ReactElement => {
    const cards = content.content;
    const firstSectionCards = cards.slice(0, 4);
    const secondSectionCards = cards.slice(5, 8);
    const thirdSectionCardsTitle1 = cards[8]?.title || "";
    const thirdSectionCardsTitle2 = cards[12]?.title || "";
    return (
        <section className="seasons-winter-section">
            <FirstSection title={content.title} description={content.description} content={firstSectionCards} />
            <SecondSection title={content.content[4].title} cards={secondSectionCards} />
            <ThirdSection title={thirdSectionCardsTitle1} secondTitle={thirdSectionCardsTitle2} cards={cards} />
        </section>
    );
};

export default WinterSection;