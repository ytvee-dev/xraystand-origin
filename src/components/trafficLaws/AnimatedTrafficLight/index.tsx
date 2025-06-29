import { type ReactElement, type MouseEvent } from "react";
import {
    trafficLightsConfig,
    type ITrafficLightConfig,
} from "@components/trafficLaws/AnimatedTrafficLight/meta.ts";
import "./style.css";

const AnimatedTrafficLight = (): ReactElement => {
    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>): void => {
        event.currentTarget.classList.add("active");
    };

    const handleMouseLeave = (event: MouseEvent<HTMLDivElement>): void => {
        event.currentTarget.classList.remove("active");
    };

    return (
        <div className="animated-traffic-light">
            <div className="animated-traffic-light-wrapper">
                <div className="traffic-light-background-image-wrapper">
                    <img src={trafficLightsConfig.backgroundImageSrc} />
                </div>
                <div className="traffic-light-container">
                    {trafficLightsConfig.trafficLights.map(
                        (trafficLightConfig: ITrafficLightConfig) => (
                            <div className="traffic-light-image-wrapper">
                                <img
                                    src={trafficLightConfig.imageLightOffSrc}
                                />
                                <div
                                    className="hovered-block"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        src={trafficLightConfig.imageLightOnSrc}
                                    />
                                    <span
                                        className={`text-assembly ${trafficLightConfig.color}`}
                                    >
                                        {trafficLightConfig.activeLabel}
                                    </span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnimatedTrafficLight;
