import { languageSelectOptions } from "@domains/Translate";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorageKeys } from "@utils/constants";
import { setLocale } from "@store/slices/Locale";
import type { TRootState } from "@store/index";
import type { ReactElement } from "react";
import "./style.css";

interface ILanguageSelectProps {
    className?: string;
    color?: string;
}

//TODO Надпись над селектом должна зависеть от выбранного языка (делать через обычный тернарник)

const LanguageSelect = ({
    className = "",
    color,
}: ILanguageSelectProps): ReactElement => {
    const dispatch = useDispatch();

    const currentLocale = useSelector(
        (state: TRootState) => state.locale.locale,
    );

    const handleSwitchLanguage = (): void => {
        // ... (реализовать изменение стейта) и получение выбранного элемента
        // dispatch(setLocale(selectedLanguage));
        // localStorage.setItem(LocalStorageKeys.LOCALE, selectedLanguage);
    };

    return (
        <div className={`language-select ${className}`}>
            <label style={{ color: color }}></label>
        </div>
    );
};

export default LanguageSelect;
