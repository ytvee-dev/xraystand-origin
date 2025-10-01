import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";
import paths from "@modules/math/locales/paths.json";

import "./style.css";
import BrainCard from "@modules/math/components/BrainCard";
import {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/math/locales/kaz.json";
import * as textContentRu from "@modules/math/locales/rus.json";
import useScreenWidth from "@hooks/useScreenWidth.ts";

// Позиции точек относительно изображения мозга (в процентах от размеров изображения)
// Учитываем, что изображение центрируется и имеет max-width: 848px
const dotPositions = [
    { top: '21%', left: '28%' },  // Dot 0 - Top-Left, White Hemisphere
    { top: '58%', left: '22%' },  // Dot 1 - Mid-Left, White Hemisphere
    { top: '13%', left: '56%' },  // Dot 2 - Top-Right, Blue Hemisphere (highlighted)
    { top: '38%', left: '62%' },  // Dot 3 - Mid-Right, Blue Hemisphere
    { top: '63%', left: '82%' },  // Dot 4 - Lower-Right, Blue Hemisphere
    { top: '85%', left: '60%' },  // Dot 5 - Bottom-Center-Right, Blue Hemisphere
];

const ThirdSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const isMobile = useScreenWidth() < 800;
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const textContent = currentLocale === Languages.KAZAKH ? textContentKz : textContentRu;

    const [selectedDotIndex, setSelectedDotIndex] = React.useState<number | null>(null);

    const handleSelectedDot = (index: number) => {
        console.log(index);
        if (index === selectedDotIndex) {
            setSelectedDotIndex(null);
            return;
        }
        setSelectedDotIndex(index);
    }

    // Функция для расчета позиции карточки относительно точки
    const getCardPosition = (dotIndex: number) => {
        if (isMobile) return ;

        const dot = dotPositions[dotIndex];
        const dotTop = parseFloat(dot.top);
        const dotLeft = parseFloat(dot.left);
        
        // Определяем оптимальную позицию карточки относительно точки
        // Карточка должна появляться рядом с точкой, не перекрывая её
        
        // Если точка в левой части мозга - карточка справа
        if (dotLeft < 50) {
            return {
                top: `${dotTop}%`,
                left: `${Math.min(dotLeft + 20, 85)}%`, // Смещаем вправо от точки, но не выходим за границы
                transform: 'translate(0, -50%)'
            };
        } 
        // Если точка в правой части мозга - карточка слева
        else {
            return {
                top: `${dotTop}%`,
                left: `${Math.max(dotLeft - 20, 51)}%`, // Смещаем влево от точки, но не выходим за границы
                transform: 'translate(-100%, -50%)'
            };
        }
    }

    return (<section className={className}>
        <h2>{textContent.thirdSection.title}</h2>

        <div className='math-hero-background'>
            <img src={paths.svg.heroBg} alt={'image'}/>
        </div>

        <div className='math-brain-content'>
            <div className='math-brain-content-inner'>
                <img src={paths.images.brain} alt='brain' />

                {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            id={`dot-${index}`}
                            className={`math-brain-dot ${selectedDotIndex === index ? 'selected-dot' : ''}`}
                            onClick={() => handleSelectedDot(index)}
                            style={{
                                position: "absolute",
                                top: dotPositions[index].top,
                                left: dotPositions[index].left,
                                transform: 'translate(-50%, -50%)', // Центрируем точку относительно позиции
                            }}
                        ></div>
                    )
                )}
            </div>

            {selectedDotIndex !== null && (
                <div
                    className='math-brain-content-card'
                    style={{
                        position: isMobile ? "relative" : "absolute",
                        ...getCardPosition(selectedDotIndex)
                    }}
                >
                    <BrainCard
                        title={textContent.thirdSection.content[selectedDotIndex].title}
                        description={textContent.thirdSection.content[selectedDotIndex].description}
                    />
                </div>
            )}
        </div>
    </section>);
};

export default ThirdSection;
