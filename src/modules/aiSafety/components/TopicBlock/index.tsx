import type { ReactElement } from "react";
import "./style.css";

type TopicListItem = {
  highlightedText: string;
  text: string;
};

type TopicBlockProps = {
  title: string;
  description: string;
  image?: string;
  imagePosition?: "left" | "right";
  listDescription?: string;
  list?: TopicListItem[];
};

function hasListContent(item: TopicListItem): boolean {
  return (
    item.highlightedText.trim() !== "" ||
    item.text.trim() !== ""
  );
}

const TopicBlock = ({
  title,
  description,
  image,
  imagePosition = "left",
  listDescription,
  list,
}: TopicBlockProps): ReactElement => {

  const filteredList = list?.filter(hasListContent) ?? [];

  return (
    <div className={`topic-block topic-block--${imagePosition}`}>
      {image && (
        <img className="topic-block-image" src={image} alt={title} />
      )}

      <div className="topic-block-content">
        <h3 className="topic-block-title">{title}</h3>
        <p className="topic-block-description">{description}</p>

        {listDescription && (
          <p className="topic-block-list-description">{listDescription}</p>
        )}

        {filteredList.length > 0 && (
          <ul className="topic-block-list">
            {filteredList.map((item, index) => (
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