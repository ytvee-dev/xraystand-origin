import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";
import type {TRootState} from "@store/index.ts";
import {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";
import * as textContentKz from "@modules/math/locales/kaz.json";
import * as textContentRu from "@modules/math/locales/rus.json";
import * as paths from "@modules/math/locales/paths.json";
import "./style.css";

const CoverSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const textContent = currentLocale === Languages.KAZAKH ? textContentKz : textContentRu;


    return (
        <section className={className}>
            <img id='heroSm1' className='math-custom-svg' src={paths.svg.heroSm1} alt={'image'}/>
            <img id='heroSm2' className='math-custom-svg' src={paths.svg.heroSm2} alt={'image'}/>
            <img id='heroSm3' className='math-custom-svg' src={paths.svg.heroSm3} alt={'image'}/>
            <img id='heroSm4' className='math-custom-svg' src={paths.svg.heroSm4} alt={'image'}/>
            <img id='heroArrowImage' className='math-custom-svg' src={paths.svg.heroArrowImage} alt={'image'}/>

            <div className='math-hero-wrapper'>
                <div className='math-hero-background'>
                    <img src={paths.svg.heroBg} alt={'image'}/>
                </div>
                <div className='math-hero-content'>
                    <div className='math-hero-text'>
                        <h1>{textContent.coverSection.title}</h1>
                        <p>{textContent.coverSection.description}</p>
                    </div>
                    <div className='math-hero-image-wrapper'>
                        <img src={paths.images.hero} alt={'image'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
