import {type ReactElement, useEffect, useRef, useState} from "react";
import {contentAnimationsSrcPrefix, contentImageSrcSuffix} from "@utils/constants";
import "./style.css";

const AnimatedCarCard = (): ReactElement => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const handleScroll = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const maxScroll = documentHeight - windowHeight;
                const currentScroll = window.scrollY;
                const progress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);
                setScrollProgress(Math.min(Math.max(progress, 0.107), 0.207));
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const MIN_OFFSET = -25;
    const MAX_OFFSET = 150;
    const leftPercent = MIN_OFFSET + scrollProgress * (MAX_OFFSET);

    return (
        <div className="animated-car-card" ref={containerRef}>
            <div className="animated-car-wrapper">
                <img
                    className="animated-car-image"
                    src={`${contentAnimationsSrcPrefix}animatedSmallCar${contentImageSrcSuffix}`}
                    alt="animated car"
                    style={{
                        transform: `translateX(${leftPercent}%)`,
                    }}
                />
            </div>
        </div>
    );
};

export default AnimatedCarCard;
