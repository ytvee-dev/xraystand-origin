export type AiCard = {
    title: string;
    description: string;
    content: string[];
};

export type AiContent = {
    title: string;
    subTitle: string;
    content: AiCard[];
};

export interface AiProps {
    content: AiContent;
}
