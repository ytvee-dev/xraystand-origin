import React, { type CSSProperties } from "react";
import './style.css'

interface ContentItem {
  title: string;
  description: string;
  content: string[];
}

interface TextFormatterProps {
  items: ContentItem[];
  theme?: "light" | "dark";
  className?: string;
  style?: CSSProperties;
}

const TextFormatterCard: React.FC<TextFormatterProps> = 
  ({items,
    theme = "light",
    className,
    style }: TextFormatterProps) => {

  return (
    <div 
      className={`text-formatter text-formatter-${theme} ${className}`} 
      style={style}
    >
      {items.map((item, index) => (
        <div key={index} className="text-formatter-block">

          {item.title && (
            <p className={`text-formatter-title
                ${index === 0 && "text-formatter-first-title"}`}>
              {item.title}
            </p>
          )}

          {item.description && (
            <p className="text-formatter-description">
              {item.description}
            </p>
          )}

          {item.content?.length > 0 && (
            <ul className="text-formatter-list">
              {item.content.map((contentItem, contentIndex) => (
                <li key={contentIndex} className="text-formatter-list-item">
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