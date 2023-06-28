import { useSelector } from "react-redux"

const useAddToCart = ({id, title, price}) => {

    const cart = useSelector(state => state.cart);
    const newTotalQuantity = cart.totalQuantity + 1;
    const updatedItems = cart.items.slice()

    const existingItemIndex = updatedItems.findIndex(item => item.id === id)
    const existingItem = updatedItems[existingItemIndex]

    if (!existingItem) {
        updatedItems.unshift({
            id: id,
            title: title,
            quantity: 1,
            price: price,
            total: price 
        })
    } else {
        const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
            total: existingItem.total + price,
        }

        updatedItems[existingItemIndex] = updatedItem
    }

    return {
        items: updatedItems,
        totalQuantity: newTotalQuantity
    }
}

export default useAddToCart