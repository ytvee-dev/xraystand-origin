import imageIdData from "@data/imageSrc.json";
import type { PageIds, PageSectionIds } from "@domains/Translate";

export interface ISectionImageIdData {
    contentListData: string[];
    globalData: string[];
}

const usePageImagesIds = (pageId: PageIds) => {
    return {
        pageImageIdData: imageIdData[pageId] as Record<
            PageSectionIds,
            ISectionImageIdData
        >,
    };
};

export default usePageImagesIds;
