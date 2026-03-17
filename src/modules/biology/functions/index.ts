export interface IContentItem {
    title: string;
    subTitle: string;
    description: string;
    listParts?: string[];
}

export interface IContentGroup {
    title: string;
    items: IContentItem[];
}

export const groupByTitle = (content: IContentItem[]): IContentGroup[] => {
    const groups: IContentGroup[] = [];

    let currentGroup: IContentGroup | null = null;

    for (const item of content) {
        const hasTitle = item.title && item.title.trim() !== "";

        if (hasTitle) {
            if (currentGroup) {
                groups.push(currentGroup);
            }

            currentGroup = { title: item.title, items: [] };
        } else {
            if (currentGroup) {
                currentGroup.items.push(item);
            }
        }
    }

    if (currentGroup) {
        groups.push(currentGroup);
    }

    return groups;
};
