import type { ReactElement } from "react";

interface ICardContentRendererTextItemProps {
    className: string;
    text: string;
}

const CardContentRendererTextItem = ({
    className = "",
    text,
}: ICardContentRendererTextItemProps): ReactElement => {
    return <div className={className}>{text}</div>;
};

export default CardContentRendererTextItem;
