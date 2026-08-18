import { type ReactElement } from "react";
import "./style.css";

type THeadingLevel = "h1" | "h2" | "h3";

interface ISectionHeadingPanelProps {
    title: string;
    description: string | string[];
    headingLevel?: THeadingLevel;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    descriptionItemClassName?: string;
}

const SectionHeadingPanel = ({
    title,
    description,
    headingLevel = "h2",
    className = "",
    titleClassName = "",
    descriptionClassName = "",
    descriptionItemClassName = "",
}: ISectionHeadingPanelProps): ReactElement => {
    const Heading = headingLevel;
    const descriptions = Array.isArray(description) ? description : [description];

    const createDescription = (item: string, index: number): ReactElement => (
        <p className={descriptionItemClassName} key={`${index}-${item}`}>
            {item}
        </p>
    );

    return (
        <header className={`ai-profession-heading-panel ${className}`}>
            <Heading className={titleClassName}>{title}</Heading>
            <div className={descriptionClassName}>
                {descriptions.map(createDescription)}
            </div>
        </header>
    );
};

export default SectionHeadingPanel;
