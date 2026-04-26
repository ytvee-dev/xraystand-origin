import {type ReactElement} from "react";
import * as paths from '@modules/seasons/locales/paths.json';
import "./style.css";

const CoverSection = (): ReactElement => {
    return (
        <section className="seasons-cover-section">
            <img src={paths.texturedBg} className="cover-textured-bg" alt=""/>

            <h1 hidden>Времена года</h1>

            <img src={paths.coverSun} className="seasons-cover-sun" alt="времена года"/>
            <img src={paths.summer.logo} className="seasons-cover-summer" alt="лето"/>
            <img src={paths.spring.logo} className="seasons-cover-spring" alt="весна"/>                <img src={paths.autumn.logo} className="seasons-cover-autumn" alt="осень"/>
            <img src={paths.winter.logo} className="seasons-cover-winter" alt="зима"/>
        </section>
    );
};

export default CoverSection;