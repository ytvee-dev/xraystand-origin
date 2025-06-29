import { Languages, languageSwitcherOptions } from "@domains/Translate";
import { type ChangeEvent, type ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "@store/slices/Locale";
import type { TRootState } from "@store/index";
import { Switch } from "@mui/material";
import {
    LocalStorageKeys,
    type IListItemProps,
} from "@utils/constants";

const getLocaleLabelByValue = (selectedValue: string): string => {
    const currentLocaleOption: IListItemProps | undefined =
        languageSwitcherOptions.find(
            (option: IListItemProps) => option.value === selectedValue
        );

    return !currentLocaleOption
        ? languageSwitcherOptions[0].label
        : currentLocaleOption.label;
};

const LanguageSwitcher = (): ReactElement => {
    const dispatch = useDispatch();

    const currentLocale = useSelector(
        (state: TRootState) => state.locale.locale
    );

    const handleSwitchLanguage = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);

        const selectedLanguage: Languages = !event.target.checked
            ? Languages.RUSSIAN
            : Languages.RUSSIAN
            // : Languages.KAZAKH;

        dispatch(setLocale(selectedLanguage));
        localStorage.setItem(LocalStorageKeys.LOCALE, selectedLanguage);
    };

    const isDefaultChecked: boolean = currentLocale === Languages.KAZAKH;
    const currentLocaleLabel: string = getLocaleLabelByValue(currentLocale);

    return (
        <div>
            <Switch
                onChange={handleSwitchLanguage}
                defaultChecked={isDefaultChecked}
            />
            {currentLocaleLabel}
        </div>
    );
};

export default LanguageSwitcher;
