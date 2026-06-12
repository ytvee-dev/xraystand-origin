import * as paths from "@modules/kazTarih/locales/paths.json";
import { type IKazTarihProps } from "@modules/kazTarih/types/index";
import Carousel from "@modules/kazTarih/components/Carousel";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import DSNotification from "@components/common/DSNotification";
import { type ReactElement } from "react";
import "./style.css";

const SixthSection = ({
    content,
    summaryCardFontSize,
}: IKazTarihProps): ReactElement => {
    const cards = content.cards;
    const summaryCard = content.summaryCard;

    return (
        <section className="kt-sixth-section">
            <img src={paths.bg} alt="" className="kt-bg-img kt-bg-dark-img" />

            <div className="kt-sixth-section-content-wrapper">
                <h2 className="kt-title gr-font-family kt-sixth-section-title">
                    {content.title}
                </h2>
                <p className="kt-description kt-sixth-section-description">
                    {content.description}
                </p>

                <Carousel style={{ padding: "0 1rem 0 0" }}>
                    {cards.map((card, index) => (
                        <TextFormatterCard
                            items={card}
                            theme="dark"
                            key={index}
                            className="kt-formatter-card kaz-tarih-carousel-card"
                        />
                    ))}
                </Carousel>
                <div className="kt-summary-card-wrapper">
                    <DSNotification
                        content={summaryCard}
                        type="info"
                        iconColor="#61361E"
                        backgroundColor="#F4E0BF"
                        textColor="#61361E"
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

export default SixthSection;
