import {type ReactElement} from "react";
import LazyLoadImage from "@components/common/Other/LazyLoadImage";
import coverImg from '@assets/images/rusLit/backgrounds/coverBg.png';
import * as sectionContent from '../../locales/rus.json';
import "./style.css";

const CoverSection = (): ReactElement => {

    return (
        <section className="ruslit-cover-section">
            <div className="ruslit-cover-section-image-container">
                <LazyLoadImage alt={'cover'} src={coverImg} />
            </div>

            <div className="ruslit-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;