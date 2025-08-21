import {type ReactElement} from "react";
import type {TRootState} from "@store/index.ts";
import {useSelector} from "react-redux";

import BrightnessLayout from "@layout/Brightness";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import NutritionNav from "@modules/nutrition/components/NutritionNav";
import FirstSection from "@modules/nutrition/Sections/FirstSection";
import TitleHeroSection from "@components/common/Sections/TitleHeroSection";

import {Languages} from "@domains/Translate";
import * as contentRu from "@modules/nutrition/locales/rus.json";
import * as contentKz from "@modules/nutrition/locales/kaz.json";
import "./style.css";

const heroSectionBgColor = "linear-gradient(90deg, rgba(168, 224, 99, 0.8) 0%, rgba(86, 171, 47, 0.8) 100%), linear-gradient(90deg, rgba(245, 245, 245, 1) 0%, rgba(212, 212, 212, 1) 100%)";

const Nutrition = (): ReactElement => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );

    const content = currentLocale === 'ru' ? contentRu : contentKz;

    return (
        <BrightnessLayout
            logo={<NutritionLogo/>}
            navigation={<NutritionNav/>}
        >
            <TitleHeroSection
                title={content.coverSection.title}
                subtitle={content.coverSection.description}
                backgroundColor={heroSectionBgColor}
                sx={{
                    fontFamily: "Roboto",
                    titleColor: "#171717",
                    labelColor: "#404040",
                    titleFontWeight: 400,
                    fontWeight: 300,
                    titleFontSize: "60px",
                    labelFontSize: "20px",
                }}
            />
            <FirstSection/>
        </BrightnessLayout>
    );
};

export default Nutrition;