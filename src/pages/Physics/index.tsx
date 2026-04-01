import React from "react";
// import { useMemo } from "react";
// import {usePreloadImages} from "@hooks/usePreloadImages.ts";
// import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
// import * as paths from "@modules/physics/locales/paths.json";
import {useLocaleContent} from "@hooks/useLocale";
import { usePageData } from "@hooks/usePageData";
import * as contentRu from "@modules/physics/locales/rus.json";
import * as contentKz from "@modules/physics/locales/kaz.json";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/physics/Sections/CoverSection";
import FirstSection from "@modules/physics/Sections/FirstSection";
import SecondSection from "@modules/physics/Sections/SecondSection";
import ThirdSection from "@modules/physics/Sections/ThirdSection/ParentSection";
import './style.css';

const pageLayoutSX = {
    backgroundColor: "#2769A5",
    boldTextColor: "#FFFFFF",
    textColor: "rgba(255,255,255,0.4)",
    copyrightColor: "rgba(255,255,255,0.4)",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const PhysicsLogo = () => {
    return (
        <div className="physics-logo">Физика</div>
    );
};

const Physics: React.FC = () => {
    const textContent = useLocaleContent(contentRu, contentKz);
    const { screenWidth } = usePageData();
    // const imgUrls = useMemo(() => collectFromPathsJson(paths), []);
    // usePreloadImages(imgUrls);

    // const { isContentLoaded, currentLocale } = usePageData();
    // const content = useLocaleContent(contentRu, contentKz);

    // const scrollTo = (id: string) => {
    //     const el = document.getElementById(id);
    //     if (!el) return;
    //     el.scrollIntoView({ behavior: "smooth", block: "start" });
    // };


    return (
        <BrightnessLayout
            logo={<PhysicsLogo />}
            isLanguageSwitcher={true}
            switcherColor={'#EE7630'}
            sx={pageLayoutSX}
            headerBackgroundColor="#222630"
            languageSwitcherClassName="physics-language-switcher"
        >
            <div className="physics-background">
                <CoverSection content={textContent.coverSection}/>
                <FirstSection content={textContent.physicsBranchesSection}/>
                <SecondSection content={textContent.scientistsSection} width={screenWidth}/>
                <ThirdSection/>
            </div>
        </BrightnessLayout>
    );
};

export default Physics;
