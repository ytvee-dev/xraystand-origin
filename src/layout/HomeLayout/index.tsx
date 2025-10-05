import React, {type ReactElement, type ReactNode} from "react";
import CenteredHeader from "../../components/common/CenteredHeader";
import HomeFooter from "@components/common/Footers/HomeFooter";
import PrivacyPolicyModal from "@components/common/PrivacyPolicyModal";
import "./style.css";

export interface IDefaultLayoutProps {
    disabled?: boolean;
    strictLanguage?: "ru" | "kz";
    children: ReactElement | ReactNode;
    logo?: ReactElement | null;
    navigation?: ReactElement | null;
    stickyHeader?: boolean;
    isLanguageSwitcher?: boolean;
    switcherColor?: string;
    sx?: IBrightnessLayoutSX;
    headerBackgroundColor?: string;
}

export interface IBrightnessLayoutSX {
    backgroundColor: string;
    boldTextColor: string;
    textColor: string;
    copyrightColor: string;
    logoColorMode: string;
    madeByColorMode: string;
}

const HomeLayout: React.FC<IDefaultLayoutProps> = ({
    disabled,
    children,
    logo,
    navigation,
    stickyHeader=false,
    isLanguageSwitcher = false,
    switcherColor,
    headerBackgroundColor,
}: IDefaultLayoutProps) => {

    return (
        <div className={`default-layout ${disabled ? "disabled" : ""}`}>
            <CenteredHeader
                logo={logo || null}
                navigation={navigation || null}
                stickyHeader={stickyHeader}
                isLanguageSwitcher={isLanguageSwitcher}
                switcherColor={switcherColor && switcherColor}
                backgroundColor={headerBackgroundColor}
            />
            <main>{children}</main>
            <HomeFooter />
            <PrivacyPolicyModal />
        </div>
    );
};

export default HomeLayout;
