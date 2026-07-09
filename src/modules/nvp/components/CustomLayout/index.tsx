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
    backgroundColor: "#FFA726",
    boldTextColor: "#000000",
    textColor: "rgba(0,0,0,0.4)",
    copyrightColor: "#FFFFFF66",
    logoColorMode: "dark",
    madeByColorMode: "dark",
    zIndex: "3",
};

const CustomLayout: React.FC<IDefaultLayoutProps> = ({
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
}: IDefaultLayoutProps) => {
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
            />

            <PrivacyPolicyModal />
        </div>
    );
};

export default CustomLayout;
