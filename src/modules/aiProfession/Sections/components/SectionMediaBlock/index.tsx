import { type ReactElement } from "react";
import "./style.css";

export type TSectionMediaPosition = "left" | "right";

interface ISectionMediaBlockProps {
    title: string;
    description: string;
    image: string;
    imagePosition: TSectionMediaPosition;
    className?: string;
}

const SectionMediaBlock = ({
    title,
    description,
    image,
    imagePosition,
    className = "",
}: ISectionMediaBlockProps): ReactElement => {
    return (
        <article
            className={`ai-profession-media-block ai-profession-media-block-${imagePosition} ${className}`}
        >
            <div className="ai-profession-media-block-text">
                <h3 className="ai-profession-media-block-title">{title}</h3>
                <p className="ai-profession-media-block-description">{description}</p>
            </div>
            <img
                className="ai-profession-media-block-image"
                src={image}
                alt=""
                aria-hidden="true"
            />
        </article>
    );
};

export default SectionMediaBlock;
