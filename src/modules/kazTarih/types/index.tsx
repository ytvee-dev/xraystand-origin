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

export interface IKazTarihProps {
    content: IKazTarih;
    summaryCardFontSize: string;
}

type CardsKeys =
    | "firstCard"
    | "secondCard"
    | "thirdCard"
    | "fourthCard"
    | "fifthCard";

export type CardsObj = {
    [key in CardsKeys]: ICardsParagraphs[];
};

export interface IKazTarih {
    title: string;
    description: string;
    cards: CardsObj | ICardsParagraphs[][];
    summaryCard: ISummaryCardContent[];
}

export interface IKazTarihProps {
    content: IKazTarih;
}

export interface ICardData {
    title: string;
    description: string;
}
