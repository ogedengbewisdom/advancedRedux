import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const cartInitialState = {
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
        replace (state, action) {
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
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

 const sendRequest = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            title: "Sending...",
            status: "pending",
            message: "Sending Cart Data"
        }))

        const sendCartData = async () => {
            const response = await fetch("https://redux-b81f4-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart),
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            if (!response.ok) {
               throw new Error("Something went wrong")
            }
        }
        try {
            await sendCartData()
            dispatch(uiActions.showNotification({
                title: "Success",
                status: "success",
                message: "Cart Data send successfully"
            }))
        }
        catch(error) {
            dispatch(uiActions.showNotification({
                title: "Failed",
                status: "error",
                message: "Failed to send cart data"
            }))
        }
        
    }
}

export const cartAction = cartSlice.actions

export default cartSlice