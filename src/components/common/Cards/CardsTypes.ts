export interface IDefaultCardSxText {
    fontFamily?: string;
    titleColor?: string;
    subTitleColor?: string;
    labelColor?: string;
    linkColor?: string;
    imgObjectFit?: string;
    imgPadding?: string;
    titleFontWeight?: number | string;
    fontWeight?: number | string;
    titleFontSize?: number | string;
    subTitleFontSize?: number | string;
    labelFontSize?: number | string;
};

export interface INestedCardSx {
    fontFamily?: string;
    titleColor?: string;
    subTitleColor?: string;
    labelColor?: string;
    backgroundColor?: string;
    imgObjectFit?: string;
    imgPadding?: string;
    titleFontWeight?: number | string;
    fontWeight?: number | string;
    titleFontSize?: number | string;
    subTitleFontSize?: number | string;
    labelFontSize?: number | string;
};

export interface IContentImageCardProps {
    imageName?: string;
    title?: string;
    subTitle?: string;
    label?: string;
    linkedText?: string;
    action?: () => void;
    backgroundColor?: string;
    minWidth?: string; // XXpx | 100%
    maxWidth?: string; // XXpx | 100%
    imageHeight?: string; // XXpx | 100%
    justifyContent?: string; // flex-start | flex-end | space-between
    sxText?: IDefaultCardSxText;
}

export interface INestedCardProps {
    imageName?: string;
    title?: string;
    subTitle?: string;
    label?: string;
    linkedText?: string;
    nestedCards?: INestedCards[] | [];
    action?: () => void;
    backgroundColor?: string;
    minWidth?: string; // XXpx | 100%
    maxWidth?: string; // XXpx | 100%
    imageHeight?: string; // XXpx | 100%
    justifyContent?: string; // flex-start | flex-end | space-between
    sxText?: IDefaultCardSxText;
    sxNestedCards?: INestedCardSx;
}

export interface IInformationCardSxContent {
    minHeight?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    listPadding?: number | string;
};

export interface IInformationCardProps {
    marker?: string;
    title?: string;
    liOptions?: string[] | [];
    action?: () => void;
    backgroundColor?: string;
    width?: number | string; // XXpx | 100%
    sxText?: IDefaultCardSxText;
    sxContent?: IInformationCardSxContent;
}

interface INestedCards {
    title?: string;
    label?: string;
}
