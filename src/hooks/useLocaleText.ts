import ruContent from "@components/common/locale/ru.json";
import enContent from "@components/common/locale/en.json";
import kazContent from "@components/common/locale/kz.json";
import { Languages } from "@domains/Translate";

const translations: Record<Languages, Record<string, string>> = {
    [Languages.RUSSIAN]: ruContent,
    [Languages.ENGLISH]: enContent,
    [Languages.KAZAKH]: kazContent,
};

export const useLocaleText = (language: Languages, key: string): string => {
    return translations[language]?.[key] ?? "Language";
};
