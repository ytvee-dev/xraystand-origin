export interface ISectionStringContent {
    title: string,
    subTitle: string,
    description: string,
    content: string[]
}

export interface ISectionContent {
    title: string,
    subTitle: string,
    description: string,
    content?: ISectionContent[]
}

export interface IChildContentProps {
    content: ISectionContent[]
}

export interface IPhysicsSectionProps {
    content: ISectionStringContent,
    childContent?: ISectionContent
}
