import {type ReactElement, useRef} from "react";
import { getImageUrl } from "@utils/constants";
import "./style.css";

const AnimatedCarCard = (): ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="animated-car-card" ref={containerRef}>
            <div className="animated-car-wrapper">
                <img
                    className="animated-car-image"
                    src={getImageUrl("animations/animatedSmallCar.avif")}
                    alt="animated car"
                />
            </div>
        </div>
    );
};

export default AnimatedCarCard;
