import {type ReactElement} from "react";
import Header from "@components/common/Header";
import DefaultDarkFooter from "@components/common/Footers/DefaultDarkFooter";
import {trafficLawsFooterMeta} from "@layout/Default/meta.ts";
import "./style.css";

export interface IDefaultLayoutProps {
    disabled?: boolean;
    children: ReactElement;
}

const DefaultLayout = ({ disabled, children }: IDefaultLayoutProps): ReactElement => {
    return (
        <div className={`default-layout ${disabled ? "disabled" : ""}`}>
            <Header/>
            <main>{ children }</main>
            <DefaultDarkFooter meta={trafficLawsFooterMeta}/>
        </div>
    );
};

export default DefaultLayout;
