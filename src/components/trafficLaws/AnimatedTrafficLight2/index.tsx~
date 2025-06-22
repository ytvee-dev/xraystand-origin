import {type ReactElement, useState} from "react";
import {
    trafficLightsPaths
} from "@components/trafficLaws/AnimatedTrafficLight2/meta.ts";
import "./style.css";

const AnimatedTrafficLight = (): ReactElement => {
    const [redLightHovered, setRedLightHovered] = useState(false);
    const [yellowLightHovered, setYellowLightHovered] = useState(false);
    const [greenLightHovered, setGreenLightHovered] = useState(false);

    return (
        <div className="animated-traffic-light">
            <div className="animated-traffic-light-wrapper">
                <div className="traffic-light-background-image-wrapper">
                    <img src={trafficLightsPaths.background}/>
                </div>
                <div className="traffic-light-container">
                    <div className="traffic-light-off-image-wrapper">
                        <img src={trafficLightsPaths.red.off}/>
                    </div>
                    <div className="traffic-light-off-image-wrapper">
                        <img src={trafficLightsPaths.yellow.off}/>
                    </div>
                    <div className="traffic-light-off-image-wrapper">
                        <img src={trafficLightsPaths.green.off}/>

                    </div>
                    {/*<div className="tl-turned-on">*/}
                    {/*    <div*/}
                    {/*        className={`traffic-light-on-image-wrapper red-light-${redLightHovered ? "on" : "off"}`}*/}
                    {/*        onMouseEnter={() => setRedLightHovered(true)}*/}
                    {/*        onMouseLeave={() => setRedLightHovered(false)}*/}
                    {/*    >*/}
                    {/*        <img src={trafficLightsPaths.red.on}/>*/}
                    {/*        <span className="text-assembly">Красный — стой</span>*/}
                    {/*    </div>*/}

                    {/*    <div*/}
                    {/*        className={`traffic-light-on-image-wrapper yellow-light-${yellowLightHovered ? "on" : "off"}`}*/}
                    {/*        onMouseEnter={() => setYellowLightHovered(true)}*/}
                    {/*        onMouseLeave={() => setYellowLightHovered(false)}*/}
                    {/*    >*/}
                    {/*        <img src={trafficLightsPaths.yellow.on}/>*/}
                    {/*        <span className="text-assembly">Желтый — приготовься</span>*/}
                    {/*    </div>*/}

                    {/*    <div*/}
                    {/*        className={`traffic-light-on-image-wrapper green-light-${greenLightHovered ? "on" : "off"}`}*/}
                    {/*        onMouseEnter={() => setGreenLightHovered(true)}*/}
                    {/*        onMouseLeave={() => setGreenLightHovered(false)}*/}
                    {/*    >*/}
                    {/*        <img src={trafficLightsPaths.green.on}/>*/}
                    {/*        <span className="text-assembly">Зелёный — можно идти</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default AnimatedTrafficLight;