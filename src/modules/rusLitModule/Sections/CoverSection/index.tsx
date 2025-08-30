import {type ReactElement} from "react";
import { getImageUrl } from "@utils/constants";
import * as sectionContent from '@modules/rusLitModule/locales/rus.json';
import "./style.css";

const CoverSection = (): ReactElement => {

    return (
        <section className="ruslit-cover-section">
            <div className="ruslit-cover-section-image-container">
                <img src={getImageUrl("rusLit/backgrounds/coverBg.png")} alt='cover'/>
            </div>

            <div className="ruslit-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;