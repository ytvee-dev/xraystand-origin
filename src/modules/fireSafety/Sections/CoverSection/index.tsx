import React, { type ReactElement } from "react";
import * as paths from "@modules/fireSafety/locales/paths.json";
import * as textContentKz from "@modules/fireSafety/locales/kaz.json";
import * as textContentRu from "@modules/fireSafety/locales/rus.json";
import type { FireSafetySectionProps } from "@modules/fireSafety/types";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import "./style.css";

const CoverSection: React.FC<FireSafetySectionProps> = ({
    className,
    style,
}: FireSafetySectionProps): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);

    const { isMobile } = usePageData();

    const heroLogoHeaderClassName: string = !isMobile
        ? "header-text-bold"
        : "title-text";

    return (
        <section className={className} style={style}>
            <div className="fire-safety-hero-background">
                <img
                    id="fire-safety-hero-background-clouds"
                    src={paths.backgrounds.cloudBackdrops}
                    alt={"fire-safety-hero-background-clouds"}
                />
                {!isMobile && (
                    <img
                        id="fire-safety-hero-background-burning-houses"
                        src={paths.backgrounds.burningHouses}
                        alt={"fire-safety-hero-background-burning-houses"}
                    />
                )}
            </div>
            <div className="fire-safety-hero-content">
                <div className="fire-safety-hero-logo">
                    <img
                        className="fire-safety-hero-logo-image"
                        src={paths.images.fireSafetyCoverImage}
                        alt={"fire-safety-hero-logo-image"}
                    />
                    <span className={heroLogoHeaderClassName}>
                        {textContent.coverSection.subTitle}
                    </span>
                </div>

                <div className="fire-safety-description common-text centered-text">
                    {textContent.coverSection.description}
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
