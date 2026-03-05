import { Fragment } from "react";
import { type ReactElement } from "react";
import "./style.css";
import CardContentRendererTextItem from "../CardContentRenderTextItem";
import CardContentRendererList from "../CardContentRenderList";

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
                const marginTopClassName = item.marginTop
                    ? "card-content-margin-top"
                    : "";
                const marginBottomClassName = item.marginBottom
                    ? "card-content-margin-bottom"
                    : "";

                if (item.type === "text") {
                    return (
                        <CardContentRendererTextItem
                            className={`${classNames.text || ""} ${marginTopClassName} ${marginBottomClassName}`}
                            text={item.description as string}
                            key={itemIndex}
                        />
                    );
                }

                if (item.type === "header") {
                    return (
                        <CardContentRendererTextItem
                            className={`${classNames.header || ""} ${marginTopClassName} ${marginBottomClassName}`}
                            text={item.description as string}
                            key={itemIndex}
                        />
                    );
                }

                if (item.type === "list") {
                    return (
                        <CardContentRendererList
                            className={`${classNames.list || ""} ${marginTopClassName} ${marginBottomClassName} card-content-margin-left`}
                            listContent={item.description as string[]}
                            key={itemIndex}
                        />
                    );
                }

                return null;
            })}
        </Fragment>
    );
};

export default CardContentRender;
