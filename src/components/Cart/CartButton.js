import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartSliceActions } from "../../store/cart";


const CartButton = (props) => {
  const cartQty = useSelector( (state)=> state.cartContent );
  // let totalQty=0;
  // cartQty.content.forEach(element => { totalQty += element.qty });
  const dispatch = useDispatch();
  const toggleHandler = (e) => {
    dispatch(cartSliceActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty.totalqty}</span>
    </button>
  );
};

export default CartButton;
