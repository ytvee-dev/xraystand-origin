import {type ReactElement} from "react";
import {usePageData} from "@hooks/usePageData";
import * as sectionContent from '@modules/kazakhAdebietModule/locales/kaz.json';
import * as paths from '@modules/kazakhAdebietModule/locales/paths.json';
import "./style.css";

const CoverSection = (): ReactElement => {
    const { screenWidth } = usePageData();

    return (
        <section className="kza-cover-section">
            {screenWidth > 870 && <img src={paths.backgrounds.coverImg} alt=''/>}
            {screenWidth < 870 && <img src={paths.backgrounds.coverMobile} alt=''/>}

            <div className="kza-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <h2>{sectionContent.coverSection.subTitle}</h2>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;