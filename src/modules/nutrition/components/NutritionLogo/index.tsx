import React from "react";
import type {TRootState} from "../../../../store";
import type {Languages} from "../../../../domains/Translate";
import {useSelector} from "react-redux";
import "./style.css";

const NutritionLogo: React.FC = ()  => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );

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
