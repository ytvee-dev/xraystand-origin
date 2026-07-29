import React, { type CSSProperties } from "react";
import { type ICardsParagraphs } from "@modules/kazTarih/types/index";
import "./style.css";

interface TextFormatterProps {
    items: ICardsParagraphs[];
    theme?: "light" | "dark" | "other";
    className?: string;
    style?: CSSProperties;
    img?: null | string;
    imgClassName?: string;
}
  
interface CardsWithParagraphs {
  title: string,
  highlightedText: string,
  description: string[],
  content: string[]
}

const TextFormatterCard: React.FC<TextFormatterProps> = ({
  items,
  theme = "light",
  className,
  style,
  img,
  imgClassName
}: TextFormatterProps) => {
  
  const itemsWithParagraphs: CardsWithParagraphs[] = items.map(item => ({
    title: item.title,
    highlightedText: item.highlightedText,
    description:  item.description.split("\n"),
    content: item.content
  }));

  return (
    <div 
      className={`text-formatter text-formatter-${theme} ${className}`} 
      style={style}
    >
      {itemsWithParagraphs.map((item, index) => (
          <div key={index} className="text-formatter-block">
            {item.title.trim().length > 0 && (
              <p className={`text-formatter-title
                  ${index === 0 && "text-formatter-first-title"}`}>
                {item.title}
              </p>
            )}

            <div className="text-formatter-content-wrapper">
              <div className="text-formatter-content">
                {item.description.length > 0 &&
                  <div className="text-formatter-paragraph-wrapper">
                    {item.highlightedText && 
                      item.highlightedText.trim().length > 0 && 
                        <strong className="text-formatter-highlighted-text">
                          {item.highlightedText}
                        </strong>
                    }
                      
                    {item.description.map(item => 
                        <p key={item}>
                          {item}
                        </p>
                    )}
                  </div>
                }

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
              
              {img && img.trim().length > 0 &&
                <img src={img} alt="" className={`text-formatter-img ${imgClassName}`}/>
              }
            </div>
          </div>
        ))}
    </div>
    );
};

export default TextFormatterCard;
