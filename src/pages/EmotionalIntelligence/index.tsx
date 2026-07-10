import Spinner from "@components/common/Spinner";
import { usePageData } from "@hooks/usePageData";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import HomeLayout from "@layout/HomeLayout";
import CoverSection from "@modules/emotionalIntelligence/Sections/CoverSection";
import FirstSection from "@modules/emotionalIntelligence/Sections/FirstSection";
import ThirdSection from "@modules/emotionalIntelligence/Sections/ThirdSection";
import * as contentKz from "@modules/emotionalIntelligence/locales/kaz.json";
import * as pathData from "@modules/emotionalIntelligence/locales/path.json";
import * as contentRu from "@modules/emotionalIntelligence/locales/rus.json";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { svgSpriteSrcPrefix } from "@utils/constants";
import { useMemo, type ReactElement } from "react";
import { useLocale } from "@hooks/useLocale";
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
    const currentLanguage = useLocale();
    const coverImage =
        currentLanguage === "ru"
            ? pathData.backgrounds.cover_rus
            : pathData.backgrounds.cover_kaz;

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
                <CoverSection
                    backgroundImage={coverImage}
                    content={{
                        titleHighlight: content.coverSection.titleHighlight,
                        title: content.coverSection.title,
                        description: content.coverSection.content
                    }}
                />
                <FirstSection content={content.firstSection} />
                <ThirdSection content={content.thirdSection} />
            </div>
        </HomeLayout>
    );
};

export default EmotionalIntelligence;
