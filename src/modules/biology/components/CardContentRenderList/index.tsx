import type { ReactElement } from "react";

interface ICardContentRendererListProps {
    className: string;
    listContent: string[];
}

const CardContentRendererList = ({
    className = "",
    listContent,
}: ICardContentRendererListProps): ReactElement => {
    return (
        <ul className={className}>
            {listContent.map((listItem, listIndex) => (
                <li key={listIndex}>{listItem}</li>
            ))}
        </ul>
    );
};

export default CardContentRendererList;
