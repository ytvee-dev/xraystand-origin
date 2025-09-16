import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";

import "./style.css";

const image = "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000207/hero_hicgli.png";
const background = "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1757000201/herobg_qcztzv.svg";

const CoverSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {

    return (
        <section className={className}>
            <div className='math-hero-wrapper'>
                <div className='math-hero-background'>
                    <img src={background} alt={'image'}/>
                </div>
                <div className='math-hero-content'>
                    <div className='math-hero-text'>
                        <h1>Царица всех наук</h1>
                        <p>
                            Курица, рыба, яйца, бобовые, орехи —
                            помогают росту и восстановлению клеток,
                            поддерживают мышцы и иммунную систему.
                        </p>
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
