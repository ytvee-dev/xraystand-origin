import React, {type ReactElement, type ReactNode} from "react";
import type {TRootState} from "../../store";
import type {Languages} from "../../domains/Translate";
import {trafficLawsFooterMeta} from "../../components/common/Footers/StrictFooter/content.ts";
import {useSelector} from "react-redux";
import StrictFooter from "../../components/common/Footers/StrictFooter";
import CenteredHeader from "../../components/common/CenteredHeader";
import "./style.css";
import HomeFooter from "@components/common/Footers/HomeFooter";

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

const DEFAULT_SX = {
    backgroundColor: "#ECEEE1",
    boldTextColor: "#000000",
    textColor: "rgba(0,0,0,0.4)",
    copyrightColor: "#FFFFFF66",
    logoColorMode: "dark",
    madeByColorMode: "dark",
};

const HomeLayout: React.FC<IDefaultLayoutProps> = ({
    disabled,
    strictLanguage,
    children,
    logo,
    navigation,
    stickyHeader=false,
    isLanguageSwitcher = false,
    switcherColor,
    sx=DEFAULT_SX,
    headerBackgroundColor,
}: IDefaultLayoutProps) => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const language = strictLanguage ?? currentLocale;

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

            <HomeFooter
                meta={
                    language === 'ru' ?
                        trafficLawsFooterMeta.ru :
                        trafficLawsFooterMeta.kz
                }
                sx={sx}
            />
        </div>
    );
};

export default HomeLayout;
