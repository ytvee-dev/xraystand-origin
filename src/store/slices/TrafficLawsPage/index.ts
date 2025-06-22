import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ILocaleState {
    isModalOpened: boolean;
}

const initialState: ILocaleState = {
    isModalOpened: false,
};

const trafficLawsSliceSlice = createSlice({
    name: "trafficLaws",
    initialState,
    reducers: {
        setIsModalOpened: (state, action: PayloadAction<boolean>) => {
            state.isModalOpened = action.payload;
        },
    },
});

export const { setIsModalOpened } = trafficLawsSliceSlice.actions;

export default trafficLawsSliceSlice.reducer;
