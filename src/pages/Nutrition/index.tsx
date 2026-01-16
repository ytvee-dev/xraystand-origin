import React, {type ReactElement} from "react";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import {usePageData} from "@hooks/usePageData";
import {useLocaleContent} from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import NutritionNav from "@modules/nutrition/components/NutritionNav";
import FirstSection from "@modules/nutrition/Sections/FirstSection";
import TitleHeroSection from "@components/common/Sections/TitleHeroSection";
import SecondSection from "@modules/nutrition/Sections/SecondSection";
import ThirdSection from "@modules/nutrition/Sections/ThirdSection";
import FourthSection from "@modules/nutrition/Sections/FourthSection";
import FifthSection from "@modules/nutrition/Sections/FifthSection";
import Spinner from "@components/common/Spinner";
import * as contentRu from "@modules/nutrition/locales/rus.json";
import * as contentKz from "@modules/nutrition/locales/kaz.json";
import * as paths from "@modules/nutrition/locales/paths.json";
import "./style.css";

const heroSectionBgColor = "linear-gradient(90deg, rgba(168, 224, 99, 0.8) 0%, rgba(86, 171, 47, 0.8) 100%), linear-gradient(90deg, rgba(245, 245, 245, 1) 0%, rgba(212, 212, 212, 1) 100%)";
const SECTION_IDS = {
    cover: "nutrition-cover",
    first: "nutrition-first",
    second: "nutrition-second",
    third: "nutrition-third",
    fourth: "nutrition-fourth",
    fifth: "nutrition-fifth",
} as const;

const Nutrition: React.FC = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths)
    usePreloadImages(imgUrls);

    const { screenWidth, isContentLoaded } = usePageData();
    const content = useLocaleContent(contentRu, contentKz);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <BrightnessLayout
            logo={<NutritionLogo/>}
            navigation={<NutritionNav onNavigate={scrollTo}/>}
            stickyHeader={true}
        >
            {!isContentLoaded && (<Spinner />)}

            <section id={SECTION_IDS.cover} className="nutrition-section">
                <TitleHeroSection
                    title={content.coverSection.title}
                    subtitle={content.coverSection.description}
                    backgroundColor={heroSectionBgColor}
                    backgroundImage="https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768057781/hero_ymxrc3.webp"
                    sx={{
                        fontFamily: "Rubik, sans-serif",
                        titleColor: "#FFFFFF",
                        labelColor: "#FFFFFF",
                        titleFontWeight: 400,
                        fontWeight: 300,
                        titleFontSize: screenWidth > 768 ? "60px" : "52px",
                        labelFontSize: screenWidth > 768 ? "16px" : "20px",
                    }}
                />
            </section>

            <section id={SECTION_IDS.first} className="nutrition-section">
                <FirstSection content={content}/>
            </section>

            <section id={SECTION_IDS.second} className="nutrition-section">
                <SecondSection content={content}/>
            </section>

            <section id={SECTION_IDS.third} className="nutrition-section">
                <ThirdSection content={content}/>
            </section>

            <section id={SECTION_IDS.fourth} className="nutrition-section">
                <FourthSection content={content}/>
            </section>

            <section id={SECTION_IDS.fifth} className="nutrition-section">
                <FifthSection content={content}/>
            </section>
        </BrightnessLayout>
    );
};

export default Nutrition;