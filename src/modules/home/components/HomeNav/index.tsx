import React from "react";
import type { NavigationConfig, IdMapping } from "@components/common/Navigation/types";
import SectionNavigation from "@components/common/Navigation/SectionNavigation";
import "./style.css";

const navOptions: NavigationConfig = {
    ru: [
        { key: "welcome", label: "Добро пожаловать" },
        { key: "about", label: "О проекте" },
        { key: "features", label: "Преимущества" },
        { key: "development", label: "Разработка" },
        { key: "examples", label: "Стенды" },
        { key: "contact", label: "Контакты" },
    ],
    kz: [
        { key: "welcome", label: "Қош келдіңіз" },
        { key: "about", label: "Жоба туралы" },
        { key: "features", label: "Артықшылықтар" },
        { key: "development", label: "Әзірлеу" },
        { key: "examples", label: "Стендтер" },
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
    color?: string | null;
    page?: string;
}

const HomeNav: React.FC<Props> = ({ onNavigate, color=null, page='' }) => {
    return (
        <SectionNavigation
            onNavigate={onNavigate}
            navigationOptions={navOptions}
            idMapping={ID_BY_KEY}
            className="home-nav"
            color={color}
            page={page}
        />
    );
};

export default HomeNav;
