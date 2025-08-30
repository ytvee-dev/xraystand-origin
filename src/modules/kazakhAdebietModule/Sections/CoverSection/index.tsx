import {type ReactElement} from "react";
import coverImg from '@assets/images/kazakhAdebiet/cover.avif';
import coverMobile from '@assets/images/kazakhAdebiet/coverMobile.avif';
import * as sectionContent from '@modules/kazakhAdebietModule/locales/kaz.json';
import "./style.css";
import useWindowWidth from "@hooks/useScreenWidth.ts";

const CoverSection = (): ReactElement => {    const screenWidth = useWindowWidth();

    return (
        <section className="kza-cover-section">
              {screenWidth > 870 && <img src={coverImg} alt='' crossOrigin="anonymous" />}
              {screenWidth < 870 && <img src={coverMobile} alt='' crossOrigin="anonymous" />}

            <div className="kza-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <h2>{sectionContent.coverSection.subTitle}</h2>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;