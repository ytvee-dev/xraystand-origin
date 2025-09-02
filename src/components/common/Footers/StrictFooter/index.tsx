import {type ReactElement} from "react";
import type {IStrictFooterContent} from "./types.ts";
import LazyLoadImage from "@components/common/Other/LazyLoadImage";
import "./style.css";

interface IStrictFooterSX {
    backgroundColor?: string;
    boldTextColor?: string;
    textColor?: string;
    copyrightColor?: string;
    logoColorMode?: string; // light | dark
    madeByColorMode?: string; // light | dark
}

interface IStrictFooterProps {
    meta: IStrictFooterContent;
    sx?: IStrictFooterSX;
}

const Footer = ({meta, sx = {
    backgroundColor: "#181818",
    boldTextColor: "#ffffff",
    textColor: "#FFFFFF66",
    copyrightColor: "#FFFFFF66",
    logoColorMode: "light",
    madeByColorMode: "light",
}}: IStrictFooterProps): ReactElement => {
    const madeBySrc = sx.madeByColorMode === 'light' ? meta.content.madeBy.imagePath.light :
        meta.content.madeBy.imagePath.dark;
    const logoHref = meta.logoPath + (sx.logoColorMode === "light" ? "footerLogoLight" : "footerLogoDark");

    return (
        <footer
            className="footer"
            style={{backgroundColor: sx?.backgroundColor}}
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo-container">
                    <svg><use href={logoHref}/></svg>
                </div>
                <div className="footer-information-container">
                    <div
                        className="footer-description-container"
                        style={{color: sx?.textColor}}
                    >
                        {meta.content.description}
                    </div>
                    <div
                        className="footer-links-container"
                        style={{color: sx?.boldTextColor}}
                    >
                        <p>{meta.content.buttonsText.support}</p>
                        <p>{meta.content.buttonsText.privacy}</p>
                    </div>
                </div>
                <div className="footer-contacts-container">
                    <p style={{color: sx?.boldTextColor}}>Контакты</p>
                    <span style={{color: sx?.textColor}}>{meta.contacts.email}</span>
                    <span style={{color: sx?.textColor}}>{meta.contacts.phone}</span>
                </div>
            </div>
            <div className="footer-divider" style={{borderColor: sx?.boldTextColor}}></div>
            <div className="footer-labels-container">
                <div
                    className="footer-copyright"
                    style={{color: sx?.copyrightColor}}
                >{meta.copyright}</div>
                <a href={meta.content.madeBy.link} target="_blank">
                    <div className="footer-made-by">
                        <LazyLoadImage src={madeBySrc}/>
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
