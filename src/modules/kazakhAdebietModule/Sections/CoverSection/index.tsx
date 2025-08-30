import {type ReactElement} from "react";
import getImageUrl from "@utils/getImageUrl.ts";
import * as sectionContent from '@modules/kazakhAdebietModule/locales/kaz.json';
import "./style.css";
import useWindowWidth from "@hooks/useScreenWidth.ts";

const CoverSection = (): ReactElement => {
    const screenWidth = useWindowWidth();

    return (
        <section className="kza-cover-section">
            {screenWidth > 870 && (
                <img src={getImageUrl('kazakhAdebeit/cover')} alt="" />
            )}
            {screenWidth < 870 && (
                <img src={getImageUrl('kazakhAdebeit/coverMobile')} alt="" />
            )}

            <div className="kza-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <h2>{sectionContent.coverSection.subTitle}</h2>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;
