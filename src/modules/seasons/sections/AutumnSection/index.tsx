import {type ReactElement} from "react";
import { type SeasonsProps } from "@modules/seasons/types";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import "./style.css";

const AutumnSection = ({content}: SeasonsProps): ReactElement => {
    console.log(content.content)
    const cards = content.content;
    const firstSectionCards = cards.slice(0, 4);
    const secondSectionCards = cards.slice(4, 8);

    return (
        <section className="seasons-autumn-section">
            <FirstSection title={content.title} description={content.description} content={firstSectionCards}/>
            <SecondSection title={secondSectionCards[0].title} cards={secondSectionCards}/>
        </section>
    );
};

export default AutumnSection;