import { type ReactElement, type MouseEvent, type TouchEvent } from "react";
import { trafficLightsConfig, type ITrafficLightConfig } from "./meta.ts";
import {useSelector} from "react-redux";
import type {TRootState} from "@store/index.ts";
import "./style.css";

const AnimatedTrafficLight = (): ReactElement => {
    const currentLocale = useSelector(
        (state: TRootState) => state.locale.locale
    );

    const handleLightEnter = (event: MouseEvent<HTMLDivElement>): void => {
        event.currentTarget.classList.add("active");
    };

    const handleLightLeave = (event: MouseEvent<HTMLDivElement>): void => {
        event.currentTarget.classList.remove("active");
    };

    const handleLightTouchStart = (event: TouchEvent<HTMLDivElement>): void => {
        event.currentTarget.classList.add("active");
    };

    const handleLightTouchEnd = (event: TouchEvent<HTMLDivElement>): void => {
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
                        (trafficLightConfig: ITrafficLightConfig, index: number) => (
                            <div key={index} className="traffic-light-image-wrapper">
                                <img
                                    src={trafficLightConfig.imageLightOffSrc}
                                />
                                <div
                                    className="hovered-block"
                                    onMouseEnter={handleLightEnter}
                                    onMouseLeave={handleLightLeave}
                                    onTouchStart={handleLightTouchStart}
                                    onTouchEnd={handleLightTouchEnd}
                                >
                                    <img
                                        src={trafficLightConfig.imageLightOnSrc}
                                    />
                                    <span
                                        className={`text-assembly ${trafficLightConfig.color}`}
                                    >
                                        {currentLocale === 'ru' ? trafficLightConfig.activeLabelRu : trafficLightConfig.activeLabelkz}
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
