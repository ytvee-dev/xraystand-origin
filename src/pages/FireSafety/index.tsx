import React from "react";
// import { useMemo } from "react";
// import {usePreloadImages} from "@hooks/usePreloadImages.ts";
// import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
// import {usePageData} from "@hooks/usePageData";
// import {useLocaleContent} from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/fireSafety/Sections/CoverSection";
// import * as contentRu from "@modules/firesafety/locales/rus.json";
// import * as contentKz from "@modules/firesafety/locales/kaz.json";
// import * as paths from "@modules/firesafety/locales/paths.json";
import "./style.css";
import FirstSection from "@modules/fireSafety/Sections/FirstSection";
import SecondSection from "@modules/fireSafety/Sections/SecondSection";
import ThirdSection from "@modules/fireSafety/Sections/ThirdSection";

const pageLayoutSX = {
    backgroundColor: "rgba(54, 19, 19, 1)",
    boldTextColor: "#FFFFFF",
    textColor: "rgba(255, 255, 255, 0.4)",
    copyrightColor: "rgba(255, 255, 255, 0.4)",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const FireSafetyLogo = () => {
    return (
        <div className="fire-safety-logo">
            <span>Пожарная безопастность</span>
        </div>
    );
};

const FireSafety: React.FC = () => {
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
            logo={<FireSafetyLogo />}
            isLanguageSwitcher={true}
            switcherColor="rgba(199, 73, 60, 1)"
            sx={pageLayoutSX}
            headerBackgroundColor="rgba(51, 18, 18, 1)"
        >
            <div className="fire-safety-page">
                <CoverSection className="fire-safety-section" />
                <FirstSection className="fire-safety-section" />
                <SecondSection className="fire-safety-section" />
                <ThirdSection className="fire-safety-section" />
            </div>
        </BrightnessLayout>
    );
};

export default FireSafety;
