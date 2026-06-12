import * as paths from "@modules/kazTarih/locales/paths.json";
import { type IKazTarihProps } from "@modules/kazTarih/types/index";
import Carousel from "@modules/kazTarih/components/Carousel";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import DSNotification from "@components/common/DSNotification";
import { type ReactElement } from "react";
import "./style.css";

const ThirdSection = ({
    content,
    summaryCardFontSize,
}: IKazTarihProps): ReactElement => {
    const cards = content.cards;
    const summaryCard = content.summaryCard;

    return (
        <section className="kt-third-section">
            <img src={paths.bg} alt="" className="kt-bg-img kt-bg-light-img" />

            <div className="kt-third-weapons-images-wrapper">
                {paths.weapons.map((weapon, index) => (
                    <img
                        src={weapon}
                        alt=""
                        key={index}
                        className={`kt-third-weapons-images kt-weapons-${index}`}
                    />
                ))}
            </div>

            <div className="kt-third-section-content-wrapper">
                <h2 className="kt-title gr-font-family kt-third-section-title">
                    {content.title}
                </h2>
                <p className="kt-description kt-third-section-description">
                    {content.description}
                </p>

                <Carousel style={{ padding: "0 1rem 0 0" }}>
                    {cards.map((card, index) => (
                        <TextFormatterCard
                            items={card}
                            key={index}
                            className="kt-formatter-card kaz-tarih-carousel-card"
                        />
                    ))}
                </Carousel>

                <div className="kt-summary-card-wrapper">
                    <DSNotification
                        content={summaryCard}
                        type="info"
                        iconColor="white"
                        backgroundColor="rgba(255, 255, 255, 0.2)"
                        textColor="white"
                        borderColor="#724f35"
                        borderRadius="0"
                        fontSize={`${summaryCardFontSize}px`}
                        fullWidth
                        cardGap="10px"
                    />
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
