import { type ICardsParagraphs } from "@modules/kazTarih/types/index"

export type AiContent = {
    title: string;
    subTitle: string;
    content: ICardsParagraphs[][];
};

export interface AiProps {
    content: AiContent;
}
