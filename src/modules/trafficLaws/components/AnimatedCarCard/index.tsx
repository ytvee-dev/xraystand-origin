import {type ReactElement, useRef} from "react";
import "./style.css";

const animatedSmallCar = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768064382/animatedSmallCar_zxmhtk.webp';

const AnimatedCarCard = (): ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="animated-car-card" ref={containerRef}>
            <div className="animated-car-wrapper">
                <img
                    className="animated-car-image"
                    src={animatedSmallCar}
                    alt="animated car"
                />
            </div>
        </div>
    );
};

export default AnimatedCarCard;
