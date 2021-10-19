import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: "c1",
          name: "sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>17.23</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        <button
          className={styles.button}
          onClick={() => {
            props.onHide();
            console.log("ordering......");
          }}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
