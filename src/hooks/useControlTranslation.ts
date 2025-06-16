import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import {
    Languages,
    localesControlRecord,
    type IControlTranslationResources,
} from "@domains/Translate";

const useControlTranslation = (): IControlTranslationResources => {
    const currentLocale: Languages = useSelector(
        (state: TRootState) => state.locale.locale
    );

    return localesControlRecord[currentLocale];
};

export default useControlTranslation;
