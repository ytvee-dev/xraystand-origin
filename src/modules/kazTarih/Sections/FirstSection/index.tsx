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
        <section className="kaz-tarih-first-section">
            <img src={paths.bg} alt="" className="kaz-tarih-bg-img"/>

            <div className="kaz-tarih-first-section-content-wrapper">
                <h2 className="kaz-tarih-first-section-title">{content.title}</h2>
                <p className="kaz-tarih-first-section-subtitle">{content.description}</p>
                <Carousel>
                    <div className="kaz-tarih-cards-wrapper">
                        {cards.map((card, index) =>
                            <TextFormatterCard items={card} key={index}/>
                        )}
                    </div>
                </Carousel>
                {/* <DSNotification content={summaryCard}/> */}
            </div>
        </section>
    );
};

export default CoverSection;