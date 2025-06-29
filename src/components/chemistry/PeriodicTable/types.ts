export interface ElementJson {
    name: string,
    symbol: string,
    number: string | number,
    atomic_mass: string,
    category: string,
    color?: string,
    phase: string,
    melt: string,
    boil: string,
    density: string,
    applying: string,
    fact: string,
    period: string | number,
    xpos: string | number,
    ypos: string | number,
}

export interface CellProps
    extends Pick<
        ElementJson,
        | "number"
        | "name"
        | "symbol"
        | "category"
        | "atomic_mass"
        | "xpos"
        | "ypos"
    > {
    visible: boolean;
}

export type CategoryState = Record<ElementJson["category"], boolean>;
