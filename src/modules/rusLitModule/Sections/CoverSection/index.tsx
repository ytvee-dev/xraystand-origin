import {type ReactElement} from "react";
import * as sectionContent from '../../locales/rus.json';
import * as paths from '../../locales/paths.json';
import "./style.css";

const CoverSection = (): ReactElement => {

    return (
        <section className="ruslit-cover-section">
            <div className="ruslit-cover-section-image-container">
                <img alt={'cover'} src={paths.backgrounds.cover} />
            </div>

            <div className="ruslit-cover-text-content">
                <h1>{sectionContent.coverSection.title}</h1>
                <p>{sectionContent.coverSection.description}</p>
            </div>
        </section>
    );
};

export default CoverSection;