export interface ICardData {
    description: string;
    path: string;
    content?: string[];
}

export interface IParagraphData {
    title: string;
    content: ICardData[];
}

export interface INvpEquipmentHotspotContent {
    label: string;
}

export interface INvpEquipmentCardContent {
    title: string;
    description: string;
}

export interface INvpEquipmentSectionContent {
    title: string;
    description: string;
    equipmentNote: string;
    hotspots: INvpEquipmentHotspotContent[];
    cards: INvpEquipmentCardContent[];
}
