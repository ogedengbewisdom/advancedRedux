import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';

const CartButton = (props) => {
  const quantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const showButtonHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button onClick={showButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
