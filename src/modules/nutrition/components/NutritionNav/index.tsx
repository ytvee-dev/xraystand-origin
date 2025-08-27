import React from "react";
import type { TRootState } from "@store/index.ts";
import type { Languages } from "@domains/Translate";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitcher from "@components/common/Other/LanguageSwitcher";
import "./style.css";

const langSwitchColor = "#56AB2F";

type NavKey =
    | "cover"
    | "first"
    | "second"
    | "third"
    | "fourth"
    | "fifth";

const navOptions: Record<Languages, { key: NavKey; label: string }[]> = {
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

const ID_BY_KEY: Record<NavKey, string> = {
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
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const [sideBarOpened, setSideBarOpened] = React.useState(false);
    const languageText = currentLocale === 'ru' ? 'Выбор языка' : 'Тiлдi таңдау';
    const options = navOptions[currentLocale];

    const toggleDrawer = () => setSideBarOpened(v => !v);

    const handleClick = (key: NavKey) => {
        setSideBarOpened(false);
        const id = ID_BY_KEY[key];
        window.setTimeout(() => onNavigate?.(id), 300);
    };

    const Options = () => (
        <Box sx={{ width: 270 }} role="presentation">
            <List>
                {options.map(({ key, label }) => (
                    <ListItem key={key} disablePadding>
                        <ListItemButton onClick={() => handleClick(key)}>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <ListItem>
                <ListItemText secondary={languageText} sx={{ pointerEvents: 'none' }} />
                <div onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                    <LanguageSwitcher color={langSwitchColor} />
                </div>
            </ListItem>
        </Box>
    );

    return (
        <div className="nutrition-nav">
            <Button onClick={toggleDrawer} aria-label="open navigation">
                <MenuIcon sx={{ color: langSwitchColor }} />
            </Button>
            <Drawer anchor="right" open={sideBarOpened} onClose={toggleDrawer}>
                <Options />
            </Drawer>
        </div>
    );
};

export default NutritionNav;
