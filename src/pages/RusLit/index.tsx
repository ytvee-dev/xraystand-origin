import {type ReactElement} from "react";
import type {TRootState} from "@store/index.ts";
import {useSelector} from "react-redux";
import DefaultLayout from "@layout/Default";
import CoverSection from "@modules/rusLitModule/Sections/CoverSection";
import FirstSection from "@modules/rusLitModule/Sections/FirstSection";
import SecondSection from "@modules/rusLitModule/Sections/SecondSection";
import ThirdSection from "@modules/rusLitModule/Sections/ThirdSection";
import Spinner from "@components/common/Spinner";
import "./style.css";

const RusLit = (): ReactElement => {
    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded
    );

    return (
        <DefaultLayout strictLanguage='ru'>
            <div className="ruslit-page" >
                {!isContentLoaded && (<Spinner />)}
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default RusLit;