import {type ReactElement} from "react";

import BrightnessLayout from "@layout/Brightness";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import NutritionNav from "@modules/nutrition/components/NutritionNav";

import "./style.css";

const Nutrition = (): ReactElement => {
    return (
        <BrightnessLayout
            logo={<NutritionLogo />}
            navigation={<NutritionNav />}
        >
            <div className="Nutrition">Nutrition</div>
        </BrightnessLayout>
    );
};

export default Nutrition;