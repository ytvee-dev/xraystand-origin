import React, {type ReactElement} from "react";
import {useLocaleContent} from "@hooks/useLocale.ts";
import * as contentRu from "@modules/home/locales/rus.json";
import * as contentKz from "@modules/home/locales/kaz.json";
import "./style.css";
import SpriteIcon from "@components/common/Other/SpriteIcon";


const Footer: React.FC = (): ReactElement => {
    const content = useLocaleContent(contentRu, contentKz);

    return (
        <footer className="home-footer">
            <div className="top-container">
                <div className="main-logo-container">
                    <SpriteIcon iconId={'logo'} size={'80px'} />
                </div>
                <div className="footer-content-container">
                    <div className="footer-information-container">
                        <p>+7 706 624 6818</p>
                        <p>info@edurecycle.com</p>
                    </div>
                    <a className="footer-buttons-container">
                        Политика конфиденциальности
                    </a>
                </div>
                <div className="as-logo-container">
                    <SpriteIcon iconId={'as-logo'} />
                </div>
            </div>

            <div className="divider"></div>

            <div className="bottom-container">
                <p>© 2025 TOO <span>“Educational Recycle Systems”</span>. Все права защищены. </p>
                {/*<p>Made by YTVEE</p>*/}
            </div>
        </footer>
    );
};

export default Footer;
