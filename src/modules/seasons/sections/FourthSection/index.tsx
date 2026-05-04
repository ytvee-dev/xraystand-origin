import Card from "@modules/seasons/components/Card";
import * as paths from "@modules/seasons/locales/paths.json";
import type { IBlockLabel } from "@modules/english/components/InfoBlock";
import type { IEnglishSectionProps } from "@modules/english/types";
import type { ReactElement } from "react";
import "./style.css";

const FourthSection = ({
    className,
    content,
}: IEnglishSectionProps): ReactElement => {
    return (
        <section className={className}>
            <div className="seasons-fourth-section-background-images">
                <img
                    id="seasons-fourth-section-img-1"
                    className="seasons-fourth-section-img"
                    src={paths.spring.lion}
                    alt="seasons-image"
                />
                <img
                    id="seasons-fourth-section-img-2"
                    className="seasons-fourth-section-img"
                    src={paths.spring.purpleLeaf}
                    alt="seasons-image"
                />
            </div>

            <div className="seasons-fourth-section-content">
                <div className="seasons-fourth-section-header">
                    <img
                        className="seasons-fourth-section-logo"
                        src={paths.spring.logo}
                        alt="seasons-image"
                    />

                    <h1 className="seasons-section-title">{content.title}</h1>

                    <span className="seasons-section-description">
                        {content.description}
                    </span>
                </div>

                <div className="seasons-fourth-section-blocks-container">
                    {content.content.map(
                        (blockData: IBlockLabel, index: number) => (
                            <Card
                                key={index}
                                className="seasons-fourth-section-card"
                                subTitle={blockData.subtitle}
                                description={blockData.description}
                                season="spring"
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
