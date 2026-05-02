import {type ReactElement} from "react";
import { type SeasonsProps } from "@modules/seasons/types";
import FirstSection from "./FirstSection";
import "./style.css";

const AutumnSection = ({content}: SeasonsProps): ReactElement => {
    console.log(content.content)
    const cards = content.content;
    const firstSectionCards = cards.slice(0, 4);

    return (
        <section className="seasons-autumn-section">
            <FirstSection title={content.title} description={content.description} content={firstSectionCards}/>
        </section>
    );
};

export default AutumnSection;