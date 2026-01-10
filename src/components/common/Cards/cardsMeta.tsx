import type { IDefaultCardSxText, INestedCardSx } from "./CardsTypes.ts";
//todo: remove this
export const dsCardImagePathPrefix = "";

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
