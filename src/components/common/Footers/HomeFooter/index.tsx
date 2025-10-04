import React, {type ReactElement} from "react";
import {useLocaleContent} from "@hooks/useLocale.ts";
import { useDispatch } from "react-redux";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import {homeFooterMeta, iconId} from './content.ts';
import {svgSpriteSrcPrefix} from "@utils/constants";
import { setIsModalOpened } from "@store/slices/Application";
import "./style.css";


const HomeFooter: React.FC = (): ReactElement => {
    const dispatch = useDispatch();
    const content = useLocaleContent(homeFooterMeta.ru, homeFooterMeta.kz);

    const handlePolicyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(setIsModalOpened(true));
    };

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
                    <a className="footer-buttons-container" onClick={handlePolicyClick} style={{ cursor: 'pointer' }}>
                        {content.policy}
                    </a>
                </div>
                <div className="as-logo-container">
                    <svg aria-hidden="true" focusable="false">
                        <use href={`${svgSpriteSrcPrefix}${iconId}`} />
                    </svg>
                </div>
            </div>

            <div className="divider"></div>

            <div className="bottom-container">
                <p>{content.year} {content.company} <span>{content.companyLabel}</span>. {content.copyright}. </p>
                <a href={content.madeBy.link} target="_blank" rel="noopener noreferrer" className="made-by-link">
                    {content.madeBy.label} <span className="made-by-author">{content.madeBy.author}</span>
                </a>
            </div>
        </footer>
    );
};

export default HomeFooter;
