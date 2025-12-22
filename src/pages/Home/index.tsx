import React, { useMemo } from "react";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import {usePageData} from "@hooks/usePageData";
import {useLocaleContent} from "@hooks/useLocale";
import HomeLayout from "@layout/HomeLayout";
import CoverSection from "@modules/home/Sections/CoverSection";
import AboutSection from "@modules/home/Sections/AboutSection";
import FeaturesSection from "@modules/home/Sections/FeaturesSection";
import ExamplesSection from "@modules/home/Sections/ExamplesSection";
import DevelopmentSection from "@modules/home/Sections/DevelopmentSection";
import ContactSection from "@modules/home/Sections/ContactSection";
import HomeNav from "@modules/home/components/HomeNav";
import Spinner from "@components/common/Spinner";
import * as contentRu from "@modules/home/locales/rus.json";
import * as contentKz from "@modules/home/locales/kaz.json";
import * as paths from "@modules/home/locales/paths.json";
import {svgSpriteSrcPrefix} from "@utils/constants";
import './style.css';

const MainLogo = () => {
    const { isMobile } = usePageData();
    return (
        <svg aria-hidden="true" focusable="false" width={isMobile ? 65 : 80} height={50}>
            <use href={`${svgSpriteSrcPrefix}${'logo'}`} />
        </svg>
    );
};

const HomePage: React.FC = () => {
    const imgUrls = useMemo(() => collectFromPathsJson(paths), []);
    usePreloadImages(imgUrls);

    const { isContentLoaded, currentLocale } = usePageData();
    const content = useLocaleContent(contentRu, contentKz);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return(
        <HomeLayout
            navigation={<HomeNav onNavigate={scrollTo} color='black' page={'home'}/>}
            logo={<MainLogo />}
            stickyHeader={true}
            headerBackgroundColor={'#ECEEE1'}
        >
            {!isContentLoaded && (<Spinner />)}

            <CoverSection content={content} lang={currentLocale} />
            <AboutSection content={content.aboutSection} />
            <FeaturesSection content={content.featuresSection} />
            <DevelopmentSection content={content.developmentSection} />
            <ExamplesSection content={content.examplesSection} />
            <ContactSection content={content.contactSection} lang={currentLocale} />
        </HomeLayout>
    );
};

export default HomePage;
