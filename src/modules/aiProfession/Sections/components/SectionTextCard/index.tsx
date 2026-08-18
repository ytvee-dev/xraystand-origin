import { type ReactElement } from "react";

interface ISectionTextCardProps {
    title: string;
    description: string;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

const SectionTextCard = ({
    title,
    description,
    className = "",
    titleClassName = "",
    descriptionClassName = "",
}: ISectionTextCardProps): ReactElement => {
    return (
        <article className={className}>
            <h3 className={titleClassName}>{title}</h3>
            <p className={descriptionClassName}>{description}</p>
        </article>
    );
};

export default SectionTextCard;
