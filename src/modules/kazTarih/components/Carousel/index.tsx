import useEmblaCarousel from "embla-carousel-react";
import { type ReactElement, type ReactNode } from "react";
import "./style.css";

interface ICarouselProps {
    children?: ReactNode | ReactElement;
    padding?: string;
}

const Carousel = ({ children, padding }: ICarouselProps): ReactElement => {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="kaz-tarih-carousel">
            <div
                className="kaz-tarih-carousel-viewport"
                ref={emblaRef}
                style={{ padding: padding }}
            >
                <div className="kaz-tarih-carousel-container">{children}</div>
            </div>
        </div>
    );
};

export default Carousel;
