import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store/cartSlice';
// import useAddToCart from '../../hooks/useAddToCart';
// import { uiActions } from '../../store/uiSlice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  // const {items, totalQuantity} = useAddToCart({ title, price, id })

  const dispatch = useDispatch()

  const addToCart = async () => {
    // dispatch(uiActions.showNotification({
    //   title: "Sending...",
    //   status: "pending",
    //   message: "sending cart data"
    // }))
    // dispatch(cartAction.replace({items, totalQuantity}))
    // try {
    //   const response = await fetch("https://redux-b81f4-default-rtdb.firebaseio.com/cart.json", {
    //     method: "PUT",
    //     body: JSON.stringify({items, totalQuantity}),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //   dispatch(uiActions.showNotification({
    //     title: "Success",
    //     status: "success",
    //     message: "send cart data"
    //   }))
    // } catch(error) {
    //   dispatch(uiActions.showNotification({
    //     title: "Failed",
    //     status: "error",
    //     message: error.message
    //   }))
    // }

    
    // dispatch(sendRequest({items, totalQuantity}))
    dispatch(cartAction.addItem({ title, price, description, id }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
