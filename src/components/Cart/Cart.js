import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const isShow = useSelector((state) => state.cart.isShow);
  const cartContent = useSelector((state) => state.cartContent);

  return (
    <>
      {isShow && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartContent.content.length>0 && cartContent.content.map((x) => {
              return (
                <CartItem
                  key={x.itemName}
                  item={{
                    title: x.itemName,
                    quantity: x.qty,
                    total: x.qty * x.px,
                    price: x.px,
                  }}
                />
              );
            })}
            {/* <CartItem
              item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
            /> */}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
