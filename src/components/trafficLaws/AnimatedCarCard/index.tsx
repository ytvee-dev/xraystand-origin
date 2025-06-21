import {type ReactElement, useEffect, useState} from "react";
import {contentAnimationsSrcPrefix, contentImageSrcSuffix} from "@utils/constants";
import "./style.css";

const AnimatedCarCard = (): ReactElement => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTablet, setIsTablet] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth > 800 && window.innerWidth <= 1000);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    })

    useEffect(() => {
        let animationFrameId: number;

        const handleScroll = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                const carDistance = isTablet ? 1400 : 600;
                const currentScrollY = window.scrollY < carDistance ? window.scrollY : carDistance;

                setLastScrollY(currentScrollY);

                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const maxScroll = documentHeight - windowHeight;

                setScrollProgress(Math.min(currentScrollY / maxScroll, 1));
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const carPosition = `${scrollProgress * 100}%`;

    return (
        <div className="animated-car-card">
            <div className="animated-car-wrapper">
                <img
                    className="animated-car-image"
                    src={`${contentAnimationsSrcPrefix}animatedSmallCar${contentImageSrcSuffix}`}
                    alt="animated car"
                    style={{
                        left: carPosition,
                    }}
                />
            </div>
        </div>
    );
};

export default AnimatedCarCard;
