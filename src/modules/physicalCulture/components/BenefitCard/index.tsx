import { type ReactElement } from "react";
import "./style.css";

export interface BenefitListItem {
    title: string;
    description: string;
}

interface BenefitCardProps {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    list?: BenefitListItem[];
    conclusion?: string;
    className?: string;
}

const BenefitListRow = ({ title, description }: BenefitListItem): ReactElement => {
    return (
        <li className="physical-culture-benefit-list-item">
            <p>
                <strong>{title}</strong> {description}
            </p>
        </li>
    );
};

const toBenefitListRow = (item: BenefitListItem): ReactElement => {
    return <BenefitListRow key={item.title} {...item} />;
};

const BenefitCard = ({
    title,
    description,
    image,
    imageAlt = "",
    list,
    conclusion,
    className = "",
}: BenefitCardProps): ReactElement => {
    return (
        <article className={`physical-culture-benefit-card ${className}`.trim()}>
            {image && (
                <img
                    className="physical-culture-benefit-card-image"
                    src={image}
                    alt={imageAlt}
                />
            )}
            <div className="physical-culture-benefit-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                {list && (
                    <ul className="physical-culture-benefit-list">
                        {list.map(toBenefitListRow)}
                    </ul>
                )}
                {conclusion && <p>{conclusion}</p>}
            </div>
        </article>
    );
};

export default BenefitCard;
