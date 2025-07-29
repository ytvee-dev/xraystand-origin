export interface IContentImageCardProps {
    imageName?: string;
    title?: string;
    label?: string;
    linkedText?: string;
    action?: () => void;
    backgroundColor?: string;
    width?: string; // XXpx | 100%
    sxText?: {
        titleColor?: string;
        labelColor?: string;
        linkColor?: string;
        imgObjectFit?: string;
        imgPadding?: string;
    };
}