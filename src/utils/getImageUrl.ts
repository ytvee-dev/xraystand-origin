import { contentImageSrcPrefix, contentImageSrcSuffix } from "@utils/constants";

const getImageUrl = (id: string): string => {
    return `${contentImageSrcPrefix}${id}${contentImageSrcSuffix}`;
};

export default getImageUrl;
