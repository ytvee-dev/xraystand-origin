import {type ReactElement} from "react";
import useWindowWidth from "../../../../hooks/useScreenWidth.ts";
import LazyLoadImage from "@components/common/Other/LazyLoadImage";
import coverImg from '@assets/images/kazakhAdebiet/cover.png';
import coverMobile from '@assets/images/kazakhAdebiet/coverMobile.png';
import * as sectionContent from '../../locales/kaz.json';
import "./style.css";

const CoverSection = (): ReactElement => {    const screenWidth = useWindowWidth();

    return (
        <section className="kza-cover-section">
            {screenWidth > 870 && <LazyLoadImage src={coverImg} alt=''/>}
            {screenWidth < 870 && <LazyLoadImage src={coverMobile} alt=''/>}

            <div className="kza-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <h2>{sectionContent.coverSection.subTitle}</h2>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;