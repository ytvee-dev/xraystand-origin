import * as paths from "@modules/kazTarih/locales/paths.json";
import { type IKazTarihProps } from '@modules/kazTarih/types/index';
import Carousel from "@modules/kazTarih/components/Carousel";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
import DSNotification from '@components/common/DSNotification';
import { type ReactElement } from "react";
import "./style.css";

const FourthSection = ({content, summaryCardFontSize}: IKazTarihProps): ReactElement => {
    const cards = content.cards;
    const summaryCard = content.summaryCard;

    return (
        <section className="kt-fourth-section">
            <img src={paths.bg} alt="" className="kt-bg-img kt-bg-light-img"/>

            <div className="kt-fourth-section-content-wrapper">
                <h2 className="kt-title gr-font-family kt-fourth-section-title">{content.title}</h2>
                <p className="kt-description kt-fourth-section-description">{content.description}</p>

                <Carousel className="kt-formatter-card-wrapper">
                    {cards.map((card, index) =>
                        <TextFormatterCard items={card} key={index} className="kt-formatter-card"/>
                    )}
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

export default FourthSection;