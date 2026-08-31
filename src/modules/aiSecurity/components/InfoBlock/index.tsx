import React, { type ReactElement } from "react";
import "./style.css";

type InfoBlockProps = {
  title: string;
  description: string;
  image: string;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ title, description, image }): ReactElement => {
  return (
    <div className="info-block">
      <img className="info-block-image" src={image}/>

      <div className="info-block-content">
        <h3 className="info-block-title">{title}</h3>
        <p className="info-block-description">{description}</p>
      </div>
    </div>
  );
};

export default InfoBlock;