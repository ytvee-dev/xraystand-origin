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

import { R2_BASE_URL } from "@utils/constants";

export const trafficLightsConfig: ITrafficLightsConfig = {
    backgroundImageSrc:
        `${R2_BASE_URL}assets/images/trafficLawsPage/secondSection/tlBackground.avif`,
    trafficLights: [
        {
            imageLightOnSrc:
                `${R2_BASE_URL}assets/images/trafficLawsPage/secondSection/trafficLight/redOn.avif`,
            imageLightOffSrc:
                `${R2_BASE_URL}assets/images/trafficLawsPage/secondSection/trafficLight/redOff.avif`,
            color: "red",
            activeLabelRu: "Красный — стой",
            activeLabelkz: "Қызыл — тоқта.",
        },
        {
            imageLightOnSrc:
                `${R2_BASE_URL}assets/images/trafficLawsPage/secondSection/trafficLight/yellowOn.avif`,
            imageLightOffSrc:
                `${R2_BASE_URL}assets/images/trafficLawsPage/secondSection/trafficLight/yellowOff.avif`,
            color: "yellow",
            activeLabelRu: "Жёлтый — приготовься",
            activeLabelkz: "Сары — дайындал.",
        },
        {
            imageLightOnSrc:
                `${R2_BASE_URL}assets/images/trafficLawsPage/secondSection/trafficLight/greenOn.avif`,
            imageLightOffSrc:
                `${R2_BASE_URL}assets/images/trafficLawsPage/secondSection/trafficLight/greenOff.avif`,
            color: "green",
            activeLabelRu: "Зелёный — можно идти",
            activeLabelkz: "Жасыл — өтуге болады.",
        },
    ],
};
