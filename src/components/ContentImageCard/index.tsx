import {type ReactElement, type ReactNode} from "react";
import {
    contentImageSrcPrefix,
    contentImageSrcSuffix,
} from "@utils/constants";
import "./style.css";

export interface IContentImageCardProps {
    imageId: string;
    title?: string,
    label?: string;
    linkText?: string;
    action?: () => void;
}

const ContentImageCard = ({
    imageId,
    title="",
    label="",
    linkText="",
    action=() => {},
}: IContentImageCardProps): ReactNode => {

    console.log("IMAGE", `${contentImageSrcPrefix}${imageId}${contentImageSrcSuffix}`)

    const ImageBlock = ({imagePath}: {imagePath: string}): ReactElement => {
        return (
            <div className="content-image-card-image-container">
                <img
                    className="content-image-card-image"
                    src={imagePath}
                    alt="content image"
                />
            </div>
        );
    }
    const DescriptionBlock = (): ReactElement => {
        return (
            <div className="content-image-card-description-container">
                <h3 className="content-image-card-title">{title}</h3>
                <p className="content-image-card-label">{label}</p>
                {linkText && <button onClick={action}>{linkText}</button>}
            </div>
        );
    }

    return (
        <div className="content-image-card">
            <ImageBlock imagePath={`${contentImageSrcPrefix}${imageId}${contentImageSrcSuffix}`}/>
            {(title || label || linkText) && <DescriptionBlock />}
        </div>
    );
};

export default ContentImageCard;
