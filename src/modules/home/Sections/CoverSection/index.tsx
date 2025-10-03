import React, {type ReactElement} from "react";
import type {CoverSectionProps} from "../../types";
import "./style.css";

const CoverSection: React.FC<CoverSectionProps> = ({content: _content}): ReactElement => {
    return (
        <section id="home-welcome" className="home-section cover-section">
            CoverSection
        </section>
    );
};

export default CoverSection;