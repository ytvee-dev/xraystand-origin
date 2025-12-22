import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Languages } from "@domains/Translate";
import type { TRootState } from "@store/index";

export const useLocale = () => {
  return useSelector((state: TRootState) => state.locale.locale);
};

export const useLocaleContent = <T>(ruContent: T, kzContent: T): T => {
  const currentLocale: Languages = useLocale();

  return useMemo(
    () => (currentLocale === Languages.KAZAKH ? kzContent : ruContent),
    [currentLocale, ruContent, kzContent],
  );
};
