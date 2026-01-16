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

export interface ContentStructure {
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

export interface SafetyPrecautionsContent {
    commonBoard: {
        title: string;
        subTitle?: string;
        notificationLabel: string;
    };
    leftCommonRules: HomeSection;
    rightCommonRules: HomeSection;
    labsBoard: HomeSection;
    leftLabsRules: HomeSection;
    rightLabsRules: HomeSection;
    technologyBoard: HomeSection;
    leftTechnologyRules: HomeSection;
    rightTechnologyRules: HomeSection;
    computerBoard: HomeSection;
    leftComputerRules: HomeSection;
    rightComputerRules: HomeSection;
}
