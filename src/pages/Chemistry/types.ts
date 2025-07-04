import type { ReactNode } from "react";

export type TElementCellVariant = "cell-desktop" | "mobile-cell" | "modal-cell";
export type TElementCellVariantKey = "DESKTOP" | "MOBILE" | "MODAL";


export interface IElementJson {
    name?: string;
    symbol?: string;
    number?: string | number;
    atomic_mass?: string;
    category: string;
    color?: string;
    phase: string;
    melt: string;
    boil: string;
    density: string;
    applying: string;
    fact: string;
    period?: string | number;
    xpos?: string | number;
    ypos?: string | number;
}

export type TElementsInfo = IElementJson[];

export interface ICellProps
    extends Pick<
        IElementJson,
        | "number"
        | "name"
        | "symbol"
        | "category"
        | "atomic_mass"
        | "xpos"
        | "ypos"
    > {
    variant?: TElementCellVariantKey;
    visible?: boolean;
    action?: () => void;
}

export interface IChemistryPageResources {
    section: ITextContent;
    elements: TElementsInfo;
}

export type TCategoryState = Record<IElementJson["category"], boolean>;

export interface ITextContent {
    title: string;
    subtitle?: string;
    description?: string;
}

export interface IContentSectionProps extends ITextContent {
    children: ReactNode;
}
