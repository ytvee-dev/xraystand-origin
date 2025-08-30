import {type ReactElement} from "react";
import { getImageUrl } from "@utils/constants";
import * as sectionContent from '@modules/kazakhAdebietModule/locales/kaz.json';
import "./style.css";
import useWindowWidth from "@hooks/useScreenWidth.ts";

const CoverSection = (): ReactElement => {    const screenWidth = useWindowWidth();

    return (
        <section className="kza-cover-section">
            {screenWidth > 870 && <img src={getImageUrl("kazakhAdebiet/cover.avif")} alt=''/>}
            {screenWidth < 870 && <img src={getImageUrl("kazakhAdebiet/coverMobile.avif")} alt=''/>}

            <div className="kza-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <h2>{sectionContent.coverSection.subTitle}</h2>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;