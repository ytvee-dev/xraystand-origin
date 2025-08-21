import Logo from "@components/common/Other/Logo";
import LanguageSwitcher from "@components/common/Other/LanguageSwitcher";
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
