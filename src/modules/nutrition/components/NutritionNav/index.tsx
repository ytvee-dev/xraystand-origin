import React from "react";
import type { NavigationConfig, IdMapping } from "@components/common/Navigation/types";
import SectionNavigation from "@components/common/Navigation/SectionNavigation";
import "./style.css";

const navOptions: NavigationConfig = {
    ru: [
        { key: "cover",  label: "Основа жизни" },
        { key: "first",  label: "Питательные вещества" },
        { key: "second", label: "Принципы" },
        { key: "third",  label: "Продукты" },
        { key: "fourth", label: "Тарелка здоровья" },
        { key: "fifth",  label: "Режим питания" },
    ],
    kz: [
        { key: "cover",  label: "Өмір негізі" },
        { key: "first",  label: "Қоректік заттар" },
        { key: "second", label: "Принциптері" },
        { key: "third",  label: "Өнімдер" },
        { key: "fourth", label: "Тәрелке денсаулығын" },
        { key: "fifth",  label: "Тамақтану Тәртібі" },
    ],
};

const ID_BY_KEY: IdMapping = {
    cover:  "nutrition-cover",
    first:  "nutrition-first",
    second: "nutrition-second",
    third:  "nutrition-third",
    fourth: "nutrition-fourth",
    fifth:  "nutrition-fifth",
};

interface Props {
    onNavigate?: (id: string) => void;
}

const NutritionNav: React.FC<Props> = ({ onNavigate }) => {
    return (
        <SectionNavigation
            onNavigate={onNavigate}
            navigationOptions={navOptions}
            idMapping={ID_BY_KEY}
            className="nutrition-nav"
        />
    );
};

export default NutritionNav;