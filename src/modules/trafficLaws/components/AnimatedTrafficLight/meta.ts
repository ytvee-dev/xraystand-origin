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
        "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051938/tlBackground_whk10v.webp",
    trafficLights: [
        {
            imageLightOnSrc:
                "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051940/redOn_kfwrci.webp",
            imageLightOffSrc:
                "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051939/redOff_hzr3nw.webp",
            color: "red",
            activeLabelRu: "Красный — стой",
            activeLabelkz: "Қызыл — тоқта.",
        },
        {
            imageLightOnSrc:
                "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051940/yellowOn_nvkdxq.webp",
            imageLightOffSrc:
                "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051940/yellowOff_x480go.webp",
            color: "yellow",
            activeLabelRu: "Жёлтый — приготовься",
            activeLabelkz: "Сары — дайындал.",
        },
        {
            imageLightOnSrc:
                "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051939/greenOn_d51shk.webp",
            imageLightOffSrc:
                "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051938/greenOff_mm8fvo.webp",
            color: "green",
            activeLabelRu: "Зелёный — можно идти",
            activeLabelkz: "Жасыл — өтуге болады.",
        },
    ],
};
