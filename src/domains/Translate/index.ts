import type {IListItemProps} from "@utils/constants";
import type {IChemistryPageResources, TElementsInfo} from "@pages/Chemistry/types.ts";

export interface IInfoCardResources {
    title: string;
    pointsTextList: string[];
}

export interface IImageCardResources {
    title?: string,
    label?: string;
    linkText?: string;
    action?: () => void;
    additionalInfo?: IInfoCardResources;
}

export interface IPageSectionResources {
    [PageSectionItemsIds.TITLE]: string;
    [PageSectionItemsIds.SUBTITLE]?: string;
    [PageSectionItemsIds.DESCRIPTION]?: string;
    [PageSectionItemsIds.CONTENT]?: IImageCardResources[] | IInfoCardResources[] | IInfoCardResources | string[] | string;
    [PageSectionItemsIds.NOTIFICATION_LABEL]?: string;
};

export interface ITrafficLawsPageResources {
    [key: string]: IPageSectionResources;
};

export interface ITextTranslationResources {
    [key: string]: ITrafficLawsPageResources | TElementsInfo | IChemistryPageResources;
};

export const enum Languages {
    RUSSIAN = "ru",
    KAZAKH = "kz",
};

export const languageSwitcherOptions: IListItemProps[] = [
    {label: "RU", value: Languages.RUSSIAN},
    {label: "KZ", value: Languages.KAZAKH},
];

export const localesTextRecord: Record<Languages, string> = {
    [Languages.RUSSIAN]: 'rusTextLocale',
    [Languages.KAZAKH]: 'kazTextLocale',
};

export interface IControlTranslationResources {
    contentCardAdditionalInfo: string;
};

export const localesControlRecord: Record<Languages, string> = {
    [Languages.RUSSIAN]: "rusControlLocale",
    [Languages.KAZAKH]: "kazControlLocale",
};

export const enum PageIds {
    TRAFFIC_LAWS_PAGE = "trafficLawsPage",
    CHEMISTRY_PAGE = "chemistryPage",
    RUSLIT_PAGE = "ruslitPage",
    KAZAKH_ADEBIET_PAGE = "kazakhadebietPage",
};

export const enum PageSectionIds {
    FIRST_SECTION = "firstSection",
    SECOND_SECTION = "secondSection",
    THIRD_SECTION = "thirdSection",
    FOURTH_SECTION = "fourthSection",
    FIFTH_SECTION = "fifthSection",
    SIXTH_SECTION = "sixthSection",
    SEVENTH_SECTION = "seventhSection",
    EIGHTH_SECTION = "eighthSection",
    NINTH_SECTION = "ninthSection",
};

export const enum PageSectionItemsIds {
    TITLE = "title",
    SUBTITLE = "subtitle",
    DESCRIPTION = "description",
    CONTENT = "content",
    NOTIFICATION_LABEL = "notificationLabel",
};
