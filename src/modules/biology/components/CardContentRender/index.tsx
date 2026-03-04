import { Fragment } from "react";
import { type ReactElement } from "react";

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
    styleConfig?: {
        marginTopValue?: string;
        marginBottomValue?: string;
        listMarginLeft?: string;
    };
};

const CardContentRender = ({
    items,
    classNames = {},
    styleConfig = {},
}: ICardContentProps): ReactElement => {
    const {
        marginTopValue = "1rem",
        marginBottomValue = "1rem",
        listMarginLeft = "1.875rem",
    } = styleConfig;

    return (
        <Fragment>
            {items.map((item, itemIndex) => {
                const marginTop = item.marginTop ? marginTopValue : "0";
                const marginBottom = item.marginBottom
                    ? marginBottomValue
                    : "0";

                if (item.type === "text") {
                    return (
                        <div
                            key={itemIndex}
                            className={classNames.text || ""}
                            style={{ marginTop, marginBottom }}
                        >
                            {item.description}
                        </div>
                    );
                }

                if (item.type === "header") {
                    return (
                        <div
                            key={itemIndex}
                            className={classNames.header || ""}
                            style={{ marginTop, marginBottom }}
                        >
                            {item.description}
                        </div>
                    );
                }

                if (item.type === "description") {
                    return (
                        <div
                            key={itemIndex}
                            className={classNames.description || ""}
                            style={{ marginTop, marginBottom }}
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
                            className={classNames.list || ""}
                            style={{
                                marginTop,
                                marginBottom,
                                marginLeft: listMarginLeft,
                            }}
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
