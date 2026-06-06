import React, { type CSSProperties } from "react";
import { type ICardsParagraphs } from "@modules/kazTarih/types/index";
import "./style.css";

interface TextFormatterProps {
    items: ICardsParagraphs[];
    theme?: "light" | "dark";
    className?: string;
    style?: CSSProperties;
}

const TextFormatterCard: React.FC<TextFormatterProps> = ({
    items,
    theme = "light",
    className,
    style,
}: TextFormatterProps) => {
    return (
        <div
            className={`text-formatter text-formatter-${theme} ${className}`}
            style={style}
        >
            {items.map((item, index) => (
                <div key={index} className="text-formatter-block">
                    {item.title && (
                        <p
                            className={`text-formatter-title
                ${index === 0 && "text-formatter-first-title"}`}
                        >
                            {item.title}
                        </p>
                    )}

                    {item.description && (
                        <p className="text-formatter-description">
                            {item.description}
                        </p>
                    )}
                    {item.description && (
                        <p className="text-formatter-description">
                            <strong>{item.highlightedText}</strong>
                            {item.description}
                        </p>
                    )}

                    {item.content?.length > 0 && (
                        <ul className="text-formatter-list">
                            {item.content.map((contentItem, contentIndex) => (
                                <li
                                    key={contentIndex}
                                    className="text-formatter-list-item"
                                >
                                    {contentItem}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TextFormatterCard;
