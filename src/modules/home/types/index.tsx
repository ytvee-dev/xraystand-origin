export interface HomeSection {
    title: string;
    description?: string;
    content?: Array<{
        title: string;
        subTitle?: string;
        description: string;
    }>;
    notificationLabel?: string;
    colorScheme?: {
        background: string;
        text: string;
    };
}

export interface HomeContent {
    coverSection: {
        title: string;
        subTitle?: string;
        description: string;
    };
    aboutSection: HomeSection;
    featuresSection: HomeSection;
    examplesSection: HomeSection;
    developmentSection: HomeSection;
    contactSection: HomeSection;
}

export interface CoverSectionProps {
    content: HomeContent;
}