import {type ReactElement} from "react";
import * as sectionContent from '@modules/kazakhAdebietModule/locales/kaz.json';
import "./style.css";
import useWindowWidth from "@hooks/useScreenWidth.ts";
import {CONTENT_URL} from "@utils/constants";

const coverImg = "v1756567655/cover_l3hbbb.avif";
const coverMobile = "v1756567653/coverMobile_tluq8m.avif";

const CoverSection = (): ReactElement => {    const screenWidth = useWindowWidth();

    return (
        <section className="kza-cover-section">
            {screenWidth > 870 && <img src={CONTENT_URL + coverImg} alt=''/>}
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