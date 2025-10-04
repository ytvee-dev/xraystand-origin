import React, {type ReactElement} from "react";
import {useLocaleContent} from "@hooks/useLocale.ts";
import "./style.css";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import {homeFooterMeta} from './content.ts';


const HomeFooter: React.FC = (): ReactElement => {
    const content = useLocaleContent(homeFooterMeta.ru, homeFooterMeta.kz);

    return (
        <footer className="home-footer">
            <div className="top-container">
                <div className="main-logo-container">
                    <SpriteIcon iconId={'logo'} size={'80px'} />
                </div>
                <div className="footer-content-container">
                    <div className="footer-information-container">
                        <p>{content.contacts.phone}</p>
                        <p>{content.contacts.email}</p>
                    </div>
                    <a className="footer-buttons-container">
                        {content.policy}
                    </a>
                </div>
                <div className="as-logo-container">
                    <SpriteIcon iconId={'as-logo'} />
                </div>
            </div>

            <div className="divider"></div>

            <div className="bottom-container">
                <p>{content.year} {content.company} <span>{content.companyLabel}</span>. {content.copyright}. </p>
                <p>{content.madeBy.label} {content.madeBy.author}</p>
            </div>
        </footer>
    );
};

export default HomeFooter;
