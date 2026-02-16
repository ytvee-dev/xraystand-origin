import React, { type ReactElement } from "react";
import NestedCard from "@components/common/Cards/NestedCard";
import * as paths from "@modules/fireSafety/locales/paths.json";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { INestedCards } from "@components/common/Cards/CardsTypes";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import {
    captionTextStyle,
    commonTextStyle,
} from "@modules/fireSafety/cssStyles";
import "./style.css";

interface IFireRulesCardData {
    id: string;
    title: string;
    content: INestedCards[];
}

const SeventhSection: React.FC<FireSafetySectionProps> = ({
    className,
    style,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const { isDesktop, isMobile } = usePageData();

    const [leftRulesPart, ...rightRulesPart] =
        textContent.firePreventionSection.content;

    const leftRulesData: IFireRulesCardData = {
        id: "0",
        title: leftRulesPart.title,
        content: leftRulesPart.rules.map((ruleData) => ({
            label: ruleData.description,
        })),
    };

    const rightRulesData: IFireRulesCardData[] = rightRulesPart.map(
        (rulesConfig, idx) => {
            return {
                id: String("index-" + idx + 1),
                title: rulesConfig.title,
                content: rulesConfig.rules.map((ruleData) => {
                    return { label: ruleData.description };
                }),
            };
        },
    );

    const titleClassname: string = !isMobile ? "header-text" : "title-text";

    return (
        <section className={className} style={style}>
            <div className="fire-safety-seventh-section-content-wrapper-background">
                <img
                    id="fire-safety-seventh-section-content-wrapper-background-match"
                    src={paths.images.match}
                    alt={
                        "fire-safety-seventh-section-content-wrapper-background-match"
                    }
                />
                <img
                    id="fire-safety-seventh-section-content-wrapper-background-steam"
                    src={paths.backgrounds.steam}
                    alt={
                        "fire-safety-seventh-section-content-wrapper-background-steam"
                    }
                />
            </div>
            <div className="fire-safety-seventh-section-content-wrapper">
                <h2 className={`${titleClassname} centered-text`}>
                    {textContent.firePreventionSection.title}
                </h2>
                <div className="fire-safety-description caption-text centered-text">
                    {textContent.firePreventionSection.description}
                </div>

                <div className="fire-preventions-wrapper">
                    <div className="left-part">
                        <NestedCard
                            title={leftRulesData.title}
                            titleStyle={commonTextStyle}
                            labelDescriptionStyle={captionTextStyle}
                            key={leftRulesData.id}
                            nestedCards={leftRulesData.content}
                            withImage={false}
                            minWidth={"20rem"}
                            maxWidth={isDesktop ? "30rem" : "auto"}
                            backgroundColor="#7E3028BF"
                            style={{
                                padding: "1.5rem 1rem",
                                border: "1px dashed white",
                                height: "auto",
                            }}
                            sxNestedCards={{
                                backgroundColor: "transparent",
                            }}
                            actionWrapperStyle={{ height: "auto" }}
                            nestedCardsStyle={{
                                padding: "1rem 1.5rem",
                            }}
                        />
                    </div>
                    <div className="right-part">
                        {rightRulesData.map((rulesConfig) => (
                            <NestedCard
                                title={rulesConfig.title}
                                titleStyle={commonTextStyle}
                                labelDescriptionStyle={captionTextStyle}
                                key={rulesConfig.id}
                                nestedCards={rulesConfig.content}
                                withImage={false}
                                minWidth={"20rem"}
                                maxWidth={isDesktop ? "30rem" : "auto"}
                                backgroundColor="#7E3028BF"
                                style={{
                                    padding: "1.5rem 1rem",
                                    border: "1px dashed white",
                                    height: "auto",
                                }}
                                sxNestedCards={{
                                    backgroundColor: "transparent",
                                }}
                                actionWrapperStyle={{ height: "auto" }}
                                nestedCardsStyle={{
                                    padding: "0",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeventhSection;
