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

export interface NavigationOption {
    key: string;
    label: string;
}

export interface NavigationConfig {
    [key: string]: NavigationOption[]; // key is language code
}

export interface IdMapping {
    [key: string]: string; // key to id mapping
}

interface SectionNavigationProps {
    onNavigate?: (id: string) => void;
    navigationOptions: NavigationConfig;
    idMapping: IdMapping;
    className?: string;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ 
    onNavigate, 
    navigationOptions, 
    idMapping,
    className = "section-navigation"
}) => {
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const [sideBarOpened, setSideBarOpened] = React.useState(false);
    const languageText = currentLocale === 'ru' ? 'Выбор языка' : 'Тiлдi таңдау';
    const options = navigationOptions[currentLocale] || [];

    const toggleDrawer = () => setSideBarOpened(v => !v);

    const handleClick = (key: string) => {
        setSideBarOpened(false);
        const id = idMapping[key];
        if (id) {
            window.setTimeout(() => onNavigate?.(id), 300);
        }
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
        <div className={className}>
            <Button onClick={toggleDrawer} aria-label="open navigation">
                <MenuIcon sx={{ color: langSwitchColor }} />
            </Button>
            <Drawer anchor="right" open={sideBarOpened} onClose={toggleDrawer}>
                <Options />
            </Drawer>
        </div>
    );
};

export default SectionNavigation;
