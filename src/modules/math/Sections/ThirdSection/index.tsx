import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";
import type {TRootState} from "@store/index.ts";
import {useSelector} from "react-redux";
import BrainCard from "@modules/math/components/BrainCard";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import {Languages} from "@domains/Translate";
import paths from "@modules/math/locales/paths.json";
import * as textContentKz from "@modules/math/locales/kaz.json";
import * as textContentRu from "@modules/math/locales/rus.json";
import "./style.css";

const dotPositions = [
    { top: '21%', left: '28%' },
    { top: '58%', left: '22%' },
    { top: '13%', left: '56%' },
    { top: '38%', left: '62%' },
    { top: '63%', left: '82%' },
    { top: '85%', left: '60%' },
];

const ThirdSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const isMobile = useScreenWidth() < 800;
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const textContent = currentLocale === Languages.KAZAKH ? textContentKz : textContentRu;

    const [selectedDotIndex, setSelectedDotIndex] = React.useState<number | null>(null);

    const handleSelectedDot = (index: number) => {
        if (index === selectedDotIndex) {
            setSelectedDotIndex(null);
            return;
        }
        setSelectedDotIndex(index);
    }

    const getCardPosition = (dotIndex: number) => {
        if (isMobile) return ;

        const dot = dotPositions[dotIndex];
        const dotTop = parseFloat(dot.top);
        const dotLeft = parseFloat(dot.left);
        
        if (dotLeft < 50) {
            return {
                top: `${dotTop}%`,
                left: `${Math.min(dotLeft + 20, 85)}%`,
                transform: 'translate(0, -50%)'
            };
        } 
        else {
            return {
                top: `${dotTop}%`,
                left: `${Math.max(dotLeft - 20, 51)}%`,
                transform: 'translate(-100%, -50%)'
            };
        }
    }

    return (<section className={`${className} ${selectedDotIndex !== null && 'expanded'}`}>
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
                                transform: 'translate(-50%, -50%)',
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
