import { contentImageSrcPrefix, contentImageSrcSuffix } from "@utils/constants";
import { type ReactElement } from "react";

export interface IContentImageProps {
    imageId: string;
    maxWidth?: string;
}

const DEFAULT_CONTENT_IMAGE_MAX_WIDTH: string = "100%";

const ContentImage = ({
    imageId,
    maxWidth = DEFAULT_CONTENT_IMAGE_MAX_WIDTH,
}: IContentImageProps): ReactElement => {
    const fullImageSrc: string = `${contentImageSrcPrefix}${imageId}${contentImageSrcSuffix}`;

    return (
        <img
            className="content-image"
            style={{ maxWidth }}
            src={fullImageSrc}
            alt="content image"
        />
    );
};

export default ContentImage;
