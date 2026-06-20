export interface ICardData {
    description: string;
    path: string;
    content?: string[];
}

export interface IParagraphData {
    title: string;
    content: ICardData[];
}
