import {type ReactElement} from "react";
import DefaultLayout from "@layout/Default";
import CoverSection from "@modules/rusLitModule/Sections/CoverSection";
import FirstSection from "@modules/rusLitModule/Sections/FirstSection";
import SecondSection from "@modules/rusLitModule/Sections/SecondSection";
import ThirdSection from "@modules/rusLitModule/Sections/ThirdSection";
import "./style.css";

const RusLit = (): ReactElement => {
    return (
        <DefaultLayout strictLanguage='ru'>
            <div className="kazakh-adebiet-page" >
                <CoverSection />
                <FirstSection />
                <SecondSection />
                {/*<ThirdSection />*/}
            </div>
        </DefaultLayout>
    );
};

export default RusLit;