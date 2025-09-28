import React, {type ReactElement, useState} from "react";
import {useSelector} from "react-redux";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import * as paths from '@modules/math/locales/paths.json';
import * as textContentRu from '@modules/math/locales/rus.json';
import * as textContentKz from '@modules/math/locales/kaz.json';
import type {MathSectionProps} from "@modules/math/types";
import type {TRootState} from "../../../../store";
import {Languages} from "@domains/Translate";
import {
    motion,
    AnimatePresence
} from "framer-motion";
import "./style.css";
import Slider from "@components/common/Other/Slider";
import useScreenWidth from "@hooks/useScreenWidth.ts";

type TCard = { id: string; title: string; subtitle: string; description: string; image: string };

const SecondSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const screenWidth = useScreenWidth();
    const isMobile = screenWidth <= 768;
    const [index, setIndex] = useState(0);
    
    // Получаем текущий язык
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    
    // Выбираем нужный файл локализации
    const textContent = currentLocale === Languages.KAZAKH ? textContentKz : textContentRu;
    
    // Создаем карточки с локализованным контентом
    const items: TCard[] = paths.cards.map((cardUrl, idx) => {
        const contentItem = textContent.secondSection.content[idx];
        return {
            id: String(idx + 1),
            title: contentItem?.title || `Карточка ${idx + 1}`,
            subtitle: contentItem?.subTitle || "",
            description: contentItem?.description || "Описание карточки и что-то ещё полезное",
            image: cardUrl
        };
    });
    
    // Предзагрузка изображений
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    return (
        <section className={className}>
            <div className='math-second-section-backgorund'></div>
            <div className='math-second-section-content-wrapper'>
                <motion.div className='motion-slider' style={{
                    width: isMobile ? '200px' : '400px', 
                    height: isMobile ? 150 : 340, 
                    position: "relative",
                    margin: '0 auto'
                }}>
                    <AnimatePresence initial={false}>
                        <Slider
                            key={index + 1}
                            frontCard={false}
                            index={(index + 1) % items.length}
                            card={items[(index + 1) % items.length]}
                        />
                        <Slider
                            key={index}
                            frontCard={true}
                            index={index % items.length}
                            setIndex={setIndex}
                            drag="x"
                            card={items[index % items.length]}
                        />
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SecondSection;
