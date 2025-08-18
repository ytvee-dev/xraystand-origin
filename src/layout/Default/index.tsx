import {type ReactElement} from "react";
import type {TRootState} from "@store/index.ts";
import type {Languages} from "@domains/Translate";
import Header from "@components/common/Header";
import StrictFooter from "@components/common/Footers/StrictFooter";
import {trafficLawsFooterMeta} from "@components/common/Footers/StrictFooter/content.ts";
import {useSelector} from "react-redux";
import "./style.css";

export interface IDefaultLayoutProps {
    disabled?: boolean;
    strictLanguage?: "ru" | "kz";
    children: ReactElement;
}

const DefaultLayout = ({ disabled, strictLanguage, children }: IDefaultLayoutProps): ReactElement => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const language = strictLanguage ?? currentLocale;

    return (
        <div className={`default-layout ${disabled ? "disabled" : ""}`}>
            <Header singleLanguage={strictLanguage ? true : false}/>

            <main>{children}</main>

            <StrictFooter
                meta={
                    language === 'ru' ?
                        trafficLawsFooterMeta.ru :
                        trafficLawsFooterMeta.kz
                }
            />
        </div>
    );
};

export default DefaultLayout;
