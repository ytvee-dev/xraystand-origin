import type {ReactElement, ReactNode} from "react";

export interface IDSCardsWrapper {
    wrapperMaxWidth?: number | string;
    screenMaxWidth?: number;
    maxHeight?: string;
    cardsGap?: string;
    overflow?: string;
    isWrap?: boolean;
    children?: ReactNode | ReactElement;
}