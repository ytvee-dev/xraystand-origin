import React, { type ReactElement, useState } from 'react';
import BackgroundedTitle from '@modules/physics/components/BackgroundedTitle';
import Slider from "@components/common/Other/Slider";
import { motion, AnimatePresence } from "framer-motion";
import { usePageData } from "@hooks/usePageData";
import { useLocaleContent } from '@hooks/useLocale';
import * as textContentRu from '@modules/physics/locales/rus.json';
import * as textContentKz from '@modules/physics/locales/kaz.json';
import * as paths from '@modules/physics/locales/paths.json'
import './style.css'

type TCardImages = "Newton" |
                 "Einstein" |
               "Rutherford" |
                    "Tesla" | 
                    "Curie";

interface CardContent {
    id: string,
    title: string,
    description: string
}

interface Card {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    image: string,
    content: CardContent[]
}

const SecondSection: React.FC= (): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz)
    const { screenWidth } = usePageData();
    const isMobile = screenWidth <= 768;
    const [index, setIndex] = useState(0);

    const subCards: CardContent[] = [];
    const imagePaths = paths.peoples as Record<TCardImages, string>;
    
    const cards: Card[] = textContent.scientistsSection.content.map(
        (cardItem, index) => {

            cardItem.content.map((subCardItem, indexSubCard) => {
                if(subCardItem.title.length > 0) {
                    subCards.push({
                        id: String(indexSubCard + 1),
                        title: subCardItem.title,
                        description: subCardItem.description
                    })
                }
            })

            return {
                id: String(index + 1),
                title: cardItem.title,
                subtitle: cardItem.subTitle,
                description: cardItem.description,
                image: imagePaths[cardItem.image as TCardImages],
                content: subCards,
            }
        }
    )
    console.log(subCards)
    return (
        <section className='physics-second-section'>
            <BackgroundedTitle title={textContent.scientistsSection.title}/>

            <motion.div
                className="motion-slider"
                style={{
                    width: isMobile ? "180px" : "330px",
                    height: isMobile ? 220 : 400,
                    position: "relative",
                    margin: "0 auto",
                }}
            >
                <AnimatePresence initial={false}>
                    <Slider
                        key={index + 1}
                        frontCard={false}
                        index={(index + 1) % cards.length}
                        card={cards[(index + 1) % cards.length]}
                    />
                    <Slider
                        key={index}
                        frontCard={true}
                        index={index % cards.length}
                        setIndex={setIndex}
                        drag="x"
                        card={cards[index % cards.length]}
                    />
                </AnimatePresence>
            </motion.div>

            <div className='physics-second-section-card-text'>
                <h3>{cards[index] ? cards[index].title : cards[0].title}</h3>
                <p>{cards[index] ? cards[index].description : cards[0].description}</p>

                <ul>
                    {cards[index].content.map((bulletList, index) => {
                        <li>{bulletList}</li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default SecondSection;