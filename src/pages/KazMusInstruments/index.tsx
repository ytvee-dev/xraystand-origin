// import React, { useMemo } from "react";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
// import {usePageData} from "@hooks/usePageData";
import {useLocaleContent} from "@hooks/useLocale";
// import Spinner from "@components/common/Spinner";
import * as contentRu from "@modules/KazMusInstruments/locales/rus.json";
import * as contentKz from "@modules/KazMusInstruments/locales/kaz.json";
import * as paths from "@modules/KazMusInstruments/locales/paths.json";
// import {svgSpriteSrcPrefix} from "@utils/constants";
import CoverSection from "@modules/KazMusInstruments/Sections/CoverSection";
import './style.css';
import BrightnessLayout from "@layout/Brightness";

const pageLayoutSX = {
    backgroundColor: "#181818",
    boldTextColor: "#FFFFFF",
    textColor: "rgba(255, 255, 255, 0.4)",
    copyrightColor: "rgba(255, 255, 255, 0.4)",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const MainLogo = () => {
    // const { isMobile } = usePageData();
    return (
        <div className="kaz-music-logo">Музыкальные инструменты</div>
    );
};

const KazMusic: React.FC = () => {
    const imgUrls = collectFromPathsJson(paths)
    usePreloadImages(imgUrls);
    // const { isContentLoaded } = usePageData();
    const textContent = useLocaleContent(contentRu, contentKz);

    return(
       <div className="kaz-music-container">
            <BrightnessLayout
            logo={<MainLogo />}
            isLanguageSwitcher={true}
            switcherColor="#181818"
            sx={pageLayoutSX}
            headerBackgroundColor="rgb(255, 255, 255)"
            languageSwitcherClassName="kaz-music-language-switcher"
            >
                <CoverSection backgroundImage={paths.backgrounds.cover} content={textContent.coverSection} />
            </BrightnessLayout>
       </div>
    );
};

export default KazMusic;
