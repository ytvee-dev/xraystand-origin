import localeSlice from "@store/slices/Locale";
import trafficLawsSlice from "@store/slices/TrafficLawsPage";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        locale: localeSlice,
        trafficLaws: trafficLawsSlice,
    },
});

export type TRootState = ReturnType<typeof store.getState>;
export default store;
