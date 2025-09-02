import {type ReactElement} from "react";
import type {TRootState} from "@store/index.ts";
import {useSelector} from "react-redux";
import DefaultLayout from "../../layout/Default";
import CoverSection from "../../modules/kazakhAdebietModule/Sections/CoverSection";
import FirstSection from "../../modules/kazakhAdebietModule/Sections/FirstSection";
import SecondSection from "../../modules/kazakhAdebietModule/Sections/SecondSection";
import ThirdSection from "../../modules/kazakhAdebietModule/Sections/ThirdSection";
import Spinner from "@components/common/Spinner";
import "./style.css";

const KazakhAdebiet = (): ReactElement => {
    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded
    );

    return (
        <DefaultLayout strictLanguage='kz'>
            <div className="kazakh-adebiet-page">
                {!isContentLoaded && (<Spinner />)}
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default KazakhAdebiet;