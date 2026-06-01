import * as content from "@modules/kazTarih/locales/rus.json";
import "./style.css";
import TextFormatterCard from '@modules/kazTarih/components/TextFormatterCard'

const SeasonPage = () => {
    const cards = content.firstSection.cards;
    const CardsMap = Object.values(cards);

    return (
        <div className="implementation">
            {CardsMap.map((card, index) => 
                <TextFormatterCard items={card} 
                theme={index % 2 == 0 ? "dark" : "light"} 
                key={index}/>
            )}
        </div>
    );
};

export default SeasonPage;
