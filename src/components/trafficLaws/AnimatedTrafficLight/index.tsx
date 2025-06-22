import {type ReactElement, useEffect, useState} from "react";
import {
    trafficLightsPaths as trafficLightsMobilePaths,
    trafficLightsPaths
} from "@components/trafficLaws/AnimatedTrafficLight/meta.ts";
import "./style.css";

const AnimatedTrafficLight = (): ReactElement => {
    const [redLightHovered, setRedLightHovered] = useState(false);
    const [yellowLightHovered, setYellowLightHovered] = useState(false);
    const [greenLightHovered, setGreenLightHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 540);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    })

    return (
        <div className="animated-traffic-light">
            <div className="animated-traffic-light-wrapper">
                <div className="traffic-light-background-image-wrapper">
                    <img src={trafficLightsPaths.background}/>
                </div>
                <div className="traffic-light-container">
                    <div className="traffic-light-off-image-wrapper">
                        {!isMobile && <img src={trafficLightsPaths.rus.red.off}/>}
                        {isMobile && <img src={trafficLightsMobilePaths.rus.red.off}/>}
                    </div>
                    <div className="traffic-light-off-image-wrapper">
                        {!isMobile && <img src={trafficLightsPaths.rus.yellow.off}/>}
                        {isMobile && <img src={trafficLightsMobilePaths.rus.yellow.off}/>}
                    </div>
                    <div className="traffic-light-off-image-wrapper">
                        {!isMobile && <img src={trafficLightsPaths.rus.green.off}/>}
                        {isMobile && <img src={trafficLightsMobilePaths.rus.green.off}/>}

                    </div>
                    <div className="tl-turned-on">
                        <div
                            className={`traffic-light-on-image-wrapper red-light-${redLightHovered ? "on" : "off"}`}
                            onMouseEnter={() => setRedLightHovered(true)}
                            onMouseLeave={() => setRedLightHovered(false)}
                        >
                            {!isMobile && <img
                                src={trafficLightsPaths.rus.red.on}
                            />}
                            {isMobile && <img
                                src={trafficLightsMobilePaths.rus.red.on}
                            />}
                            <span className="text-assembly">
                                Красный — стой
                            </span>
                        </div>

                        <div
                            className={`traffic-light-on-image-wrapper yellow-light-${yellowLightHovered ? "on" : "off"}`}
                            onMouseEnter={() => setYellowLightHovered(true)}
                            onMouseLeave={() => setYellowLightHovered(false)}
                        >
                            {!isMobile && <img
                                src={trafficLightsPaths.rus.yellow.on}
                            />}
                            {isMobile && <img
                                src={trafficLightsMobilePaths.rus.yellow.on}
                            />}
                            <span className="text-assembly">Желтый — приготовься</span>
                        </div>

                        <div
                            className={`traffic-light-on-image-wrapper green-light-${greenLightHovered ? "on" : "off"}`}
                            onMouseEnter={() => setGreenLightHovered(true)}
                            onMouseLeave={() => setGreenLightHovered(false)}
                        >
                            {!isMobile && <img
                                src={trafficLightsPaths.rus.green.on}
                            />}
                            {isMobile && <img
                                src={trafficLightsMobilePaths.rus.green.on}
                            />}
                            <span className="text-assembly">Зелёный — можно идти</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedTrafficLight;