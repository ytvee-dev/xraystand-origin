import { type ReactElement } from "react";
import "./style.css";

interface MythCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const MythCard = ({
    title,
    description,
    imageUrl,
}: MythCardProps): ReactElement => {
    return (
        <article className="ecology-myth-card">
            <h2>{title}</h2>
            <img src={imageUrl} alt="" />
            <p>{description}</p>
        </article>
    );
};

export default MythCard;
