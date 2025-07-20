import { Languages, localesTextRecord, type PageIds } from "@domains/Translate";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";

const usePageTranslation = (pageId: PageIds) => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );

    return {
        textTranslation: localesTextRecord[currentLocale][pageId],
    };
};

export default usePageTranslation;
