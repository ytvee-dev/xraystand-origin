import React from "react";
import {usePageData} from "@hooks/usePageData";
import "./style.css";

const NutritionLogo: React.FC = ()  => {
    const { currentLocale } = usePageData();

    const firstPart = currentLocale === 'ru' ? "Здоровое" : "Дұрыс";
    const secondPart = currentLocale === 'ru' ? "Питание" : "Тамақтану";

    return (
        <div className={'nutrition-logo'}>
            <span className={'nutrition-logo__first-part'}>{firstPart}</span>
            <span className={'nutrition-logo__second-part'}>{secondPart}</span>
        </div>
    );
};

export default NutritionLogo;
