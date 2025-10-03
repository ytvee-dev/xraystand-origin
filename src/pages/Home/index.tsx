import React from "react";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import {usePageData} from "@hooks/usePageData";
import {useLocaleContent} from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/home/Sections/CoverSection";
import AboutSection from "@modules/home/Sections/AboutSection";
import FeaturesSection from "@modules/home/Sections/FeaturesSection";
import ExamplesSection from "@modules/home/Sections/ExamplesSection";
import DevelopmentSection from "@modules/home/Sections/DevelopmentSection";
import ContactSection from "@modules/home/Sections/ContactSection";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import HomeNav from "@modules/home/components/HomeNav";
import Spinner from "@components/common/Spinner";
import * as contentRu from "@modules/home/locales/rus.json";
import * as contentKz from "@modules/home/locales/kaz.json";
import * as paths from "@modules/home/locales/paths.json";
import './style.css';

const HomePage: React.FC = () => {
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const { isContentLoaded } = usePageData();
    const content = useLocaleContent(contentRu, contentKz);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return(
        <BrightnessLayout
            logo={<NutritionLogo/>}
            navigation={<HomeNav onNavigate={scrollTo}/>}
            stickyHeader={true}
        >
            {!isContentLoaded && (<Spinner />)}

            {/* // todo: контент должен не весь прокидывать, а только для текущей секции */}
            <CoverSection content={content} />
            <AboutSection content={content} />
            <FeaturesSection content={content} />
            <ExamplesSection content={content} />
            <DevelopmentSection content={content} />
            <ContactSection content={content} />
        </BrightnessLayout>
    );
};

export default HomePage;
