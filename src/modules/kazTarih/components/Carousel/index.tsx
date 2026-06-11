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
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className={`kaz-tarih-carousel ${className || ""}`}>
            <div
                className="kaz-tarih-carousel-viewport"
                ref={emblaRef}
                style={style}
            >
                <div className="kaz-tarih-carousel-container">{children}</div>
            </div>
        </div>
    );
};

export default Carousel;
