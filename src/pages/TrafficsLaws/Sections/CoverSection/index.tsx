import { type ReactElement } from "react";
import road from "@assets/images/trafficLawsPage/coverSection/road.png";
import carPng from "@assets/images/trafficLawsPage/coverSection/car.png";
import cloudsImg from "@assets/images/trafficLawsPage/coverSection/clouds.png";
import housesImg from "@assets/images/trafficLawsPage/coverSection/houses.png";
import "./style.css";
import usePageTranslation from "@hooks/usePageTranslation.ts";
import {type ITrafficLawsPageResources, PageIds} from "@domains/Translate";

const CoverSection = (): ReactElement => {
    const {textTranslation} = usePageTranslation(PageIds.TRAFFIC_LAWS_PAGE);
    const translation = textTranslation as ITrafficLawsPageResources;

    return (
        <section className="traffic-laws-cover-section">
            <div className="traffic-laws-cover-text-content">
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
