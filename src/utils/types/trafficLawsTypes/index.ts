export interface IContentTitleOnly {
    title: string;
}

export type IContentPlainText = string;

export interface IContentLabel {
    title?: string;
    label: string;
    additionalInfo?: {
        title: string;
        pointsTextList: string[];
    };
}

export interface IContentWithPoints {
    title: string;
    pointsTextList: string[];
}

export type TContentItem =
    | IContentPlainText
    | IContentTitleOnly
    | IContentWithPoints
    | IContentLabel;
