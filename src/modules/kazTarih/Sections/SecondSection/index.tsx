import * as paths from "@modules/kazTarih/locales/paths.json";
import { type IKazTarihProps } from "@modules/kazTarih/types/index";
import Carousel from "@modules/kazTarih/components/Carousel";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import DSNotification from "@components/common/DSNotification";
import { type ReactElement } from "react";
import "./style.css";

const Second = ({
    content,
    summaryCardFontSize,
}: IKazTarihProps): ReactElement => {
    const cards = content.cards;
    const summaryCard = content.summaryCard;

    return (
        <section className="kt-second-section">
            <img src={paths.bg} alt="" className="kt-bg-img kt-bg-light-img" />
            <img
                src={paths.lambs}
                alt=""
                className="kt-bg-lambs kt-top-lambs"
            />
            <img
                src={paths.lambs}
                alt=""
                className="kt-bg-lambs kt-bottom-lambs"
            />

            <div className="kt-second-section-content-wrapper">
                <h2 className="kt-title gr-font-family kt-second-section-title">
                    {content.title}
                </h2>
                <p className="kt-description kt-second-section-description">
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

export default Second;
