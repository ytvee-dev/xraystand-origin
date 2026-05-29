import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import { type SeasonsProps } from "@modules/seasons/types";
import { type ReactElement } from "react";
import "./style.css";

const WinterSection = ({ content }: SeasonsProps): ReactElement => {
    const cards = content.content;

    const firstSectionCards = cards.slice(0, 4);
    const secondSectionCards = cards.slice(5, 8);

    return (
        <section className="seasons-winter-sections-bg">
            <FirstSection
                title={content.title}
                description={content.description}
                content={firstSectionCards}
            />
            <SecondSection
                title=""
                description={cards[4].title}
                content={secondSectionCards}
            />
        </section>
    );
};

export default WinterSection;
