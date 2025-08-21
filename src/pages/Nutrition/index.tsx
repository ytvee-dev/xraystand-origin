import {type ReactElement} from "react";

import BrightnessLayout from "@layout/Brightness";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import NutritionNav from "@modules/nutrition/components/NutritionNav";

import "./style.css";
import FirstSection from "@modules/nutrition/Sections/FirstSection";

const Nutrition = (): ReactElement => {
    return (
        <BrightnessLayout
            logo={<NutritionLogo />}
            navigation={<NutritionNav />}
        >
            <FirstSection />
        </BrightnessLayout>
    );
};

export default Nutrition;