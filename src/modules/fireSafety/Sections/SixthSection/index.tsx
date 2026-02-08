import React, { type ReactElement } from "react";
import NestedCard from "@components/common/Cards/NestedCard";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import type { INestedCards } from "@components/common/Cards/CardsTypes";
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

const SixthSection: React.FC<FireSafetySectionProps> = ({
    className,
    style,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const { isDesktop, isMobile } = usePageData();

    const evacuationRules: IFireRulesCardData[] =
        textContent.evacuationSafetyRulesSection.content.map(
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
            <div className="fire-safety-sixth-section-content-wrapper">
                <h2 className={`${titleClassname} centered-text`}>
                    {textContent.evacuationSafetyRulesSection.title}
                </h2>

                <div className="fire-evacuation-rules">
                    {evacuationRules.map((rules: IFireRulesCardData) => (
                        <NestedCard
                            title={rules.title}
                            titleStyle={commonTextStyle}
                            labelDescriptionStyle={captionTextStyle}
                            key={rules.id}
                            nestedCards={rules.content}
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
                                backgroundColor: "#C3473B",
                            }}
                            actionWrapperStyle={{ height: "auto" }}
                            nestedCardsStyle={{
                                border: "1px solid white",
                                padding: "1rem 1.5rem",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SixthSection;
