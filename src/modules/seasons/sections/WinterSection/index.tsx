import type { ReactElement } from "react";
import type { SeasonsProps } from "@modules/seasons/types";
import ThirdSection from "./ThirdSection";
import "./style.css";

const WinterSection = ({ content }: SeasonsProps): ReactElement => {
    const cards = content.content;

    return (
        <section className="seasons-winter-sections-bg">
            <ThirdSection
                title={cards[8].title}
                activityCards={cards.slice(9, 12)}
                safetyTitle={cards[12].title}
                safetyCards={cards.slice(13, 17)}
            />
        </section>
    );
};

export default WinterSection;
