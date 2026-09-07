import React from "react";
import * as paths from "@modules/nvp/locales/paths.json";
import CenteredHeader from "@components/common/CenteredHeader";
import StrictFooter from "@components/common/Footers/StrictFooter";
import PrivacyPolicyModal from "@components/common/PrivacyPolicyModal";
import { trafficLawsFooterMeta } from "@components/common/Footers/StrictFooter/content.ts";
import type { IDefaultLayoutProps } from "@layout/HomeLayout";
import type { Languages } from "@domains/Translate";
import type { TRootState } from "@store/index.ts";
import { useSelector } from "react-redux";
import "./style.css";

const DEFAULT_SX = {
    position: "relative",
    backgroundColor: "#404935",
    boldTextColor: "#ffffff",
    textColor: "rgba(250, 250, 250, 0.4)",
    copyrightColor: "#FFFFFF66",
    logoColorMode: "light",
    madeByColorMode: "light",
    zIndex: "3",
};

interface ICustomLayoutFooter {
    footerClassName?: string;
    footerBgImage?: string; 
    footerBgImageClass?: string; 
}

const CustomLayout: React.FC<IDefaultLayoutProps & ICustomLayoutFooter> = ({
    disabled,
    strictLanguage,
    children,
    logo,
    navigation,
    stickyHeader = false,
    isLanguageSwitcher = false,
    switcherColor,
    sx = DEFAULT_SX,
    headerBackgroundColor,
    languageSwitcherClassName,
    footerClassName,
    footerBgImage,
    footerBgImageClass
}: IDefaultLayoutProps & ICustomLayoutFooter) => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale,
    );
    const language = strictLanguage ?? currentLocale;

    return (
        <div className={`default-layout ${disabled ? "disabled" : ""}`}>
            <img
                className="layout-background-img"
                src={paths.background}
                alt="layout-img"
            />

            <CenteredHeader
                logo={logo || null}
                navigation={navigation || null}
                stickyHeader={stickyHeader}
                isLanguageSwitcher={isLanguageSwitcher}
                switcherColor={switcherColor && switcherColor}
                backgroundColor={headerBackgroundColor}
                languageSwitcherClassName={languageSwitcherClassName}
            />

            <main>{children}</main>

            <StrictFooter
                meta={
                    language === "ru"
                        ? trafficLawsFooterMeta.ru
                        : trafficLawsFooterMeta.kz
                }
                sx={sx}
                className={footerClassName}
                bgImage={footerBgImage}
                bgImgClass={footerBgImageClass}
            />

            <PrivacyPolicyModal />
        </div>
    );
};

export default CustomLayout;
