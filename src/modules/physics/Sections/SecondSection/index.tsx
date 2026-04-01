import React, { type ReactElement, useState } from 'react';
import BackgroundedTitle from '@modules/physics/components/BackgroundedTitle';
import Slider from "@components/common/Other/Slider";
import { motion, AnimatePresence } from "framer-motion";
import * as paths from '@modules/physics/locales/paths.json'
import './style.css';

interface IScientistsCardContent {
    title: string,
    description: string
}

interface IScientistsCard {
    title: string,
    subTitle: string,
    description: string,
    image: string,
    content: IScientistsCardContent[]
}

interface ISecondContent {
    title: string,
    subTitle: string,
    description: string,
    content: IScientistsCard[]
}

interface ISecondSectionProps {
    content: ISecondContent,
    width: number
}

type TImagesNames = "Newton" |
    "Einstein" |
    "Rutherford" |
    "Tesla" |
    "Curie";

interface IListContent {
    title: string,
    description: string
}

interface IDescriptionList {
    title: string,
    content: IListContent[]
}

interface ITextCard {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    image: string,
    content: IDescriptionList[]
}

const SecondSection: React.FC<ISecondSectionProps> = ({ content, width }: ISecondSectionProps): ReactElement => {
    const isMobile = width <= 768;
    const [index, setIndex] = useState(0);

    const imagePaths = paths.peoples as Record<TImagesNames, string>;

    const cards: ITextCard[] = content.content.map(
        (cardItem, index) => {
            const descriptionList: IDescriptionList[] = cardItem.content.reduce(
                (acc: IDescriptionList[], contentItem) => {
                    if (contentItem.title) {
                        acc.push({ title: contentItem.title, content: [contentItem] })
                    } else {
                        acc[acc.length - 1].content.push(contentItem);
                    }
                    return acc;
                }, [])

            return {
                id: String(index + 1),
                title: cardItem.title,
                subtitle: cardItem.subTitle,
                description: cardItem.description,
                image: imagePaths[cardItem.image as TImagesNames],
                content: descriptionList,
            }
        }
    )

    const indexedCard = cards[index] ? cards[index] : cards[0]
    const sliderSize = {
        width: 330,
        height: 400,
        mobileWidth: 188,
        mobileHeight: 228
    }

    return (
        <section className='physics-second-section'>
            <BackgroundedTitle title={content.title} />

            <div className="physics-second-section-content">
                <motion.div
                    className="motion-slider"
                    style={{
                        width: isMobile ? "188px" : "330px",
                        height: isMobile ? 228 : 400,
                        position: "relative",
                    }}
                >
                    <AnimatePresence initial={false}>
                        <Slider
                            key={index + 1}
                            frontCard={false}
                            index={(index + 1) % cards.length}
                            card={cards[(index + 1) % cards.length]}
                            width={sliderSize.width}
                            mobileWidth={sliderSize.mobileWidth}
                            height={sliderSize.height}
                            mobileHeight={sliderSize.mobileHeight}
                            borderRadius={0}
                        />
                        <Slider
                            key={index}
                            frontCard={true}
                            index={index % cards.length}
                            setIndex={setIndex}
                            drag={true}
                            card={cards[index % cards.length]}
                            width={sliderSize.width}
                            mobileWidth={sliderSize.mobileWidth}
                            height={sliderSize.height}
                            mobileHeight={sliderSize.mobileHeight}
                            borderRadius={0}
                        />
                    </AnimatePresence>
                </motion.div>

                <div className='physics-second-section-card-text'>
                    <h3>{indexedCard.title}</h3>
                    <p>{indexedCard.description}</p>

                    <div className="physics-second-section-discoveries-wrapper">
                        <p>{indexedCard.content[0].title}</p>
                        <ul className='physics-second-section-card-text-discoveries'>
                            {indexedCard.content[0].content.map((item, index) =>
                                <li key={index}>{item.description}</li>
                            )}
                        </ul>
                    </div>

                    <div className="physics-second-section-discoveries-facts">
                        <p>{indexedCard.content[1].title}</p>
                        <ol className='physics-second-section-card-text-facts'>
                            {indexedCard.content[1].content.map((item, index) =>
                                <li key={index}>{item.description}</li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;