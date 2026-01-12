import DefaultLayout from "@layout/Default";
import Spinner from "@components/common/Spinner";
import * as paths from "@modules/safetyPrecautions/locales/paths.json";
import * as contentRu from "@modules/safetyPrecautions/locales/rus.json";
import * as contentKz from "@modules/safetyPrecautions/locales/kaz.json";
import BoardSection from "@modules/safetyPrecautions/Sections/BoardSection";
import RulesSection from "@modules/safetyPrecautions/Sections/RulesSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls.ts";
import { usePreloadImages } from "@hooks/usePreloadImages.ts";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import { type ReactElement } from "react";
import "./style.css";

const SafetyPrecautions = (): ReactElement => {
    const { isContentLoaded } = usePageData();
    const sectionMeta = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const sectionMetaTranslation = sectionMeta;

    return (
        <DefaultLayout>
            <div className="safety-precautions-page">
                {!isContentLoaded && <Spinner />}
                <BoardSection
                    title={sectionMetaTranslation.commonBoardSection.title}
                    img={paths.boards.COMMON}
                    notificationLabel={
                        sectionMetaTranslation.commonBoardSection
                            .notificationLabel
                    }
                    backgroundLeft="#1DAA7A"
                    backgroundRight="#00855A"
                />
                <div className="rules">
                    <RulesSection
                        title={
                            sectionMetaTranslation.leftCommonRulesSection.title
                        }
                        content={
                            sectionMetaTranslation.leftCommonRulesSection
                                .content
                        }
                        rulesBackground="#FFFFFF"
                        rulesListTitleColor="#18A778"
                        rulesSectionPaddingLeft="20%"
                    />
                    <RulesSection
                        title={
                            sectionMetaTranslation.rightCommonRulesSection.title
                        }
                        content={
                            sectionMetaTranslation.rightCommonRulesSection
                                .content
                        }
                        rulesBackground="#246138"
                        rulesListTitleColor="#F5B423"
                        rulesSectionPaddingRight="20%"
                    />
                </div>
                <BoardSection
                    title={sectionMetaTranslation.labsBoardSection.title}
                    img={paths.boards.LABS}
                    notificationLabel={
                        sectionMetaTranslation.labsBoardSection
                            .notificationLabel
                    }
                    backgroundLeft="#886DAD"
                    backgroundRight="#6C5490"
                />
                <div className="rules">
                    <RulesSection
                        title={
                            sectionMetaTranslation.leftLabsRulesSection.title
                        }
                        content={
                            sectionMetaTranslation.leftLabsRulesSection.content
                        }
                        rulesBackground="#FFFFFF"
                        rulesSectionPaddingLeft="20%"
                    />
                    <RulesSection
                        title={
                            sectionMetaTranslation.rightLabsRulesSection.title
                        }
                        content={
                            sectionMetaTranslation.rightLabsRulesSection.content
                        }
                        rulesBackground="#4E307C"
                        rulesListTitleColor="#E66C3F"
                        rulesSectionPaddingRight="20%"
                    />
                </div>
                <BoardSection
                    title={sectionMetaTranslation.technologyBoardSection.title}
                    img={paths.boards.TECHNOLOGY}
                    notificationLabel={
                        sectionMetaTranslation.technologyBoardSection
                            .notificationLabel
                    }
                    backgroundLeft="#F7B626"
                    backgroundRight="#C78D0C"
                />
                <div className="rules">
                    <RulesSection
                        title={
                            sectionMetaTranslation.leftTechnologyRulesSection
                                .title
                        }
                        content={
                            sectionMetaTranslation.leftTechnologyRulesSection
                                .content
                        }
                        rulesBackground="#FFFFFF"
                        rulesSectionPaddingLeft="20%"
                    />
                    <RulesSection
                        title={
                            sectionMetaTranslation.rightTechnologyRulesSection
                                .title
                        }
                        content={
                            sectionMetaTranslation.rightTechnologyRulesSection
                                .content
                        }
                        rulesBackground="#7C5030"
                        rulesListTitleColor="#F5B423"
                        rulesSectionPaddingRight="20%"
                    />
                </div>
                <BoardSection
                    title={sectionMetaTranslation.computerBoardSection.title}
                    img={paths.boards.COMPUTER}
                    notificationLabel={
                        sectionMetaTranslation.computerBoardSection
                            .notificationLabel
                    }
                    backgroundLeft="#1D93CC"
                    backgroundRight="#0D7AB3"
                />
                <div className="rules">
                    <RulesSection
                        title={
                            sectionMetaTranslation.leftComputerRulesSection
                                .title
                        }
                        content={
                            sectionMetaTranslation.leftComputerRulesSection
                                .content
                        }
                        rulesBackground="#FFFFFF"
                        rulesListTitleColor="#269AD5"
                        rulesSectionPaddingLeft="20%"
                    />
                    <RulesSection
                        title={
                            sectionMetaTranslation.rightComputerRulesSection
                                .title
                        }
                        content={
                            sectionMetaTranslation.rightComputerRulesSection
                                .content
                        }
                        rulesBackground="#304B7C"
                        rulesListTitleColor="#F5B423"
                        rulesSectionPaddingRight="20%"
                    />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default SafetyPrecautions;
