import Logo from "../Other/Logo";
import LanguageSwitcher from "../Other/LanguageSwitcher";
import {type ReactElement} from "react";
import "./style.css";

const Header = (
    {
        singleLanguage,
        langSwitchColor=''
    }: {
        singleLanguage: boolean,
        langSwitchColor?: string
    }
): ReactElement => {
    return (
        <div className="header-wrapper">
            <header className="application-header">
                <Logo/>
                {!singleLanguage && <LanguageSwitcher color={langSwitchColor}/>}
            </header>
        </div>
    );
};

export default Header;
