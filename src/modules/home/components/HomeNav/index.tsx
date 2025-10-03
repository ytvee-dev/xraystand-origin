import React from "react";
import type { NavigationConfig, IdMapping } from "@components/common/Navigation/types";
import SectionNavigation from "@components/common/Navigation/SectionNavigation";

const navOptions: NavigationConfig = {
    ru: [
        { key: "welcome", label: "Добро пожаловать" },
        { key: "about", label: "Что это?" },
        { key: "features", label: "Преимущества" },
        { key: "examples", label: "Стенды" },
        { key: "contact", label: "Контакты" },
    ],
    kz: [
        { key: "welcome", label: "Добро пожаловать" },
        { key: "about", label: "Что это?" },
        { key: "features", label: "Преимущества" },
        { key: "examples", label: "Стенды" },
        { key: "contact", label: "Контакты" },
    ],
};

const ID_BY_KEY: IdMapping = {
    welcome: "home-welcome",
    about: "home-about", 
    features: "home-features",
    examples: "home-examples",
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
