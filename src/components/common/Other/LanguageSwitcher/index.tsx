import { useDispatch, useSelector } from "react-redux";
import { useLocaleText } from "@hooks/useLocaleText";
import { LocalStorageKeys } from "@utils/constants";
import { setLocale } from "@store/slices/Locale";
import type { TRootState } from "@store/index";
import { Languages } from "@domains/Translate";
import { type ChangeEvent } from "react";
import { Switch } from "@mui/material";

interface ILanguageSwitcherProps {
    color?: string;
    className?: string;
}

const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = ({
    color = "",
    className,
}: ILanguageSwitcherProps) => {
    const dispatch = useDispatch();

    const currentLocale = useSelector(
        (state: TRootState) => state.locale.locale,
    );

    const handleSwitchLanguage = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedLanguage: Languages = !event.target.checked
            ? Languages.RUSSIAN
            : Languages.KAZAKH;

        dispatch(setLocale(selectedLanguage));
        localStorage.setItem(LocalStorageKeys.LOCALE, selectedLanguage);
    };

    const isDefaultChecked: boolean = currentLocale === Languages.KAZAKH;
    const currentLocaleLabel: string = useLocaleText(
        currentLocale,
        "languageSwitcher",
    );

    const styleSX = {
        "& .MuiSwitch-switchBase": {
            color: color as string,
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
            color: color as string,
            "& + .MuiSwitch-track": {
                backgroundColor: color as string,
                opacity: 0.5,
            },
        },
        "& .MuiSwitch-track": {
            backgroundColor: color as string,
            opacity: 0.3,
        },
    };

    return (
        <div className={className} style={{ userSelect: "none" }}>
            <Switch
                checked={isDefaultChecked}
                onChange={handleSwitchLanguage}
                sx={styleSX}
            />
            {currentLocaleLabel}
        </div>
    );
};

export default LanguageSwitcher;
