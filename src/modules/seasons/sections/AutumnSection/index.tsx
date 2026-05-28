import { type ReactElement } from "react";
import { type SeasonsProps } from "@modules/seasons/types";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import "./style.css";

const AutumnSection = ({ content }: SeasonsProps): ReactElement => {
    const cards = content.content;
    const firstSectionCards = cards.slice(0, 4);
    const secondSectionCards = cards.slice(5, 8);
    const thirdSectionCards = cards.slice(9);

    return (
        <section className="seasons-autumn-sections-bg">
            <FirstSection
                title={content.title}
                description={content.description}
                content={firstSectionCards}
            />
            <SecondSection
                title={content.content[4].title}
                cards={secondSectionCards}
            />
            <ThirdSection
                title={content.content[8].title}
                cards={thirdSectionCards}
            />
        </section>
    );
};

export default AutumnSection;
