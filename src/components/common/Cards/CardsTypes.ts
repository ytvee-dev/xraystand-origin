export interface IDefaultCardSxText {
    titleColor?: string;
    labelColor?: string;
    linkColor?: string;
    imgObjectFit?: string;
    imgPadding?: string;
    fontWeight?: number | string;
    titleFontSize?: number | string;
    labelFontSize?: number | string;

};

export interface IContentImageCardProps {
    imageName?: string;
    title?: string;
    label?: string;
    linkedText?: string;
    action?: () => void;
    backgroundColor?: string;
    width?: string; // XXpx | 100%
    sxText?: IDefaultCardSxText;
}




export interface IInformationCardSxContent {
    minHeight?: number | string;
    minWidth?: number | string;
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
