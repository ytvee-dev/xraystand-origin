import * as paths from "@modules/kazTarih/locales/paths.json";
import { type IKazTarihProps } from "@modules/kazTarih/types/index";
import Carousel from "@modules/kazTarih/components/Carousel";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import DSNotification from "@components/common/DSNotification";
import { type ReactElement } from "react";
import "./style.css";

const FifthSection = ({
    content,
    summaryCardFontSize,
}: IKazTarihProps): ReactElement => {
    const cards = content.cards;
    const summaryCard = content.summaryCard;

    const descriptionParts = content.description.split("\n");

    const descriptionObj = {
        startParagraphs: descriptionParts.slice(0, 2),
        list: descriptionParts.slice(2, 6),
        endParagraphs: descriptionParts[6],
    };

    return (
        <section className="kt-fifth-section">
            <img src={paths.bg} alt="" className="kt-bg-img kt-bg-dark-img" />

            <div className="kt-fifth-section-content-wrapper">
                <h2 className="kt-title gr-font-family kt-fifth-section-title">
                    {content.title}
                </h2>

                <div className="kt-fifth-description-wrapper kt-description">
                    {descriptionObj.startParagraphs.map((item) => (
                        <p className="kt-fifth-description-text" key={item}>
                            {item}
                        </p>
                    ))}

                    <ul className="kt-fifth-description-list">
                        {descriptionObj.list.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <p className="kt-fifth-description-text">
                        {descriptionObj.endParagraphs}
                    </p>
                </div>

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

export default FifthSection;
