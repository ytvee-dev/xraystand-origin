import imageIdData from "../data/imageSrc.json";
import type { PageIds, PageSectionIds } from "../domains/Translate";

export interface ISectionImageIdData {
  contentListData: string[];
  globalData: string[];
}

const usePageImagesIds = (pageId: PageIds) => {
  if (pageId in imageIdData) {
    return {
      pageImageIdData: imageIdData[
        pageId as keyof typeof imageIdData
      ] as Record<PageSectionIds, ISectionImageIdData>,
    };
  }

  return {
    pageImageIdData: undefined,
  };
};

export default usePageImagesIds;
