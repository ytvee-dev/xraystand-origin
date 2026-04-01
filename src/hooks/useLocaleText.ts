import ruContent from "@components/common/locale/ru.json";
import enContent from "@components/common/locale/en.json";
import kazContent from "@components/common/locale/kz.json";
import type { TRootState } from "@store/index";
import { Languages } from "@domains/Translate";
import { useSelector } from "react-redux";

const translations: Record<Languages, Record<string, string>> = {
    [Languages.RUSSIAN]: ruContent,
    [Languages.ENGLISH]: enContent,
    [Languages.KAZAKH]: kazContent,
};

export const useLocaleText = (key: string): string => {
    const currentLocale = useSelector(
        (state: TRootState) => state.locale.locale,
    );

    return translations[currentLocale]?.[key];
};
