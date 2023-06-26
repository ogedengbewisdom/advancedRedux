import { createSlice } from "@reduxjs/toolkit";

const uiSliceInitialState = {
    showCart: false
}

const uiSlice = createSlice({
    name: "ui",
    initialState: uiSliceInitialState,
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice