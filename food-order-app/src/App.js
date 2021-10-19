import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsVisible, setCardIsVisible] = useState(false);

  const showCartHandler = () => {
    setCardIsVisible(true);
  };
  const hideCartHandler = () => {
    setCardIsVisible(false);
  };
  return (
    <CartProvider>
      {cartIsVisible && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} onHide={hideCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
