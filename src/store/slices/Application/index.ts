import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IPageState {
    isModalOpened: boolean;
    isContentLoaded: boolean;
}

const initialState: IPageState = {
    isModalOpened: false,
    isContentLoaded: false,
};

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        setIsModalOpened: (state, action: PayloadAction<boolean>) => {
            state.isModalOpened = action.payload;
        },
        setIsContentLoaded: (state, action: PayloadAction<boolean>) => {
            state.isContentLoaded = action.payload;
        },
    },
});

export const { setIsModalOpened, setIsContentLoaded } = applicationSlice.actions;

export default applicationSlice.reducer;
