import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TContentItem } from "@modules/trafficLaws/types";

interface IPageState {
    modalContentName: TContentItem;
    isModalOpened: boolean;
}

const initialState: IPageState = {
    modalContentName: "",
    isModalOpened: false,
};

const kazakhAdebietSlice = createSlice({
    name: "kazakhAdebiet",
    initialState,
    reducers: {
        setModalContentName: (state, action: PayloadAction<TContentItem>) => {
            state.modalContentName = action.payload;
        },
    },
});

export const { setModalContentName } = kazakhAdebietSlice.actions;

export default kazakhAdebietSlice.reducer;
