// @modules/nutrition/types.ts

export interface ColorScheme {
    background: string;
    text: string;
}

export interface CoverSection {
    title: string;
    subTitle: string;
    description: string;
}

export interface CardItem {
    title: string;
    subTitle?: string;
    description: string;
}

export interface LabeledItem {
    title: string;
    label: string;
}

export interface FirstSection {
    title: string;
    description?: string;
    content: CardItem[];
    notificationLabel: string;
    colorScheme: ColorScheme;
}

export interface SecondSection {
    title: string;
    subTitle: string;
    description: string;
    content: LabeledItem[];
    notificationLabel: string;
    colorScheme: ColorScheme;
}

export interface ThirdSection {
    title: string;
    subTitle: string;
    description: string;
    content: LabeledItem[];
    notificationLabel: string;
    colorScheme: ColorScheme;
}

export interface FourthSection {
    title: string;
    subTitle: string;
    description: string;
    content: LabeledItem[];
    notificationLabel: string;
    colorScheme: ColorScheme;
}

export interface FifthSection {
    title: string;
    subTitle: string;
    description: string;
    content: LabeledItem[];
    notificationLabel: string;
    colorScheme: ColorScheme;
}

export interface NutritionLocale {
    coverSection: CoverSection;
    firstSection: FirstSection;
    secondSection: SecondSection;
    thirdSection: ThirdSection;
    fourthSection: FourthSection;
    fifthSection: FifthSection;
}
