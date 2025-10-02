import React, {type ReactElement, useState} from "react";
import type {MathSectionProps} from "@modules/math/types";
import { useMathPageData } from "@hooks/useMathPageData";
import Slider from "@components/common/Other/Slider";
import {
    motion,
    AnimatePresence
} from "framer-motion";
import * as paths from '@modules/math/locales/paths.json';
import "./style.css";

export type TCard = { id: string; title: string; subtitle: string; description: string; image: string };

const SecondSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const { textContent, screenWidth } = useMathPageData();
    const isMobile = screenWidth <= 768;
    const [index, setIndex] = useState(0);

    const cards: TCard[] = textContent.secondSection.content.map((contentItem, idx) => {
        return {
            id: String(idx + 1),
            title: contentItem.title,
            subtitle: contentItem.subTitle,
            description: contentItem.description,
            image: paths.cards[idx] || ""
        };
    });

    return (
        <section className={className}>
            <div className='math-second-section-background'>
                <img src={paths.svg.spiral} alt={'image'}/>
            </div>
            <h2>{textContent.secondSection.title}</h2>
            <div className='math-second-section-content-wrapper'>
                <motion.div
                    className='motion-slider'
                    style={{
                        width: isMobile ? '200px' : '400px',
                        height: isMobile ? 150 : 340,
                        position: "relative",
                        margin: '0 auto'
                    }}>
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

            </div>
            <div className='math-second-section-card-text'>
                <h3>{cards[index] ? cards[index].title : cards[0].title}</h3>
                <p>{cards[index] ? cards[index].description : cards[0].description}</p>
            </div>
        </section>
    );
};

export default SecondSection;
