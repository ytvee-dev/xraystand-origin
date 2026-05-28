import FirstSection from "./FirstSection";
import { type SeasonsProps } from "@modules/seasons/types";
import { type ReactElement } from "react";
import "./style.css";

const WinterSection = ({ content }: SeasonsProps): ReactElement => {
    const cards = content.content;

    const firstSectionCards = cards.slice(0, 4);
    // const secondSectionCards = cards.slice(5, 8);
    // const thirdSectionCards = cards.slice(9);

    return (
        <section className="seasons-winter-sections-bg">
            <FirstSection
                title={content.title}
                description={content.description}
                content={firstSectionCards}
            />
        </section>
    );
};

export default WinterSection;
