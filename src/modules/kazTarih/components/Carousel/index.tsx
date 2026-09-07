import useEmblaCarousel from "embla-carousel-react";
import {
    type ReactElement,
    type ReactNode,
    useEffect,
    useState,
} from "react";
import type { CSSProperties } from "@mui/material";

import "./style.css";

interface ICarouselProps {
    className?: string;
    children?: ReactNode | ReactElement;
    style?: CSSProperties;
}

const Carousel = ({
    children,
    className,
    style,
}: ICarouselProps): ReactElement => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [isDragging, setIsDragging] = useState(false);

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    function subscribeToPointerEvents() {
        const api = emblaApi;

        if (!api) return;

        function handlePointerDown() {
            setIsDragging(true);
        }

        function handlePointerUp() {
            setIsDragging(false);
        }

        api.on("pointerDown", handlePointerDown);
        api.on("pointerUp", handlePointerUp);

        function unsubscribeFromPointerEvents() {
            api?.off("pointerDown", handlePointerDown);
            api?.off("pointerUp", handlePointerUp);
        }

        return unsubscribeFromPointerEvents;
    }

    useEffect(subscribeToPointerEvents, [emblaApi]);

    return (
        <div className={`kaz-tarih-carousel ${className || ""}`}>
            <div
                className="kaz-tarih-carousel-viewport"
                ref={emblaRef}
                style={style}
            >
                <div className="kaz-tarih-carousel-container">
                    {children}
                </div>
            </div>

            {!isDragging && (
                <>
                    <button
                        type="button"
                        className="kaz-tarih-carousel-arrow kaz-tarih-carousel-arrow-left"
                        onClick={scrollPrev}
                        aria-label="Previous slide"
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 12 35"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M9.5 2.5L2.59794 16.635C2.46569 16.9058 2.46265 17.2218 2.58966 17.4951L9.5 32.3667"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="kaz-tarih-carousel-arrow kaz-tarih-carousel-arrow-right"
                        onClick={scrollNext}
                        aria-label="Next slide"
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 12 35"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M2.5 2.5L9.40206 16.635C9.53431 16.9058 9.53735 17.2218 9.41034 17.4951L2.5 32.3667"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
};

export default Carousel;