import localeSlice from "@store/slices/Locale";
import applicationSlice from "@store/slices/Application";
import trafficLawsSlice from "@store/slices/TrafficLawsPage";
import chemistrySlice from "@store/slices/ChemistryPage";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        locale: localeSlice,
        application: applicationSlice,
        trafficLaws: trafficLawsSlice,
        chemistry: chemistrySlice,
    },
});

export type TRootState = ReturnType<typeof store.getState>;
export default store;
