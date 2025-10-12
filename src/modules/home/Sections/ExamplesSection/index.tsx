import React, {type ReactElement} from "react";
import type {HomeSection} from "../../types";
import EmblaCarousel from "@modules/home/components/HomeCarousel";
import type {EmblaOptionsType} from "embla-carousel";
import "./style.css";

interface ExamplesSectionProps {
    content: HomeSection;
}

const OPTIONS: EmblaOptionsType = { loop: true }

const ExamplesSection: React.FC<ExamplesSectionProps> = ({content}): ReactElement => {

    return (
        <section id="home-examples" className="home-section examples-section">
            <h2>{content.title}</h2>
            <EmblaCarousel options={OPTIONS} />
        </section>
    );
};

export default ExamplesSection;