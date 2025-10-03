import React from "react";
import type { NavigationConfig, IdMapping } from "@components/common/Navigation/types";
import SectionNavigation from "@components/common/Navigation/SectionNavigation";

const navOptions: NavigationConfig = {
    ru: [
        { key: "welcome", label: "Добро пожаловать" },
        { key: "about", label: "О проекте" },
        { key: "features", label: "Преимущества" },
        { key: "examples", label: "Стенды" },
        { key: "development", label: "Разработка" },
        { key: "contact", label: "Контакты" },
    ],
    kz: [
        { key: "welcome", label: "Қош келдіңіз" },
        { key: "about", label: "Жоба туралы" },
        { key: "features", label: "Артықшылықтар" },
        { key: "examples", label: "Стендтер" },
        { key: "development", label: "Әзірлеу" },
        { key: "contact", label: "Байланыс" },
    ],
};

const ID_BY_KEY: IdMapping = {
    welcome: "home-welcome",
    about: "home-about", 
    features: "home-features",
    examples: "home-examples",
    development: "home-development",
    contact: "home-contact",
};

interface Props {
    onNavigate?: (id: string) => void;
}

const HomeNav: React.FC<Props> = ({ onNavigate }) => {
    return (
        <SectionNavigation
            onNavigate={onNavigate}
            navigationOptions={navOptions}
            idMapping={ID_BY_KEY}
            className="home-nav"
        />
    );
};

export default HomeNav;
