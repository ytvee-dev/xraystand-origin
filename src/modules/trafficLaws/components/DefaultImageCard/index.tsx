import { type ReactElement } from "react";
import Button from '@mui/material/Button';
import { getImageUrl } from "@utils/constants";
import "./style.css";

export interface IContentImageCardProps {
    imageId?: string;
    title?: string;
    label?: string;
    linkText?: string;
    action?: () => void;
    smallImageSizes?: boolean;
    backgroundColor?: string;
}

const DefaultImageCard = ({
    imageId,
    title = "",
    label = "",
    linkText = "",
    action = () => {},
    smallImageSizes=false,
    backgroundColor = "#FFFFFF",
}: IContentImageCardProps): ReactElement => {
    const isList = label.includes("•");
    const labelItems = isList ? label.split("•").map(item => item.trim()) : [];

    const renderImage = (): ReactElement | null => {
        if (!imageId) return null;
        const imagePath = getImageUrl(imageId);

        return (
            <div
                className={`default-image-card-image-container image-size-${smallImageSizes ? "small" : "normal"}`}
                style={{ backgroundColor }}
            >
                <img
                    className="content-image-card-image"
                    src={imagePath}
                    alt="content image"
                />
            </div>
        );
    };

    const renderLabel = (): ReactElement => {
        return isList ? (
            <ol className="default-image-card-ol-container">
                {labelItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        ) : (
            <p className="default-image-card-label">{label}</p>
        );
    };

    const renderDescription = (): ReactElement | null => {
        if (!title && !label && !linkText) return null;
        return (
            <div className="default-image-card-description-container">
                {title && <h4 className="default-image-card-title">{title}</h4>}
                {label && renderLabel()}
                {linkText && <Button size="small" onClick={action}>{linkText}</Button>}
            </div>
        );
    };

    return (
        <div className="default-image-card">
            {renderImage()}
            {renderDescription()}
        </div>
    );
};

export default DefaultImageCard;
