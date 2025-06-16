import Logo from "@components/Logo";
import LanguageSwitcher from "@components/LanguageSwitcher";
import { type ReactElement } from "react";
import "./style.css";

const Header = (): ReactElement => {
    return (
        <header className="application-header">
            <Logo />
            <LanguageSwitcher />
        </header>
    );
};

export default Header;
