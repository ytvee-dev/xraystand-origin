import {Languages, languageSwitcherOptions} from "../../../../domains/Translate";
import {type ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLocale} from "../../../../store/slices/Locale";
import type {TRootState} from "../../../../store";
import {Switch} from "@mui/material";
import {
    LocalStorageKeys,
    type IListItemProps,
} from "../../../../utils/constants";

interface ILanguageSwitcherProps {
    color?: string;
};

const getLocaleLabelByValue = (selectedValue: string): string => {
    const currentLocaleOption: IListItemProps | undefined =
        languageSwitcherOptions.find(
            (option: IListItemProps) => option.value === selectedValue
        );

    return !currentLocaleOption
        ? languageSwitcherOptions[0].label
        : currentLocaleOption.label;
};

const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = ({color=''}: ILanguageSwitcherProps) => {
    const dispatch = useDispatch();

    const currentLocale = useSelector(
        (state: TRootState) => state.locale.locale
    );

    const handleSwitchLanguage = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("handleSwitchLanguage:", event.target.checked);

        const selectedLanguage: Languages = !event.target.checked
            ? Languages.RUSSIAN
            : Languages.KAZAKH;

        dispatch(setLocale(selectedLanguage));
        localStorage.setItem(LocalStorageKeys.LOCALE, selectedLanguage);
    };

    const isDefaultChecked: boolean = currentLocale === Languages.KAZAKH;
    const currentLocaleLabel: string = getLocaleLabelByValue(currentLocale);

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
        <div style={{userSelect: "none"}}>
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
