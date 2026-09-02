import type { ReactElement } from "react";

import "./style.css";

type TopicBlockProps = {
  title: string;
  description: string;
  image?: string;
  imagePosition?: "left" | "right";
  listDescription?: string;
  list?: {
    highlightedText: string;
    text: string;
  }[];
};

const TopicBlock = ({
  title,
  description,
  image,
  imagePosition = "left",
  listDescription,
  list,
}: TopicBlockProps): ReactElement => {
  return (
    <div className={`topic-block topic-block--${imagePosition}`}>
      {image && (
        <img className="topic-block-image" src={image} alt=""/>
      )}

      <div className="topic-block-content">
        <h3 className="topic-block-title">{title}</h3>

        <p className="topic-block-description">{description}</p>

        {listDescription && (
          <p className="topic-block-list-description">{listDescription}</p>
        )}

        {list && (
          <ul className="topic-block-list">
            {list.map((item, index) => (
              <li key={index}>
                <strong>{item.highlightedText}</strong>{" "}
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopicBlock;