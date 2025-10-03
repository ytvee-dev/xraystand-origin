import React, {type ReactElement} from "react";
import type {HomeContent} from "../../types";
import "./style.css";

interface AboutSectionProps {
    content: HomeContent;
}

const AboutSection: React.FC<AboutSectionProps> = ({content: _content}): ReactElement => {
    return (
        <section id="home-about" className="home-section about-section">
            AboutSection
        </section>
    );
};

export default AboutSection;