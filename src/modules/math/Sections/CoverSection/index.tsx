import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";

import "./style.css";
import {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import * as textContentKz from "@modules/math/locales/kaz.json";
import * as textContentRu from "@modules/math/locales/rus.json";

const image = "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000207/hero_hicgli.png";
const background = "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000201/herobg_qcztzv.svg";

const heroArrowImage = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000202/hero-sm-4_ubwsna.svg';
const heroSm1 = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000200/hero-sm-1_qzvjor.svg';
const heroSm2 = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000200/hero-sm-2_ghyhep.svg';
const heroSm3 = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000200/hero-sm-3_vkemtf.svg';
const heroSm4 = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000200/Group_y4ixr4.svg';

const CoverSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const textContent = currentLocale === Languages.KAZAKH ? textContentKz : textContentRu;


    return (
        <section className={className}>
            <img id='heroSm1' className='math-custom-svg' src={heroSm1} alt={'image'}/>
            <img id='heroSm2' className='math-custom-svg' src={heroSm2} alt={'image'}/>
            <img id='heroSm3' className='math-custom-svg' src={heroSm3} alt={'image'}/>
            <img id='heroSm4' className='math-custom-svg' src={heroSm4} alt={'image'}/>
            <img id='heroArrowImage' className='math-custom-svg' src={heroArrowImage} alt={'image'}/>

            <div className='math-hero-wrapper'>
                <div className='math-hero-background'>
                    <img src={background} alt={'image'}/>
                </div>
                <div className='math-hero-content'>
                    <div className='math-hero-text'>
                        <h1>{textContent.coverSection.title}</h1>
                        <p>{textContent.coverSection.description}</p>
                    </div>
                    <div className='math-hero-image-wrapper'>
                        <img src={image} alt={'image'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
