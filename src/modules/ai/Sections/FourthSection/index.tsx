import React, { type ReactElement } from "react";
import * as paths from "@modules/ai/locales/paths.json";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import Carousel from "@modules/kazTarih/components/Carousel";
import { type AiProps } from "@modules/ai/types/index";
import { usePageData } from "@hooks/usePageData";
import "./style.css";

const FourthSection: React.FC<AiProps> = ({ content }): ReactElement => {
    const { isMobile } = usePageData();

    const firstCardsImgArray = [
        '',
        paths.rulesOfTheGameCards.rlhf
    ]

    const secondCardsImgArray = [
        paths.rulesOfTheGameCards.liar,
        ''
    ]

    const firstColumnCards = content.content.filter((_, index) => index % 2 === 0)
    const secondColumnCards  = content.content.filter((_, index) => index % 2 !== 0)

    return (
        <section className="ai-fourth-section">
            <img src={paths.otherSectionsBg} alt="" className="ai-fourth-bg"/>
            
            <img src={paths.figures.blue} alt="" className="ai-fourth-figure"/>
            <img src={paths.rulesOfTheGameCards.rlhf} alt="" className="ai-fourth-lock"/>

            <div className="ai-fourth-content-wrapper">
                <div className="ai-fourth-title-wrapper">
                    <h2 className="ai-fourth-title">{content.title}</h2>
                    <p className="ai-fourth-subtitle">{content.subTitle}</p>
                </div>

                {isMobile ? ( 
                    <Carousel className="ai-fourth-cards-carousel">
                        {content.content.map(card=> (
                            <TextFormatterCard 
                                items={card}
                                theme="other"
                                className="ai-fourth-section-cards"
                                key={card[0].title}
                            />
                        ))}
                    </Carousel>
                ) : (
                    <div className="ai-fourth-cards-wrapper">
                        <div className="ai-fourth-section-first-column-cards">
                            {firstColumnCards.map((card, index) => (
                            <TextFormatterCard 
                                items={card}
                                theme="other"
                                className="ai-fourth-section-cards"
                                key={card[0].title}
                                img={firstCardsImgArray[index]}
                                imgClassName="ai-fourth-img-rlhf"
                            />
                        ))}
                        </div>
                        <div className="ai-fourth-section-second-column-cards">
                            {secondColumnCards.map((card, index) => (
                                <TextFormatterCard 
                                    items={card}
                                    theme="other"
                                    className="ai-fourth-section-cards"
                                    key={card[0].title}
                                    img={secondCardsImgArray[index]}
                                    imgClassName="ai-fourth-img-liar"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FourthSection;