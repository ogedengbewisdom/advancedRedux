import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
    showCart: true,
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        toggle( state ) {
            state.showCart = !state.showCart
        },
        addItem(state, action) {
            const newItemId = action.payload
            const existingItemIndex = state.items.findIndex(item => item.id === newItemId.id)
            const existingItem = state.items[existingItemIndex]
            let updatedItems
            state.totalQuantity = state.totalQuantity + 1

            if (!existingItem) {
                    updatedItems = state.items.concat({
                    id: newItemId.id, 
                    title: newItemId.title, 
                    quantity: 1, 
                    price: newItemId.price, 
                    total: newItemId.price})
            } else {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                    total: existingItem.total + newItemId.price
                }

                updatedItems = [...state.items]
                updatedItems[existingItemIndex] = updatedItem
            }
            state.items = updatedItems
        },
        removeItem (state, action) {
            const newItemId = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === newItemId);
            const existingItem = state.items[existingItemIndex];
            state.totalQuantity = state.totalQuantity - 1;

            let updatedItems;
            if (existingItem.quantity === 1) {
                updatedItems =state.items.filter(item => item.id !== newItemId)
            } else {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1,
                    total: existingItem.total - existingItem.price
                }
                updatedItems = [...state.items]
                updatedItems[existingItemIndex] = updatedItem
            }

            state.items = updatedItems
        }
    }
})

export const cartAction = cartSlice.actions

export default cartSlice