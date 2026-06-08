import * as paths from "@modules/kazTarih/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const CoverSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="kt-cover-section-content">
                <img
                    className="kt-background-img  kt-bg-light-img"
                    src={paths.bg}
                    alt="background-img"
                />

                <img
                    className="kt-cover-section-img"
                    src={paths.cover}
                    alt="kaz-tarih-img"
                />

                <span className="kt-cover-section-title gr-font-family">
                    {content.title}
                </span>

                <span className="kt-cover-section-description">
                    {content.description}
                </span>
            </div>
        </section>
    );
};

export default CoverSection;
