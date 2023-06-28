import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store/cartSlice';
// import useAddToCart from '../../hooks/useAddToCart';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  // const {items, totalQuantity} = useAddToCart({ title, price, id })

  const dispatch = useDispatch()

  const addToCart = async () => {
    // dispatch(cartAction.replace({items, totalQuantity}))
    // const response = await fetch("https://redux-b81f4-default-rtdb.firebaseio.com/cart.json", {
    //   method: "PUT",
    //   body: JSON.stringify({items, totalQuantity}),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    dispatch(cartAction.addItem({
      id,
      title, 
      price,
    }))
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
