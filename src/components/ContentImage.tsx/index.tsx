import { contentImageSrcPrefix, contentImageSrcSuffix } from "@utils/constants";
import { type ReactElement } from "react";

export interface IContentImageProps {
    imageId: string;
}

const ContentImage = ({ imageId }: IContentImageProps): ReactElement => {
    const fullImageSrc: string = `${contentImageSrcPrefix}${imageId}${contentImageSrcSuffix}`;

    return (
        <img className="content-image" src={fullImageSrc} alt="content image" />
    );
};

export default ContentImage;
