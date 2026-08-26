import React, { type ReactElement } from "react";

import "./style.css";

interface ISafetyNatureHeadingProps {
    title: string;
    description: string;
    titleColor: string;
    descriptionColor: string;
    backgroundColor: string;
}

const SafetyNatureHeading: React.FC<ISafetyNatureHeadingProps> = ({
    title,
    description,
    titleColor,
    descriptionColor,
    backgroundColor
}): ReactElement => {
    return (
        <div className="safety-nature-heading ai-profession-glass-surface" style={{ backgroundColor }}>
            <h2 className="safety-nature-heading-title" style={{ color: titleColor }}>
                {title}
            </h2>

            <p className="safety-nature-heading-description" style={{ color: descriptionColor }}>
                {description}
            </p>
        </div>
    );
};

export default SafetyNatureHeading;