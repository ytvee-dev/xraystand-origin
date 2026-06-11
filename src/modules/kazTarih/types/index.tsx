export interface ICardsParagraphs {
    title: string;
    highlightedText: string,
    description: string; 
    content: string[]
}

export interface ISummaryCardContent {
    description: string,
    content: string[]
}

export interface IKazTarih {
    title: string;
    description: string;
    cards: ICardsParagraphs[][];
    summaryCard: ISummaryCardContent[];
}

export interface ICardData {
    title: string;
    description: string;
}

export interface IKazTarihProps {
    content: IKazTarih;
    summaryCardFontSize: string;
}
