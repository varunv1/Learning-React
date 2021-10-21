import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    // delete the item using id and return the updated state
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_TO_CART",
      item: item,
    });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const cartContextValue = {
    items: cartState.items,
    amount: cartState.totalAmount,
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
