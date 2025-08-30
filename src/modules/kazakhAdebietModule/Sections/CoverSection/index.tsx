import {type ReactElement} from "react";
import { R2_BASE_URL } from "@utils/constants";
import * as sectionContent from '@modules/kazakhAdebietModule/locales/kaz.json';
import "./style.css";
import useWindowWidth from "@hooks/useScreenWidth.ts";

const coverImg = `${R2_BASE_URL}assets/images/kazakhAdebiet/cover.avif`;
const coverMobile = `${R2_BASE_URL}assets/images/kazakhAdebiet/coverMobile.avif`;

const CoverSection = (): ReactElement => {
    const screenWidth = useWindowWidth();

    return (
        <section className="kza-cover-section">
            {screenWidth > 870 && <img src={coverImg} alt=''/>}
            {screenWidth < 870 && <img src={coverMobile} alt=''/>}

            <div className="kza-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <h2>{sectionContent.coverSection.subTitle}</h2>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;