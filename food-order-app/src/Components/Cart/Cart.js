import React, { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const hasItems = cartctx.items.length > 0;
  console.log("Printing all cart context itmes", cartctx.items);
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItems && (
          <button
            className={styles.button}
            onClick={() => {
              props.onHide();
              console.log("ordering......");
            }}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
