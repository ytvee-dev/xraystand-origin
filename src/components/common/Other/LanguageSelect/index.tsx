import ruContent from "@components/common/locale/ru.json";
import enContent from "@components/common/locale/en.json";
import kazContent from "@components/common/locale/kz.json";
import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";
import { Languages, languageSelectOptions } from "@domains/Translate";
import type { ChangeEvent, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorageKeys } from "@utils/constants";
import { setLocale } from "@store/slices/Locale";
import type { TRootState } from "@store/index";
import "./style.css";

interface ILanguageSelectProps {
    className?: string;
    color?: string;
}

export interface ISelectOption {
    value: string;
    label: string;
}

const translations: Record<Languages, string> = {
    [Languages.RUSSIAN]: ruContent.LanguageSelect,
    [Languages.ENGLISH]: enContent.LanguageSelect,
    [Languages.KAZAKH]: kazContent.LanguageSelect,
};

const getLocaleLabelByValue = (
    translations: Record<Languages, string>,
    selectedValue: string,
): string => {
    const locale = selectedValue as Languages;

    return translations[locale] || "Language";
};

const LanguageSelect = ({
    className = "",
}: ILanguageSelectProps): ReactElement => {
    const dispatch = useDispatch();

    const currentLocale = useSelector(
        (state: TRootState) => state.locale.locale,
    );

    const handleSwitchLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage: Languages = event.target.value as Languages;

        dispatch(setLocale(selectedLanguage));
        localStorage.setItem(LocalStorageKeys.LOCALE, selectedLanguage);
    };

    const currentLocaleLabel: string = getLocaleLabelByValue(
        translations,
        currentLocale,
    );

    return (
        <div className={`language-select-container ${className}`}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                        sx={{ color: "#40b9dd" }}
                    >
                        {currentLocaleLabel}
                    </InputLabel>
                    <NativeSelect
                        value={currentLocale}
                        onChange={handleSwitchLanguage}
                        defaultValue={30}
                        inputProps={{
                            name: currentLocale,
                            id: "uncontrolled-native",
                        }}
                    >
                        {languageSelectOptions.map(
                            (option: ISelectOption, index) => (
                                <option
                                    value={option.value}
                                    className="language-select-option"
                                    key={index}
                                >
                                    {option.label}
                                </option>
                            ),
                        )}
                    </NativeSelect>
                </FormControl>
            </Box>
        </div>
    );
};

export default LanguageSelect;
