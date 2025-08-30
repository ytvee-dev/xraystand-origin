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

import { getImageUrl } from "@data/cloudinary";

export const trafficLightsConfig: ITrafficLightsConfig = {
    backgroundImageSrc: getImageUrl("trafficLawsPage/trafficLight/background"),
    trafficLights: [
        {
            imageLightOnSrc: getImageUrl("trafficLawsPage/trafficLight/redOn"),
            imageLightOffSrc: getImageUrl("trafficLawsPage/trafficLight/redOff"),
            color: "red",
            activeLabelRu: "Красный — стой",
            activeLabelkz: "Қызыл — тоқта.",
        },
        {
            imageLightOnSrc: getImageUrl("trafficLawsPage/trafficLight/yellowOn"),
            imageLightOffSrc: getImageUrl("trafficLawsPage/trafficLight/yellowOff"),
            color: "yellow",
            activeLabelRu: "Жёлтый — приготовься",
            activeLabelkz: "Сары — дайындал.",
        },
        {
            imageLightOnSrc: getImageUrl("trafficLawsPage/trafficLight/greenOn"),
            imageLightOffSrc: getImageUrl("trafficLawsPage/trafficLight/greenOff"),
            color: "green",
            activeLabelRu: "Зелёный — можно идти",
            activeLabelkz: "Жасыл — өтуге болады.",
        },
    ],
};
