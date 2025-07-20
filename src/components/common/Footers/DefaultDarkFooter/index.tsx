import {type ReactElement} from "react";
import type {IDefaultDarkFooterContent} from "@components/common/Footers/DefaultDarkFooter/meta.ts";
import "./style.css";

interface IDefaultDarkFooterProps {
    meta: IDefaultDarkFooterContent;
}

const Footer = ({meta}: IDefaultDarkFooterProps): ReactElement => {
    return (
        <footer className="footer">
            <div className="footer-content-wrapper">
                <div className="footer-logo-container">
                    <svg><use href={meta.logoPath + "footerLogo"}/></svg>
                </div>
                <div className="footer-information-container">
                    <div className="footer-description-container">{meta.content.description}</div>
                    <div className="footer-links-container">
                        <p>{meta.content.buttonsText.support}</p>
                        <p>{meta.content.buttonsText.privacy}</p>
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
                <a href={meta.content.madeBy.link} target="_blank">
                    <div className="footer-made-by">
                        <img src={meta.content.madeBy.imagePath}/>
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
