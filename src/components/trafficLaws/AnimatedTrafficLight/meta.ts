export interface ITrafficLightConfig {
    imageLightOnSrc: string;
    imageLightOffSrc: string;
    color: string;
    activeLabel: string;
}

export interface ITrafficLightsConfig {
    backgroundImageSrc: string;
    trafficLights: ITrafficLightConfig[];
}

export const trafficLightsConfig: ITrafficLightsConfig = {
    backgroundImageSrc:
        "./assets/images/trafficLawsPage/secondSection/tlBackground.png",
    trafficLights: [
        {
            imageLightOnSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/redOn.png",
            imageLightOffSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/redOff.png",
            color: "red",
            activeLabel: "Красный — стой",
        },
        {
            imageLightOnSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/yellowOn.png",
            imageLightOffSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/yellowOff.png",
            color: "yellow",
            activeLabel: "Жёлтый — приготовься",
        },
        {
            imageLightOnSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/greenOn.png",
            imageLightOffSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/greenOff.png",
            color: "green",
            activeLabel: "Зелёный — можно идти",
        },
    ],
};
