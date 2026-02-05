import React, { type ReactElement } from "react";
import DSContentBlock from "@components/common/DSContentBlock";
import DSInforamtionCard from "@components/common/Cards/DSInformationCard";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import { useLocaleContent } from "@hooks/useLocale";
import { SvgSpriteIds } from "@utils/constants";
import {
    captionTextStyle,
    headerTextStyle,
} from "@modules/fireSafety/cssStyles";
import "./style.css";

const ThirdSection: React.FC<FireSafetySectionProps> = ({
    className,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <div className="fire-safety-third-section-content-wrapper">
                <DSContentBlock
                    title={textContent.fireReportingSection.title}
                    colorScheme={{
                        titleStyle: { ...headerTextStyle, margin: 0, gap: 0 },
                        notificationAlertStyle: {
                            ...captionTextStyle,
                            justifyContent: "start",
                        },
                        contentBlockStyle: {
                            display: "block",
                        },
                        notificationBackgroundColor: "#C7493C",
                        notificationBorderColor: "#FFFFFF",
                        notificationTextColor: "#FFFFFFDE",
                        notificationIconColor: "#FFFFFF",
                        notificationIconName: SvgSpriteIds.FIRE_SAFETY_WARNING,
                        notificationIconWidth: "2.813rem",
                        notificationIconHeight: "2.5rem",
                        notificationBorderRadius: "1.563rem",
                        notificationCardGap: "0.75rem",
                    }}
                    notificationLabel={
                        textContent.fireReportingSection.notificationLabel
                    }
                >
                    <DSInforamtionCard
                        width={"100%"}
                        liOptions={textContent.fireReportingSection.content.map(
                            (value) => value.description,
                        )}
                        labelStyle={captionTextStyle}
                        style={{
                            backgroundColor: "#7e3128",
                            border: "1px solid white",
                            borderRadius: "1.563rem",
                            padding: "1.5rem",
                        }}
                    />
                </DSContentBlock>
                <div style={{ width: "40%" }}>Здесь должна быть картинка</div>
            </div>
        </section>
    );
};

export default ThirdSection;
