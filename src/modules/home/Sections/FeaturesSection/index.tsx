import React, {type ReactElement} from "react";
import type {HomeContent} from "../../types";
import "./style.css";

interface FeaturesSectionProps {
    content: HomeContent;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({content: _content}): ReactElement => {
    return (
        <section id="home-features" className="home-section features-section">
            FeaturesSection
        </section>
    );
};

export default FeaturesSection;