import * as paths from '@modules/physics/locales/paths.json';
import { svg } from '@modules/math/locales/paths.json';
import * as textContentRu from '@modules/physics/locales/rus.json';
import * as textContentKz from '@modules/physics/locales/kaz.json';
import { useLocaleContent } from '@hooks/useLocale';
import './style.css';
import type { ReactElement } from 'react';

const CoverSection: React.FC = ():ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz)

    return (
        <section className='physics-cover-section'>
            <div className='physics-hero-background'>
                <img src={svg.heroBg} alt='image'/>
            </div>

            <div className="physics-hero-wrapper">
                <img className='physics-custom-svg' src={paths.svg.cover1} alt='image'/>
                <img className='physics-custom-svg' src={paths.svg.cover2} alt='image'/>
                <img className='physics-custom-svg' src={paths.svg.cover3} alt='image'/>
                <img className='physics-custom-svg' src={paths.svg.cover4} alt='image'/>
                <img className='physics-custom-svg' src={paths.svg.cover5} alt='image'/>
                
                <div className="physics-hero-content">
                    <div className="physics-hero-text">
                        <h1>{textContent.coverSection.title}</h1>
                        <p>{textContent.coverSection.description}</p>
                    </div>
                    <div className="physics-hero-image-wrapper">
                        <img src={paths.heroImg} alt='image'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoverSection;