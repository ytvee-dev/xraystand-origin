import useEmblaCarousel from "embla-carousel-react";
import { type ReactElement, type ReactNode } from "react";
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

    const scrollPrev = () => {
        emblaApi?.scrollPrev();
    };

    const scrollNext = () => {
        emblaApi?.scrollNext();
    };
    return (
        <div className={`kaz-tarih-carousel ${className || ""}`}>
            <div
                className="kaz-tarih-carousel-viewport"
                ref={emblaRef}
                style={style}
            >
                <div className="kaz-tarih-carousel-container">{children}</div>
            </div>

            <button className="kaz-tarih-carousel-arrow kaz-tarih-carousel-arrow-left" onClick={scrollPrev}>
                <span>‹</span>
            </button>

            <button className="kaz-tarih-carousel-arrow kaz-tarih-carousel-arrow-right" onClick={scrollNext}>
                <span>›</span>
            </button>
        </div>
    );
};

export default Carousel;
