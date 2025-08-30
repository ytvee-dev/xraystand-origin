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
        "./assets/images/trafficLawsPage/secondSection/tlBackground.avif",
    trafficLights: [
        {
            imageLightOnSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/redOn.avif",
            imageLightOffSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/redOff.avif",
            color: "red",
            activeLabelRu: "Красный — стой",
            activeLabelkz: "Қызыл — тоқта.",
        },
        {
            imageLightOnSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/yellowOn.avif",
            imageLightOffSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/yellowOff.avif",
            color: "yellow",
            activeLabelRu: "Жёлтый — приготовься",
            activeLabelkz: "Сары — дайындал.",
        },
        {
            imageLightOnSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/greenOn.avif",
            imageLightOffSrc:
                "./assets/images/trafficLawsPage/secondSection/trafficLight/greenOff.avif",
            color: "green",
            activeLabelRu: "Зелёный — можно идти",
            activeLabelkz: "Жасыл — өтуге болады.",
        },
    ],
};
