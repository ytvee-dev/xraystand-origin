import React, {useCallback, useState} from 'react'
import {type EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import paths from "@modules/home/locales/paths.json";
import "./style.css";

type PropType = {
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const imagesPaths = paths.rooms;
    const {options} = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({playOnInit: true, speed: 1, stopOnFocusIn: true}),
    ]);
    const [modalSrc, setModalSrc] = useState<string | null>(null)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            const autoScroll = emblaApi?.plugins()?.autoScroll
            if (!autoScroll) return

            const resetOrStop = autoScroll.reset;
            resetOrStop()
            callback()
        },
        [emblaApi]
    );

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {imagesPaths.map((room: string, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <img src={room} alt='stand-photo' onClick={() => setModalSrc(room)}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>

            {modalSrc && (
                <div
                    className="embla-modal"
                    onClick={() => setModalSrc(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <img className="embla-modal__img" src={modalSrc} alt="preview"/>
                    <button
                        className="embla-modal__close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setModalSrc(null);
                        }}
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    )
}

export default EmblaCarousel
