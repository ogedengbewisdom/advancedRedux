import { createSlice } from "@reduxjs/toolkit";

const uiSliceInitialState = {
    showCart: false,
    notification: null
}

const uiSlice = createSlice({
    name: "ui",
    initialState: uiSliceInitialState,
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart
        },
        showNotification(state, action) {
            state.notification = {
                title: action.payload.title,
                message: action.payload.message,
                status: action.payload.status
            }
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice