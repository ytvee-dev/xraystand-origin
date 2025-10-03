import React, { type ReactElement } from "react";
import './style.css';
import CoverSection from "@modules/home/Sections/CoverSection";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import NutritionNav from "@modules/nutrition/components/NutritionNav";
import BrightnessLayout from "@layout/Brightness";

const HomePage = (): ReactElement => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return(
        <BrightnessLayout
            logo={<NutritionLogo/>}
            navigation={<NutritionNav onNavigate={scrollTo}/>}
            stickyHeader={true}
        >
            <div className="home-page">
                <CoverSection className='home-cover-section' />
            </div>
        </BrightnessLayout>
    );
};

export default HomePage;
