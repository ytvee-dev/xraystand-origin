import React, {type ReactElement} from "react";
import type {HomeContent} from "../../types";
import "./style.css";

interface DevelopmentSectionProps {
    content: HomeContent;
}

const DevelopmentSection: React.FC<DevelopmentSectionProps> = ({content: _content}): ReactElement => {
    return (
        <section id="home-development" className="home-section development-section">
            DevelopmentSection
        </section>
    );
};

export default DevelopmentSection;