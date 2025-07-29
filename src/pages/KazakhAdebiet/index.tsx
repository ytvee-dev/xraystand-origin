import {type ReactElement} from "react";
import DefaultLayout from "@layout/Default";
import "./style.css";
import CoverSection from "@modules/kazakhAdebietModule/Sections/CoverSection";
import FirstSection from "@modules/kazakhAdebietModule/Sections/FirstSection";
import SecondSection from "@modules/kazakhAdebietModule/Sections/SecondSection";
import ThirdSection from "@modules/kazakhAdebietModule/Sections/ThirdSection";

const KazakhAdebiet = (): ReactElement => {

    return (
        <DefaultLayout strictLanguage='kz'>
            <div className="kazakh-adebiet-page">
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default KazakhAdebiet;