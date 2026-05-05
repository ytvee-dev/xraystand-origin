import "./style.css";

export interface ICardProps {
  title?: string;
  subTitle?: string;
  description: string;
  imagePath?: string;
  reverse?: boolean;
  season?: "spring" | "summer" | "autumn" | "winter";
  className?: string;
  height?: "min" | "max"
}

const Card = ({
  title,
  subTitle,
  description,
  imagePath,
  reverse = false,
  season = "summer",
  className = "",
  height = "max"
}: ICardProps) => {
  const hasImage = !!imagePath;

  return (
    <div 
      className={`card card-${season} ${reverse ? "card-reverse" : ""} 
      ${hasImage ? "card-with-image" : "card-only-text"} ${className}
      ${height}`}
    >
      <div className="card-text">
        <h3>{title}</h3>
        <h3>{subTitle}</h3>
        <p>{description}</p>
      </div>

      {hasImage && (
        <div className="card-image">
          <img src={imagePath} alt="" />
        </div>
      )}
    </div>
  );
};

export default Card;
