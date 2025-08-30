import { type ReactElement } from "react";
import type {TRootState} from "@store/index.ts";
import {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";
import { getImageUrl } from "@utils/constants";
import * as textContentKz from "@modules/trafficLaws/locales/kaz.json";
import * as textContentRu from "@modules/trafficLaws/locales/rus.json";
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
                    style={{backgroundImage: `url(${getImageUrl("trafficLawsPage/coverSection/houses.avif")})`}}
                    data-speed="50"
                />

                <div
                    className={"layer"}
                    style={{backgroundImage: `url(${getImageUrl("trafficLawsPage/coverSection/clouds.avif")})`}}
                    data-speed="10"
                />

                <div
                    className={`${"layer"} ${"road"}`}
                    style={{backgroundImage: `url(${getImageUrl("trafficLawsPage/coverSection/road.avif")})`}}
                    data-speed="3"
                />
                <div className={"car"}>
                    <img src={getImageUrl("trafficLawsPage/coverSection/car.avif")} alt="Car"/>
                </div>
            </div>
        </section>
    );
};

export default CoverSection;
