import DefaultLayout from "@layout/Default";
import Spinner from "@components/common/Spinner";
import * as paths from "@modules/safetyPrecautions/locales/paths.json";
import * as contentRu from "@modules/safetyPrecautions/locales/rus.json";
import * as contentKz from "@modules/safetyPrecautions/locales/kaz.json";
import TwoBackgroundColorSection from "@components/common/Sections/TwoBackgroundColorSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls.ts";
import { usePreloadImages } from "@hooks/usePreloadImages.ts";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import { type ReactElement } from "react";
import "./style.css";
import RulesList from "@components/common/Other/RulesList";

const SafetyPrecautions = (): ReactElement => {
    const { isContentLoaded } = usePageData();
    const sectionMeta = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const {
        commonBoardSection,
        leftCommonRulesSection,
        rightCommonRulesSection,
        labsBoardSection,
        leftLabsRulesSection,
        rightLabsRulesSection,
        technologyBoardSection,
        leftTechnologyRulesSection,
        rightTechnologyRulesSection,
        computerBoardSection,
        leftComputerRulesSection,
        rightComputerRulesSection,
    } = sectionMeta;

    return (
        <DefaultLayout>
            <div className="safety-precautions-page">
                {!isContentLoaded && <Spinner />}
                <TwoBackgroundColorSection
                    title={commonBoardSection.title}
                    img={paths.boards.COMMON}
                    notificationLabel={commonBoardSection.notificationLabel}
                    backgroundLeft="#1DAA7A"
                    backgroundRight="#00855A"
                />
                <div className="rules">
                    <TwoBackgroundColorSection
                        title={leftCommonRulesSection.title}
                        rulesBackground="#FFFFFF"
                        rulesListTitleColor="#18A778"
                        classname="left-section"
                    >
                        <RulesList items={leftCommonRulesSection.content} />
                    </TwoBackgroundColorSection>
                    <TwoBackgroundColorSection
                        title={rightCommonRulesSection.title}
                        rulesBackground="#246138"
                        rulesListTitleColor="#F5B423"
                        classname="right-section"
                    >
                        <RulesList items={rightCommonRulesSection.content}/>
                    </TwoBackgroundColorSection>
                </div>
                <TwoBackgroundColorSection
                    title={labsBoardSection.title}
                    img={paths.boards.LABS}
                    notificationLabel={labsBoardSection.notificationLabel}
                    backgroundLeft="#886DAD"
                    backgroundRight="#6C5490"
                />
                <div className="rules">
                    <TwoBackgroundColorSection
                        title={leftLabsRulesSection.title}
                        rulesBackground="#FFFFFF"
                        classname="left-section"
                    >
                        <RulesList items={leftLabsRulesSection.content}/>
                    </TwoBackgroundColorSection>
                    <TwoBackgroundColorSection
                        title={rightLabsRulesSection.title}
                        rulesBackground="#4E307C"
                        rulesListTitleColor="#E66C3F"
                        classname="right-section"
                    >
                        <RulesList items={rightLabsRulesSection.content}/>
                    </TwoBackgroundColorSection>
                </div>
                <TwoBackgroundColorSection
                    title={technologyBoardSection.title}
                    img={paths.boards.TECHNOLOGY}
                    notificationLabel={technologyBoardSection.notificationLabel}
                    backgroundLeft="#F7B626"
                    backgroundRight="#C78D0C"
                />
                <div className="rules">
                    <TwoBackgroundColorSection
                        title={leftTechnologyRulesSection.title}
                        rulesBackground="#FFFFFF"
                        classname="left-section"
                    >
                        <RulesList items={leftTechnologyRulesSection.content}/>
                    </TwoBackgroundColorSection>
                    <TwoBackgroundColorSection
                        title={rightTechnologyRulesSection.title}
                        rulesBackground="#7C5030"
                        rulesListTitleColor="#F5B423"
                        classname="right-section"
                    >
                        <RulesList items={rightTechnologyRulesSection.content}/>
                    </TwoBackgroundColorSection>
                </div>
                <TwoBackgroundColorSection
                    title={computerBoardSection.title}
                    img={paths.boards.COMPUTER}
                    notificationLabel={computerBoardSection.notificationLabel}
                    backgroundLeft="#1D93CC"
                    backgroundRight="#0D7AB3"
                />
                <div className="rules">
                    <TwoBackgroundColorSection
                        title={leftComputerRulesSection.title}
                        rulesBackground="#FFFFFF"
                        rulesListTitleColor="#269AD5"
                        classname="left-section"
                    >
                        <RulesList items={leftComputerRulesSection.content}/>
                    </TwoBackgroundColorSection>
                    <TwoBackgroundColorSection
                        title={rightComputerRulesSection.title}
                        rulesBackground="#304B7C"
                        rulesListTitleColor="#F5B423"
                        classname="right-section"
                    >
                        <RulesList items={rightComputerRulesSection.content}/>
                    </TwoBackgroundColorSection>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default SafetyPrecautions;
