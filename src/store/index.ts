import localeSlice from "./slices/Locale";
import applicationSlice from "./slices/Application";
import trafficLawsSlice from "./slices/TrafficLawsPage";
import chemistrySlice from "./slices/ChemistryPage";
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
