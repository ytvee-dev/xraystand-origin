import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type {TContentItem} from "@utils/types/trafficLawsTypes";

interface IPageState {
    modalContentName: TContentItem;
}

const initialState: IPageState = {
    modalContentName: "",
};

const trafficLawsSlice = createSlice({
    name: "trafficLaws",
    initialState,
    reducers: {
        setModalContentName: (state, action: PayloadAction<TContentItem>) => {
            state.modalContentName = action.payload;
        },
    },
});

export const { setModalContentName } = trafficLawsSlice.actions;

export default trafficLawsSlice.reducer;
