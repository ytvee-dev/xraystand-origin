import Spinner from "@components/common/Spinner";
import { usePageData } from "@hooks/usePageData";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import HomeLayout from "@layout/HomeLayout";
import FirstSection from "@modules/emotionalIntelligence/Sections/FirstSection";
import * as contentKz from "@modules/emotionalIntelligence/locales/kaz.json";
import * as pathData from "@modules/emotionalIntelligence/locales/path.json";
import * as contentRu from "@modules/emotionalIntelligence/locales/rus.json";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { svgSpriteSrcPrefix } from "@utils/constants";
import { useMemo, type ReactElement } from "react";
import "./style.css";

const EmotionalIntelligenceLogo = (): ReactElement => {
    const { isMobile } = usePageData();

    return (
        <svg
            aria-hidden="true"
            focusable="false"
            width={isMobile ? 65 : 80}
            height={50}
        >
            <use href={`${svgSpriteSrcPrefix}logo`} />
        </svg>
    );
};

const EmotionalIntelligence = (): ReactElement => {
    const imgUrls = useMemo(() => collectFromPathsJson(pathData), []);
    usePreloadImages(imgUrls);

    const { isContentLoaded } = usePageData();
    const content = useLocaleContent(contentRu, contentKz);

    return (
        <HomeLayout
            logo={<EmotionalIntelligenceLogo />}
            stickyHeader={true}
            isLanguageSwitcher={true}
            headerBackgroundColor="#FFFFFF"
            switcherColor="#474747"
        >
            <div className="emotional-intelligence-page">
                {!isContentLoaded && <Spinner />}
                <FirstSection content={content.firstSection} />
            </div>
        </HomeLayout>
    );
};

export default EmotionalIntelligence;
