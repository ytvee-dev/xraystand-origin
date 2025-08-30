import type {IDefaultCardSxText, INestedCardSx} from "@components/common/Cards/CardsTypes.ts";
import { R2_BASE_URL } from "@utils/constants";

export const dsCardImagePathPrefixTemplate = `${R2_BASE_URL}assets/ds-system/cards/`;
export const dsCardImagePathPrefix = `${R2_BASE_URL}assets/images/`;

export const templateDSCardNames: string[] = [
    "ds-system/cards/ds-card-1.jpg",
    "ds-card-2.avif",
    "ds-card-3.avif",
    "ds-card-4.avif",
];

export const defaultDSCardSX: IDefaultCardSxText = {
    titleColor: "rgba(0,0,0,1)",
    subTitleColor: "rgba(0,0,0,1)",
    labelColor: "rgba(0,0,0,0.6)",
    linkColor: "#3870C9",
    imgObjectFit: "none",
    imgPadding: "0",
    fontWeight: 600,
    titleFontSize: "32px",
    subTitleFontSize: "26px",
    labelFontSize: "16px",
};

export const nestedDSCardSX: INestedCardSx = {
    titleColor: "rgba(0,0,0,1)",
    subTitleColor: "rgba(0,0,0,1)",
    labelColor: "rgba(0,0,0,0.6)",
    backgroundColor: "grey",
    imgObjectFit: "none",
    imgPadding: "0",
    fontWeight: 500,
    titleFontSize: "32px",
    subTitleFontSize: "26px",
    labelFontSize: "16px",
};

export const defaultDSInformationCardSX = {
    minHeight: "auto",
    minWidth: "auto",
    listPadding: "17px",
};

