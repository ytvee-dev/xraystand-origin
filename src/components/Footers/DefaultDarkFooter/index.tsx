import {type ReactElement} from "react";
import type {IDefaultDarkFooterMeta} from "@layout/Default/meta.ts";

import "./style.css";
import {content} from "@components/Footers/DefaultDarkFooter/meta.ts";

interface IDefaultDarkFooterProps {
    meta: IDefaultDarkFooterMeta;
}

const Footer = ({meta}: IDefaultDarkFooterProps): ReactElement => {
    return (
        <footer className="footer">
            <div className="footer-content-wrapper">
                <div className="footer-logo-container">
                    <svg><use href={meta.logoPath}/></svg>
                </div>
                <div className="footer-information-container">
                    <div className="footer-description-container">{content.description}</div>
                    <div className="footer-links-container">
                        <p>{content.buttonsText.support}</p>
                        <p>{content.buttonsText.privacy}</p>
                    </div>
                </div>
                <div className="footer-contacts-container">
                    <p>Контакты</p>
                    <span>{meta.contacts.email}</span>
                    <span>{meta.contacts.phone}</span>
                </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-labels-container">
                <div className="footer-copyright">{meta.copyright}</div>
                <a href={content.madeBy.link} target="_blank">
                    <div className="footer-made-by">
                        <img src={content.madeBy.imagePath}/>
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
