import {type ReactElement, useRef} from "react";
import {contentAnimationsSrcPrefix, contentImageSrcSuffix} from "@utils/constants";
import "./style.css";

const AnimatedCarCard = (): ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="animated-car-card" ref={containerRef}>
            <div className="animated-car-wrapper">
                <img
                    className="animated-car-image"
                    src={`${contentAnimationsSrcPrefix}animatedSmallCar${contentImageSrcSuffix}`}
                    alt="animated car"
                    crossOrigin="anonymous"
                />
            </div>
        </div>
    );
};

export default AnimatedCarCard;
