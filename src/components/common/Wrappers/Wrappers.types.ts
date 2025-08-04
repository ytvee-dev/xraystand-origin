import type {ReactElement, ReactNode} from "react";

export interface IDSCardsWrapper {
    screenMaxWidth?: number;
    maxHeight?: string;
    cardsGap?: string;
    overflow?: string;
    isWrap?: boolean;
    children?: ReactNode | ReactElement;
}