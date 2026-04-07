import React from "react";
import './style.css';
import SoundCards, {type ISoundCard} from "@modules/KazMusInstruments/components/SoundCard";
import * as path from "@modules/KazMusInstruments/locales/paths.json"

const cards: ISoundCard[] = [
    {
        "title": "Домбра",
        "description": "Главный символ казахской музыки — двухструнный инструмент с длинным грифом и чистым проникновенным тембром. Народная домбра — без ладов, концертная — с ладами. В кюях домбра передаёт легенды, события и настроение степи.",
        "soundDescription": "Звучание: яркое, звонкое, выразительное.",
        "img": path.pluckedInstruments.dombra
    },
    {
        "title": "Жетыген",
        "description": "Древний многострунный щипковый инструмент (от 7 до 23 струн), по форме напоминает гусли/цитру. В легенде каждая из первых 7 струн — память о сыновьях, каждая звучит по-особому.",
        "soundDescription": "Звучание: яркое, звонкое, выразительное.",
        "img": path.pluckedInstruments.jetigen
    }
]


const Implementation: React.FC = () => {
    return (
        <div className={"implementation-page"}>
            <div className="left-card-wrapper">
                {cards.map(card => (
                <SoundCards 
                    key={card.title} 
                    cardContent={card}
                />
            ))}
            </div>
            <div className="right-card-wrapper">
                {cards.map(card => (
                <SoundCards 
                    key={card.title} 
                    cardContent={card}
                    theme="light"
                    imgSide="right"
                />
            ))}
            </div>
        </div>
    );
};

export default Implementation;
