import { type ReactElement } from "react";
import { type SeasonsProps } from "@modules/seasons/types";
import ThirdSection from "./ThirdSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import "./style.css";

const SummerSection = ({ content }: SeasonsProps): ReactElement => {
    const cards = content.content;
    const firstSectionCards = cards.slice(0, 3);
    const secondSectionCards = cards.slice(4, 7);
    const thirdSectionCards = cards.slice(8);

    return (
        <section className="seasons-summer-sections-bg">
            <FirstSection
                title={content.title}
                description={content.description}
                content={firstSectionCards}
            />
            <SecondSection
                title={content.content[3].title}
                cards={secondSectionCards}
            />
            <ThirdSection
                title={content.content[7].title}
                cards={thirdSectionCards}
            />
        </section>
    );
};

export default SummerSection;
