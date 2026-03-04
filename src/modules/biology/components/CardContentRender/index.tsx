import { Fragment } from "react";
import { type ReactElement } from "react";
import "./style.css";

export type ContentItem = {
    type: string;
    description: string | string[];
    marginBottom?: boolean;
    marginTop?: boolean;
};

export type ICardContentProps = {
    items: ContentItem[];
    classNames?: {
        text?: string;
        header?: string;
        description?: string;
        list?: string;
        listItem?: string;
    };
};

const CardContentRender = ({
    items,
    classNames = {},
}: ICardContentProps): ReactElement => {
    return (
        <Fragment>
            {items.map((item, itemIndex) => {
                const marginTop = item.marginTop ? "card-content-margin-top" : "";
                const marginBottom = item.marginBottom ? "card-content-margin-bottom" : "";

                if (item.type === "text") {
                    return (
                        <div
                            key={itemIndex}
                            className={`${classNames.text || ""} ${marginTop} ${marginBottom}`.trim()}
                        >
                            {item.description}
                        </div>
                    );
                }

                if (item.type === "header") {
                    return (
                        <div
                            key={itemIndex}
                            className={`${classNames.header || ""} ${marginTop} ${marginBottom}`.trim()}
                        >
                            {item.description}
                        </div>
                    );
                }

                if (item.type === "description") {
                    return (
                        <div
                            key={itemIndex}
                            className={`${classNames.description || ""} ${marginTop} ${marginBottom}`.trim()}
                        >
                            {item.description}
                        </div>
                    );
                }

                if (item.type === "list") {
                    const listItems = item.description as string[];

                    return (
                        <ul
                            key={itemIndex}
                            className={`${classNames.list || ""} ${marginTop} ${marginBottom} card-content-margin-left`.trim()}
                        >
                            {listItems.map((listItem, listIndex) => (
                                <li
                                    key={listIndex}
                                    className={classNames.listItem || ""}
                                >
                                    {listItem}
                                </li>
                            ))}
                        </ul>
                    );
                }

                return null;
            })}
        </Fragment>
    );
};

export default CardContentRender;