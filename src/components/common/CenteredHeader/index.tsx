import Logo from "../Other/Logo";
import React, {type ReactElement} from "react";
import "./style.css";

export interface CenteredHeaderProps {
    logo?: ReactElement | null;
    navigation?: ReactElement | null;
    stickyHeader?: boolean;
};

const CenteredHeader: React.FC<CenteredHeaderProps> = ({
    logo = null,
    navigation = null,
    stickyHeader = false,
}: CenteredHeaderProps): ReactElement => {
    const backgroundColor = "rgba(255, 255, 255, 0.97)";

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
                    <Logo/>
                </div>

                <div className="centered-application-header-right">
                    <div className="centered-application-header-right-nav">{navigation}</div>
                </div>
            </header>
        </div>
    );
};

export default CenteredHeader;
