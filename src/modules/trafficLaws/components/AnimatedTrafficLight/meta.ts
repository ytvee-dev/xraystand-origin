export interface ITrafficLightConfig {
    imageLightOnSrc: string;
    imageLightOffSrc: string;
    color: string;
    activeLabelRu: string;
    activeLabelkz: string;
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
            activeLabelRu: "Красный — стой",
            activeLabelkz: "Қызыл — тоқта.",
        },
        {
            imageLightOnSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/yellowOn.png",
            imageLightOffSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/yellowOff.png",
            color: "yellow",
            activeLabelRu: "Жёлтый — приготовься",
            activeLabelkz: "Сары — дайындал.",
        },
        {
            imageLightOnSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/greenOn.png",
            imageLightOffSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/greenOff.png",
            color: "green",
            activeLabelRu: "Зелёный — можно идти",
            activeLabelkz: "Жасыл — өтуге болады.",
        },
    ],
};
