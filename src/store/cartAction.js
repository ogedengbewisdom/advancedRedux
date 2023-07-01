import { cartAction } from "./cartSlice"
import { uiActions } from "./uiSlice"

export const fetchData = () => {
    return async (dispatch) => {

        const fetchCart = async() => {
            const response = await fetch("https://redux-b81f4-default-rtdb.firebaseio.com/cart.json")
            if (!response.ok) {
                throw new Error ("Something went wrong")
            }
            const resData = await response.json()
            return resData;
        }

        try {
            const cartData = await fetchCart()
            dispatch(cartAction.replace({items: cartData.items || [], totalQuantity: cartData.totalQuantity}))
        }
        catch(error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Failed",
                message: "Failed to fetch cart data"
            }))
        }
    }
}

export const sendRequest = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data request"
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
                throw new Error ("Something went wrong")
            }
        }
        try {
            await sendCartData()
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success",
                message: "Cart send successfully"
            }))
        } 
        catch(error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Failed!",
                message: "Failed to send cart data"
            }))
        }
    }
}