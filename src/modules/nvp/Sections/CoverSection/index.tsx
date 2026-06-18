import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const CoverSectionLogo = () => {
    return (
        <div className="cover-section-nvp-logo">
            НАЧАЛЬНАЯ ВОЕННАЯ ПОДГОТОВКА
        </div>
    );
};

const CoverSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="nvp-cover-section-content">
                <CoverSectionLogo />

                <h1 className="nvp-cover-section-title">{content.title}</h1>

                <div className="nvp-cover-section-text-container">
                    {content.content.map((text: string, index: number) => (
                        <p
                            key={`nvp-cs-${index}`}
                            id={`nvp-cover-section-text-${index}`}
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
