import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Languages } from "@domains/Translate";
import useScreenWidth from "@hooks/useScreenWidth";
import type { TRootState } from "@store/index";

export const usePageData = () => {
  const currentLocale: Languages = useSelector(
    (state: TRootState) => state.locale.locale,
  );
  const screenWidth = useScreenWidth();
  const isContentLoaded: boolean = useSelector(
    (state: TRootState) => state.application.isContentLoaded,
  );

  const isMobile = useMemo(() => screenWidth < 800, [screenWidth]);
  const isTablet = useMemo(
    () => screenWidth >= 800 && screenWidth < 1200,
    [screenWidth],
  );
  const isDesktop = useMemo(() => screenWidth >= 1200, [screenWidth]);

  return {
    currentLocale,
    screenWidth,
    isContentLoaded,
    isMobile,
    isTablet,
    isDesktop,
  };
};
