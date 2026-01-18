import { type ReactElement } from "react";
import {useLocale, useLocaleContent} from "@hooks/useLocale";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";
import "./style.css";

const housesImg = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051919/houses_iznhzw.webp';
const cloudsImg = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051919/clouds_nhylpp.webp';
const carPng = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051919/car_kutkjb.webp';
const road = 'https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051920/road_pzv2g5.avif';

const CoverSection = (): ReactElement => {
    const currentLocale = useLocale();
    const translation = useLocaleContent(textContentRu, textContentKz);

    return (
        <section className="traffic-laws-cover-section">
            <div
                className="traffic-laws-cover-text-content"
                style={{
                    maxWidth: currentLocale === "ru" ? "634px" : "840px"
                }}
            >
                <h1>{translation.coverSection["title"]}</h1>
                <h2>{translation.coverSection["description"]}</h2>
                <h3>{translation.coverSection["content"] as string}</h3>
            </div>

            <div className={"scene"}>
                <div
                    className={`${"layer"} ${"houses"}`}
                    style={{backgroundImage: `url(${housesImg})`}}
                    data-speed="50"
                />

                <div
                    className={"layer"}
                    style={{backgroundImage: `url(${cloudsImg})`}}
                    data-speed="10"
                />

                <div
                    className={`${"layer"} ${"road"}`}
                    style={{backgroundImage: `url(${road})`}}
                    data-speed="3"
                />
                <div className={"car"}>
                    <img src={carPng} alt="Car"/>
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
