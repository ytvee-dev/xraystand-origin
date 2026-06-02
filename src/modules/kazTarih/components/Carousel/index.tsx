import useEmblaCarousel from "embla-carousel-react";
import { type ReactElement, type ReactNode } from "react";
import "./style.css";

interface ICarouselProps {
    children?: ReactNode | ReactElement;
    padding?: string;
}

const Carousel = ({ children, padding }: ICarouselProps): ReactElement => {
    const [emblaRef] = useEmblaCarousel({ containScroll: "trimSnaps" });

    return (
        <div className="kaz-carousel embla">
            <div
                className="embla__viewport"
                ref={emblaRef}
                style={{ padding: padding }}
            >
                <div className="embla__container">{children}</div>
            </div>
        </div>
    );
};

export default Carousel;
