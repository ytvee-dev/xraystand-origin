import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Languages } from "@domains/Translate";
import type { TRootState } from "@store/index";

export const useLocale = () => {
    return useSelector((state: TRootState) => state.locale.locale);
};

export const useLocaleContent = <T>(
    ruContent: T,
    kzContent: T,
    enContent?: T,
): T => {
    const currentLocale: Languages = useLocale();

    return useMemo(() => {
        if (currentLocale === Languages.KAZAKH) {
            return kzContent;
        }

        if (currentLocale === Languages.RUSSIAN && enContent !== undefined) {
            return enContent;
        }

        return ruContent;
    }, [currentLocale, ruContent, kzContent, enContent]);
};
