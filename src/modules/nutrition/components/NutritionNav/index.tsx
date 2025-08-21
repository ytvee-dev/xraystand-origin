import React from "react";
import type {TRootState} from "@store/index.ts";
import type {Languages} from "@domains/Translate";
import {useSelector} from "react-redux";

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
const navOptions = {
    ru: [
        'Основа жизни',
        'Питательные вещества',
        'Принципы',
        'Продукты',
        'Тарелка здоровья',
        'Режим питания',
    ],
    kz: [
        'Өмір негізі',
        'Қоректік заттар',
        'Принциптері',
        'Өнімдер',
        'Тәрелке денсаулығын',
        'Тамақтану Тәртібі',
    ]
};

const NutritionNav: React.FC = () => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );
    const [sideBarOpened, setSideBarOpened] = React.useState(false);
    const languageText = currentLocale === 'ru' ? 'Выбор языка' : 'Тiлдi таңдау';
    const options = currentLocale === 'ru' ? navOptions.ru : navOptions.kz;

    const toggleDrawer = () => {
        setSideBarOpened(!sideBarOpened);
    };

    const Options = () => (
        <Box
            sx={{width: 270}}
            role="presentation"

        >
            <List>
                {options.map((text) => (
                    <ListItem
                        key={text}
                        onClick={toggleDrawer}
                        onKeyDown={toggleDrawer}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <ListItem>
                <ListItemText secondary={languageText} sx={{eventPointer: 'none'}}/>
                <div
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <LanguageSwitcher color={langSwitchColor}/>
                </div>
            </ListItem>
        </Box>
    );

    return (
        <div className={'nutrition-nav'}>
            <React.Fragment>
                <Button onClick={toggleDrawer}>
                    <MenuIcon sx={{ color: langSwitchColor }}/>
                </Button>
                <Drawer
                    anchor={'right'}
                    open={sideBarOpened}
                    onClose={toggleDrawer}
                >
                    <Options/>
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default NutritionNav;
