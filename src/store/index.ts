import localeSlice from "@store/slices/Locale";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        locale: localeSlice,
    },
});

export type TRootState = ReturnType<typeof store.getState>;
export default store;
