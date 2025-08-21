import {type ReactElement} from "react";

import BrightnessLayout from "@layout/Brightness";
import NutritionLogo from "@modules/nutrition/components/NutritionLogo";
import NutritionNav from "@modules/nutrition/components/NutritionNav";
import LightCard from "@components/common/Cards/LightCard";

import "./style.css";

const Nutrition = (): ReactElement => {
    return (
        <BrightnessLayout
            logo={<NutritionLogo />}
            navigation={<NutritionNav />}
        >
            <div className="Nutrition" style={{padding: 24}}>
                <LightCard
                    key={1}
                    imageName={'ds-system/cards/ds-card-1.jpg'}
                    title={'Белки'}
                    subTitle={'Изучите основные питательные вещества'}
                    label={'Питательные вещества — это необходимые вещества, которые нашему организму нужны для правильного функционирования. Они поддерживают рост, восстанавливают ткани и обеспечивают энергией. '}
                    backgroundColor="#FAFFDE"
                    minWidth="97px"
                    maxWidth={'272px'}
                    imageHeight={'188px'}
                    sxText={{
                        imgObjectFit: 'cover',
                        titleColor: '#1D1B20',
                        labelColor: '#49454F',
                        fontWeight: 400,
                        titleFontSize: '16px',
                        subTitleFontSize: '14px',
                        labelFontSize: '14px',
                    }}
                />
            </div>
        </BrightnessLayout>
    );
};

export default Nutrition;