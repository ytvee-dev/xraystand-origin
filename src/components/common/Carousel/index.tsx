import useEmblaCarousel from "embla-carousel-react";
import {
    type CSSProperties,
    type ReactElement,
    type ReactNode,
    useEffect,
    useState,
} from "react";
import "./style.css";

interface ICarouselProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const Carousel = ({ children, className, style }: ICarouselProps): ReactElement => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [isDragging, setIsDragging] = useState(false);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    useEffect(() => {
        if (!emblaApi) return;

        const handlePointerDown = () => setIsDragging(true);
        const handlePointerUp = () => setIsDragging(false);

        emblaApi.on("pointerDown", handlePointerDown);
        emblaApi.on("pointerUp", handlePointerUp);

        return () => {
            emblaApi.off("pointerDown", handlePointerDown);
            emblaApi.off("pointerUp", handlePointerUp);
        };
    }, [emblaApi]);

    return (
        <div className={`carousel ${className || ""}`}>
            <div className="carousel-viewport" ref={emblaRef} style={style}>
                <div className="carousel-container">{children}</div>
            </div>

            {!isDragging && (
                <>
                    <button
                        type="button"
                        className="carousel-arrow carousel-arrow-left"
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
                        className="carousel-arrow carousel-arrow-right"
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