import React from "react";
// import { useMemo } from "react";
// import {usePreloadImages} from "@hooks/usePreloadImages.ts";
// import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
// import {usePageData} from "@hooks/usePageData";
// import {useLocaleContent} from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/physics/Sections/CoverSection";
// import * as contentRu from "@modules/physics/locales/rus.json";
// import * as contentKz from "@modules/physics/locales/kaz.json";
// import * as paths from "@modules/physics/locales/paths.json";
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
                <CoverSection/>
            </div>
        </BrightnessLayout>
        
    );
};

export default Physics;
