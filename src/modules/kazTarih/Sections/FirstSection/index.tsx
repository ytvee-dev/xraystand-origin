import * as paths from "@modules/kazTarih/locales/paths.json";
import { type IKazTarihProps } from '@modules/kazTarih/types/index';
import Carousel from "@modules/kazTarih/components/Carousel";
import TextFormatterCard from "@modules/kazTarih/components/TextFormatterCard";
// import DSNotification from '@components/common/DSNotification';
import type { ReactElement } from "react";
import "./style.css";

const CoverSection = ({content}: IKazTarihProps): ReactElement => {
    const cards = Object.values(content.cards);
    // const summaryCard = content.summaryCard;

    return (
        <section className="kt-first-section">
            <img src={paths.bg} alt="" className="kt-bg-img"/>

            <div className="kt-first-section-content-wrapper">
                <h2 className="kt-title gr-font-family kt-first-section-title">{content.title}</h2>
                <p className="kt-description kt-first-section-description">{content.description}</p>

                <Carousel className="kt-formatter-card-wrapper">
                    {cards.map((card, index) =>
                        <TextFormatterCard items={card} key={index} className="kt-formatter-card"/>
                    )}
                </Carousel>
                {/* <DSNotification content={summaryCard}/> */}
            </div>
        </section>
    );
};

export default CoverSection;