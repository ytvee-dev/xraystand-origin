// import Logo from "../Other/Logo";
import React, {type ReactElement} from "react";
import "./style.css";
import LanguageSwitcher from "@components/common/Other/LanguageSwitcher";

export interface CenteredHeaderProps {
    logo?: ReactElement | null;
    navigation?: ReactElement | null;
    stickyHeader?: boolean;
    isLanguageSwitcher?: boolean;
    switcherColor?: string;
    backgroundColor?: string;
};

const CenteredHeader: React.FC<CenteredHeaderProps> = ({
    logo = null,
    navigation = null,
    stickyHeader = false,
    isLanguageSwitcher = false,
    switcherColor,
    backgroundColor = "rgba(255, 255, 255, 0.97)",
}: CenteredHeaderProps): ReactElement => {

    return (
        <div className="centered-header-wrapper" style={{
            position: stickyHeader ? "fixed" : "relative",
            top: stickyHeader ? 0 : undefined,
            left: stickyHeader ? 0 : undefined,
            right: stickyHeader ? 0 : undefined,
            backgroundColor: backgroundColor,
        }}>
            <header className="centered-application-header">
                <div className="centered-application-header-left">{logo}</div>
                <div className="centered-application-header-center">
                    {/*<Logo/>*/}
                </div>

                <div className="centered-application-header-right">
                    <div className="centered-application-header-right-nav">{navigation}</div>
                    {isLanguageSwitcher && (<LanguageSwitcher color={switcherColor && switcherColor} />)}
                </div>
            </header>
        </div>
    );
};

export default CenteredHeader;
