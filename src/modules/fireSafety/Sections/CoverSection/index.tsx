import React, { type ReactElement } from "react";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import { useLocaleContent } from "@hooks/useLocale";
import "./style.css";

const CoverSection: React.FC<FireSafetySectionProps> = ({
    className,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className={className}>
            <div className="fire-safety-hero-wrapper">
                <div className="fire-safety-description common-text centered-text">
                    {textContent.coverSection.description}
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
