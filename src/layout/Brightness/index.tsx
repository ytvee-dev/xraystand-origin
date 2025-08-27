import React, {type ReactElement, type ReactNode} from "react";
import type {TRootState} from "@store/index.ts";
import type {Languages} from "@domains/Translate";
import {trafficLawsFooterMeta} from "@components/common/Footers/StrictFooter/content.ts";
import {useSelector} from "react-redux";
import StrictFooter from "@components/common/Footers/StrictFooter";
import CenteredHeader from "@components/common/CenteredHeader";
import "./style.css";

export interface IDefaultLayoutProps {
    disabled?: boolean;
    strictLanguage?: "ru" | "kz";
    children: ReactElement | ReactNode;
    logo?: ReactElement | null;
    navigation?: ReactElement | null;
    stickyHeader?: boolean;
}

const BrightnessLayout: React.FC<IDefaultLayoutProps> = ({
    disabled,
    strictLanguage,
    children,
    logo,
    navigation,
    stickyHeader=false,
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
            />

            <main>{children}</main>

            <StrictFooter
                meta={
                    language === 'ru' ?
                        trafficLawsFooterMeta.ru :
                        trafficLawsFooterMeta.kz
                }
                sx={{
                    backgroundColor: "#FFA726",
                    boldTextColor: "#000000",
                    textColor: "rgba(0,0,0,0.4)",
                    copyrightColor: "#FFFFFF66",
                    logoColorMode: "dark",
                    madeByColorMode: "dark",
                }}
            />
        </div>
    );
};

export default BrightnessLayout;
