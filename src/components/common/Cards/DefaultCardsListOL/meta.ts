import type {TContentItem} from "@utils/types/trafficLawsTypes";

interface IAdditionalInfo {
    title: string;
    pointsTextList: string[];
}

interface ICardProps {
    title?: string;
    label?: string;
    additionalInfo?: IAdditionalInfo;
}

export function getCardProps(item: TContentItem): ICardProps | null {
    if (typeof item === "string") {
        return { title: item };
    }

    if ("title" in item && "pointsTextList" in item) {
        return {
            title: item.title,
            label: item.pointsTextList?.join(" • "),
        };
    }

    if ("label" in item) {
        if ("additionalInfo" in item) {
            return {
                label: item.label,
                additionalInfo: item.additionalInfo,
            };
        }
        return {
            label: item.label,
        };
    }

    if ("title" in item) {
        return { title: item.title };
    }

    return null;
}
