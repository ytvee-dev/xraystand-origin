export type SeasonsCard = {
    title: string,
    subTitle: string,
    description: string,
    securityMeasures?: string
}

export type SeasonContent = {
    title: string,
    description: string,
    content: SeasonsCard[]
}

export interface SeasonsProps {
    content: SeasonContent
}
