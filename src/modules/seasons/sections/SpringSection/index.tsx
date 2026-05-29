import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import FourthSection from "./FourthSection";
import { type SeasonsProps } from "@modules/seasons/types";
import { type ReactElement } from "react";
import "./style.css";

const SpringSection = ({ content }: SeasonsProps): ReactElement => {
    const cards = content.content;

    const fourthSectionCards = cards.slice(0, 4);
    const fifthSectionCards = cards.slice(5, 8);
    const sixthSectionCards = cards.slice(9);

    return (
        <section className="seasons-spring-sections-bg">
            <FourthSection
                title={content.title}
                description={content.description}
                content={fourthSectionCards}
            />
            <FifthSection
                title=""
                description={cards[4].title}
                content={fifthSectionCards}
            />
            <SixthSection title={cards[8].title} cards={sixthSectionCards} />
        </section>
    );
};

export default SpringSection;
