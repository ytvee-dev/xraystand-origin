import { type ReactElement } from "react";
import "./style.css";

interface IconListCardProps {
    title: string;
    list: string[];
    icons: string[];
    className?: string;
    rowClassName?: string;
}

const IconListCard = ({
    title,
    list,
    icons,
    className = "",
    rowClassName = "",
}: IconListCardProps): ReactElement => {
    const toListRow = (text: string, index: number): ReactElement => {
        const icon = icons[index] ?? icons[0];

        return (
            <li
                className={`physical-culture-icon-list-row ${rowClassName}`.trim()}
                key={text}
            >
                <img src={icon} alt="" />
                <span>{text}</span>
            </li>
        );
    };

    return (
        <article
            className={`physical-culture-icon-list-card ${className}`.trim()}
        >
            <h3>{title}</h3>
            <ul>{list.map(toListRow)}</ul>
        </article>
    );
};

export default IconListCard;
