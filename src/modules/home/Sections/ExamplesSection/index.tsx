import React, {type ReactElement} from "react";
import type {HomeContent} from "../../types";
import "./style.css";

interface ExamplesSectionProps {
    content: HomeContent;
}

const ExamplesSection: React.FC<ExamplesSectionProps> = ({content: _content}): ReactElement => {
    return (
        <section id="home-examples" className="home-section examples-section">
            ExamplesSection
        </section>
    );
};

export default ExamplesSection;