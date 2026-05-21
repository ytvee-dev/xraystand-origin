import "./style.css";

export interface IImageCardProps {
    id?: string;
    title: string;
    description: string;
    imagePath: string;
    season?: "spring" | "summer" | "autumn" | "winter";
    className?: string;
}

const ImageCard = ({
    id,
    title,
    description,
    imagePath,
    season,
    className = "",
}: IImageCardProps) => {
    return (
        <div
            id={id || ""}
            className={`image-card ${season ? `image-card-${season}` : ""} ${className}`}
        >
            <div className="image-card-image">
                <img src={imagePath} alt="" />
            </div>
            <div className="image-card-text">
                <h3>{title}</h3>

                <p>{description}</p>
            </div>
        </div>
    );
};

export default ImageCard;
