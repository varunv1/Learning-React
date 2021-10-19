import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (itmes) => {};
  const removeItemFromCart = (id) => {};

  const cartContextValue = {
    items: [],
    amount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
