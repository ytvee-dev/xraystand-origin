import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IPageState {
    isModalOpened: boolean;
    isContentLoaded: boolean;
    progress: number;
}

const initialState: IPageState = {
    isModalOpened: false,
    isContentLoaded: false,
    progress: 0,
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
        setProgress: (state, action: PayloadAction<number>) => {
            state.progress = action.payload;
        },
    },
});

export const {
    setIsModalOpened,
    setIsContentLoaded,
    setProgress,
} = applicationSlice.actions;

export default applicationSlice.reducer;
