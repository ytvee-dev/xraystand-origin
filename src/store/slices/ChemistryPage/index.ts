import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type {ElementJson} from "@components/chemistry/PeriodicTable/types.ts";

interface IPageState {
    isModalOpened: boolean;
    elementInformation: ElementJson | null;
}

const initialState: IPageState = {
    isModalOpened: false,
    elementInformation: null,
};

const chemistrySlice = createSlice({
    name: "chemistry",
    initialState,
    reducers: {
        setIsModalOpened: (state, action: PayloadAction<boolean>) => {
            state.isModalOpened = action.payload;
        },
        selectElement: (state, action: PayloadAction<ElementJson>) => {
            state.elementInformation = action.payload;
        },
    },
});

export const { setIsModalOpened, selectElement } = chemistrySlice.actions;

export default chemistrySlice.reducer;
