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

import { getImageUrl } from "@utils/constants";

export const trafficLightsConfig: ITrafficLightsConfig = {
    backgroundImageSrc:
        getImageUrl("trafficLawsPage/secondSection/tlBackground.avif"),
    trafficLights: [
        {
            imageLightOnSrc:
                getImageUrl("trafficLawsPage/secondSection/trafficLight/redOn.avif"),
            imageLightOffSrc:
                getImageUrl("trafficLawsPage/secondSection/trafficLight/redOff.avif"),
            color: "red",
            activeLabelRu: "Красный — стой",
            activeLabelkz: "Қызыл — тоқта.",
        },
        {
            imageLightOnSrc:
                getImageUrl("trafficLawsPage/secondSection/trafficLight/yellowOn.avif"),
            imageLightOffSrc:
                getImageUrl("trafficLawsPage/secondSection/trafficLight/yellowOff.avif"),
            color: "yellow",
            activeLabelRu: "Жёлтый — приготовься",
            activeLabelkz: "Сары — дайындал.",
        },
        {
            imageLightOnSrc:
                getImageUrl("trafficLawsPage/secondSection/trafficLight/greenOn.avif"),
            imageLightOffSrc:
                getImageUrl("trafficLawsPage/secondSection/trafficLight/greenOff.avif"),
            color: "green",
            activeLabelRu: "Зелёный — можно идти",
            activeLabelkz: "Жасыл — өтуге болады.",
        },
    ],
};
