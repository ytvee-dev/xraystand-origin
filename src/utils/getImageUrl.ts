import { contentImageSrcPrefix, contentImageSrcSuffix } from "@utils/constants";

const getImageUrl = (imageId: string): string => `${contentImageSrcPrefix}${imageId}${contentImageSrcSuffix}`;

export default getImageUrl;
