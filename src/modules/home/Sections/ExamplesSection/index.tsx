import React, {type ReactElement} from "react";
import type {HomeSection} from "../../types";
import "./style.css";

interface ExamplesSectionProps {
    content: HomeSection;
}

const ExamplesSection: React.FC<ExamplesSectionProps> = ({content: _content}): ReactElement => {

    return (
        <section id="home-examples" className="home-section examples-section">

        </section>
    );
};

export default ExamplesSection;