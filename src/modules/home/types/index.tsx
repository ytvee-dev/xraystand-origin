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
    commonBoardSection: {
        title: string;
        subTitle?: string;
        notificationLabel: string;
    };
    leftCommonRulesSection: HomeSection;
    rightCommonRulesSection: HomeSection;
    labsBoardSection: HomeSection;
    leftLabsRulesSection: HomeSection;
    rightLabsRulesSection: HomeSection;
    technologyBoardSection: HomeSection;
    leftTechnologyRulesSection: HomeSection;
    rightTechnologyRulesSection: HomeSection;
    computerBoardSection: HomeSection;
    leftComputerRulesSection: HomeSection;
    rightComputerRulesSection: HomeSection;
}
