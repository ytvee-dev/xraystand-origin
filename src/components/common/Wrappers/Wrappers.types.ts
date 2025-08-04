import type {ReactElement, ReactNode} from "react";

export interface IDSCardsWrapper {
    screenMaxWidth?: number;
    maxHeight?: string;
    cardsGap?: string;
    children?: ReactNode | ReactElement;
}