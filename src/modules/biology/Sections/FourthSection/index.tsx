import Slider from "@components/common/Other/Slider";
import * as paths from "@modules/biology/locales/paths.json";
import React, { type ReactElement, useState } from "react";
import * as textContentRu from "@modules/biology/locales/rus.json";
import * as textContentKz from "@modules/biology/locales/kaz.json";
import { type BiologySectionProps } from "@modules/biology/types";
import { motion, AnimatePresence } from "framer-motion";
import { useLocaleContent } from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";

import "./style.css";
import CardContentRenderer from "@modules/biology/components/CardContentRender";

export type TImgCard = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
};

const FourthSection: React.FC<BiologySectionProps> = ({
    className,
}: BiologySectionProps): ReactElement => {
    const { screenWidth } = usePageData();
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const isMobile = screenWidth <= 768;
    const [index, setIndex] = useState(0);

    const imgCards: TImgCard[] = textContent.organismClassificationSection.content.map(
        (contentItem, idx) => {
            return {
                id: String(idx + 1),
                title: contentItem.title,
                subtitle: "",
                description: "",
                image: paths.cards.fourthSectionCards[idx] || "",
            };
        },
    );

    return (
        <section className={className}>
            <div className="biology-fourth-section-background">
                {/* <img src={paths.svg.spiral} alt={"image"} /> */}
            </div>

            <div className="biology-fourth-section-header-block">
                <span className="title">{textContent.organismClassificationSection.title}</span>
                <div className="description">{textContent.organismClassificationSection.description}</div>
            </div>

            <div className="biology-fourth-section-main-content">
                <div className="biology-fourth-section-content-wrapper">
                    <motion.div
                        className="motion-slider"
                        style={{
                            width: isMobile ? "200px" : "400px",
                            height: isMobile ? 150 : 340,
                            position: "relative",
                            margin: "0 auto",
                        }}
                    >
                        <AnimatePresence initial={false}>
                            <Slider
                                key={index + 1}
                                frontCard={false}
                                index={(index + 1) % imgCards.length}
                                card={imgCards[(index + 1) % imgCards.length]}
                                cardClassName="biology-fourth-section-custom-animated-image-card"
                                wrapperStyle={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                            <Slider
                                key={index}
                                frontCard={true}
                                index={index % imgCards.length}
                                setIndex={setIndex}
                                drag="x"
                                card={imgCards[index % imgCards.length]}
                                cardClassName="biology-fourth-section-custom-animated-image-card"
                                wrapperStyle={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                        </AnimatePresence>
                    </motion.div>
                </div>
                <div className="biology-fourth-section-card-text">
                    <h3 className="biology-card-title">
                        {textContent.organismClassificationSection.content[index % imgCards.length].title}
                    </h3>

                    <div className="biology-card-content">
                        <CardContentRenderer 
                            items={textContent.organismClassificationSection.content[index % imgCards.length].cardContent}
                            classNames={{
                                text: "biology-card-text",
                                list: "biology-card-list"
                            }}
                            styleConfig={{
                                marginBottomValue: "1rem",
                                listMarginLeft: "1.7rem"
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourthSection;