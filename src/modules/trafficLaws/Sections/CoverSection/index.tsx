import { type ReactElement } from "react";
import type {TRootState} from "@store/index.ts";
import {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";
import LazyLoadImage from "@components/common/Other/LazyLoadImage";
import road from "@assets/images/trafficLawsPage/coverSection/road.avif";
import carPng from "@assets/images/trafficLawsPage/coverSection/car.png";
import cloudsImg from "@assets/images/trafficLawsPage/coverSection/clouds.png";
import housesImg from "@assets/images/trafficLawsPage/coverSection/houses.png";
import * as textContentKz from "../../locales/kaz.json";
import * as textContentRu from "../../locales/rus.json";
import "./style.css";

const CoverSection = (): ReactElement => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const translation = currentLocale === "kz" ? textContentKz : textContentRu;

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
                    <LazyLoadImage src={carPng} alt="Car"/>
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
