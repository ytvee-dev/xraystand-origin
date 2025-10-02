import React, {type ReactElement} from "react";
import type {TRootState} from "@store/index.ts";
import {useSelector} from "react-redux";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/math/Sections/CoverSection";
import FirstSection from "@modules/math/Sections/FirstSection";
import SecondSection from "@modules/math/Sections/SecondSection";
import ThirdSection from "@modules/math/Sections/ThirdSection";
import FourthSection from "@modules/math/Sections/FourthSection";
import Spinner from "@components/common/Spinner";

import * as paths from '@modules/math/locales/paths.json';
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#2769A5",
    boldTextColor: "#FFFFFF",
    textColor: "rgba(255,255,255,0.4)",
    copyrightColor: "rgba(255,255,255,0.4)",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const MathLogo = () => {
    return (
        <div className='math-logo'><span>Математика</span></div>
    );
}

const Mathematics: React.FC = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded
    );

    return (
        <BrightnessLayout
            logo={<MathLogo/>}
            stickyHeader={true}
            isLanguageSwitcher={true}
            switcherColor={'#071A22'}
            sx={pageLayoutSX}
            headerBackgroundColor={pageLayoutSX.backgroundColor}
        >
            <div className="math-page">
                {!isContentLoaded && (<Spinner/>)}
                <CoverSection className='math-section math-cover-section'/>
                <FirstSection className='math-section math-first-section'/>
                <SecondSection className='math-section math-second-section'/>
                <ThirdSection className='math-section math-third-section'/>
                <FourthSection className='math-section math-fourth-section'/>
            </div>
        </BrightnessLayout>
    );
};

export default Mathematics;
