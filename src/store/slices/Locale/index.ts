import { type PayloadAction } from "@reduxjs/toolkit";
import { Languages } from "@domains/Translate";
import { LocalStorageKeys } from "@utils/constants";
import { createSlice } from "@reduxjs/toolkit";

interface ILocaleState {
    locale: Languages;
}

const initialState: ILocaleState = {
    locale:
        (localStorage.getItem(LocalStorageKeys.LOCALE) as Languages) ??
        Languages.RUSSIAN,
};

const localSlice = createSlice({
    name: "locale",
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<Languages>) => {
            console.info(
                `[localeSlice] Setting locale from ${state.locale} to ${action.payload}`
            );
            state.locale = action.payload;
        },
    },
});

export const { setLocale } = localSlice.actions;

export default localSlice.reducer;
