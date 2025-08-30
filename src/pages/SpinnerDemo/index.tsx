import React, {type ReactElement} from "react";
import type {NutritionLocale} from "@modules/nutrition/types";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import BrightnessLayout from "@layout/Brightness";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import NutritionNav from "@modules/nutrition/components/NutritionNav";
import FirstSection from "@modules/nutrition/Sections/FirstSection";
import TitleHeroSection from "@components/common/Sections/TitleHeroSection";
import Spinner from "@components/common/Spinner";
import * as contentRu from "@modules/nutrition/locales/rus.json";
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

const SpinnerDemo: React.FC = (): ReactElement => {
    const screenWidth = useScreenWidth();
    const content: NutritionLocale = contentRu;


    return (
        <BrightnessLayout
            logo={<NutritionLogo/>}
            navigation={<NutritionNav />}
            stickyHeader={true}
        >
            <Spinner />
            <section id={SECTION_IDS.cover} className="nutrition-section">
                <TitleHeroSection
                    title={content.coverSection.title}
                    subtitle={content.coverSection.description}
                    backgroundColor={heroSectionBgColor}
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
        </BrightnessLayout>
    );
};

export default SpinnerDemo;
