import * as paths from "@modules/seasons/locales/paths.json";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const SixthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="seasons-sixth-section-background-images"></div>

            <div className="seasons-sixth-section-content">
                <div className="seasons-sixth-section-header">
                    <h1 className="seasons-section-title">{}</h1>

                    <span className="seasons-section-description">{}</span>
                </div>

                <div className="seasons-sixth-section-blocks-container"></div>
            </div>
        </section>
    );
};

export default SixthSection;
