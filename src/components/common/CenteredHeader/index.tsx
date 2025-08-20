import Logo from "@components/common/Other/Logo";
import React, {type ReactElement} from "react";
import "./style.css";

export interface CenteredHeaderProps {
    logo?: ReactElement | null;
    navigation?: ReactElement | null;
};

const CenteredHeader: React.FC<CenteredHeaderProps> = ({
    logo = null,
    navigation = null,
}: CenteredHeaderProps): ReactElement => {
    return (
        <div className="centered-header-wrapper">
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
