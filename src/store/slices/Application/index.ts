import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IPageState {
    isModalOpened: boolean;
}

const initialState: IPageState = {
    isModalOpened: false,
};

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        setIsModalOpened: (state, action: PayloadAction<boolean>) => {
            state.isModalOpened = action.payload;
        },
    },
});

export const { setIsModalOpened } = applicationSlice.actions;

export default applicationSlice.reducer;
