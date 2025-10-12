import {type ReactElement} from "react";
import type {TRootState} from "../../store";
import type {Languages} from "../../domains/Translate";
import Header from "../../components/common/Header";
import StrictFooter from "../../components/common/Footers/StrictFooter";
import {trafficLawsFooterMeta} from "../../components/common/Footers/StrictFooter/content.ts";
import {useSelector} from "react-redux";
import PrivacyPolicyModal from "@components/common/PrivacyPolicyModal";
import "./style.css";

export interface IDefaultLayoutProps {
    disabled?: boolean;
    strictLanguage?: "ru" | "kz";
    langSwitchColor?: string;
    children: ReactElement;
}

const DefaultLayout = ({ disabled, strictLanguage, children, langSwitchColor='' }: IDefaultLayoutProps): ReactElement => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const language = strictLanguage ?? currentLocale;

    return (
        <div className={`default-layout ${disabled ? "disabled" : ""}`}>
            <Header singleLanguage={strictLanguage ? true : false} langSwitchColor={langSwitchColor}/>

            <main>{children}</main>

            <StrictFooter
                meta={
                    language === 'ru' ?
                        trafficLawsFooterMeta.ru :
                        trafficLawsFooterMeta.kz
                }
            />
            
            <PrivacyPolicyModal />
        </div>
    );
};

export default DefaultLayout;
