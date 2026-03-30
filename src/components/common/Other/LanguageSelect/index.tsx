import Select, { type ISelectOption } from "../Select";
import { LocalStorageKeys, type IListItemProps } from "@utils/constants";
import { Languages, languageSelectOptions } from "@domains/Translate";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "@store/slices/Locale";
import type { TRootState } from "@store/index";
import type { ReactElement } from "react";
import "./style.css";

interface ILanguageSelectProps {
    className?: string;
    color?: string;
}

const getLocaleLabelByValue = (selectedValue: string): string => {
    const currentLocaleOption: IListItemProps | undefined =
        languageSelectOptions.find(
            (option: IListItemProps) => option.value === selectedValue,
        );

    if (currentLocaleOption?.label == "RU") {
        return "Язык";
    }

    if (currentLocaleOption?.label == "KZ") {
        return "Тіл";
    }

    return "Language";
};

const LanguageSelect = ({
    className = "",
    color,
}: ILanguageSelectProps): ReactElement => {
    const dispatch = useDispatch();

    const currentLocale = useSelector(
        (state: TRootState) => state.locale.locale,
    );

    const handleSwitchLanguage = (selectedOption: ISelectOption): void => {
        const selectedLanguage: Languages = selectedOption.value;

        dispatch(setLocale(selectedLanguage));
        localStorage.setItem(LocalStorageKeys.LOCALE, selectedLanguage);
    };

    const currentLocaleLabel: string = getLocaleLabelByValue(currentLocale);

    return (
        <div className={`language-select-container ${className}`}>
            <label className="label-language-select" style={{ color: color }}>
                {currentLocaleLabel}
            </label>

            <Select
                value={currentLocale}
                className="language-select"
                options={languageSelectOptions}
                onChange={handleSwitchLanguage}
                style={{ color: color }}
                placeholder="Language"
            />
        </div>
    );
};

export default LanguageSelect;
