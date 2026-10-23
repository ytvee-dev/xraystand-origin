import Spinner from "@components/common/Spinner";
import { usePageData } from "@hooks/usePageData";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import FirstSection from "@modules/ecology/Sections/FirstSection";
import SecondSection from "@modules/ecology/Sections/SecondSection";
import ThirdSection from "@modules/ecology/Sections/ThirdSection";
import * as contentKz from "@modules/ecology/locales/kaz.json";
import * as pathData from "@modules/ecology/locales/path.json";
import * as contentRu from "@modules/ecology/locales/rus.json";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { svgSpriteSrcPrefix } from "@utils/constants";
import { useMemo, type ReactElement } from "react";
import BrightnessLayout from "@layout/Brightness";
import './style.css'

const EmotionalIntelligenceLogo = (): ReactElement => {
    const { isMobile } = usePageData();

    return (
        <svg
            aria-hidden="true"
            focusable="false"
            width={isMobile ? 65 : 80}
            height={50}
            style={{ 
                filter: 'invert(11%) sepia(16%) saturate(1759%) hue-rotate(55deg) brightness(97%) contrast(85%)'
            }}
        >
            <use href={`${svgSpriteSrcPrefix}logo`} />
        </svg>
    );
};

const Ecology = (): ReactElement => {
    const imgUrls = useMemo(() => collectFromPathsJson(pathData), []);
    usePreloadImages(imgUrls);

    const { isContentLoaded, isMobile } = usePageData();
    const content = useLocaleContent(contentRu, contentKz);
    return (
        <BrightnessLayout
            logo={<EmotionalIntelligenceLogo />}
            stickyHeader={true}
            isLanguageSwitcher={true}
            headerBackgroundColor="#F2F1E8"
            switcherColor="#3D602C"
            footerClassName="ecology-footer"
            footerBgImage=""
            sx={{
                backgroundColor: "transparent",
                boldTextColor: "#fff",
                textColor: "#fff",
                copyrightColor: "#fff",
                logoColorMode: "light",
                madeByColorMode: "light",
            }}
        >
            <div className="ecology-page">
                {!isContentLoaded && <Spinner />}
                <FirstSection content={content.firstSection} isMobile={isMobile}/>
                <SecondSection content={content.secondSection} />
                <ThirdSection content={content.thirdSection} />
            </div>
        </BrightnessLayout>
    );
};

export default Ecology;
