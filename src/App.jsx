import "./App.css";
import Loginform from "./Components/Login-form";
import { Route, Routes } from "react-router";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard";
import { AuthProvider } from "./Components/AuthenticContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ExistItem = cartItems.find((item) => item.id === product.id);
    if (ExistItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ExistItem, quantity: ExistItem.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ExistItem = cartItems.find((item) => item.id === product.id);
    if (ExistItem) {
      if (ExistItem.quantity === 1) {
        // Remove item if quantity is 1
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        // Otherwise, decrement the quantity
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...ExistItem, quantity: ExistItem.quantity - 1 }
              : item
          )
        );
      }
    }
  };

  const handleClearCart = () =>{
    setCartItems([])
  }

  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Loginform
              handleAddProduct={handleAddProduct}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              {" "}
              <Home handleAddProduct={handleAddProduct} cartItems={cartItems} />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleRemoveProduct={handleRemoveProduct}
              handleAddProduct={handleAddProduct}
              handleClearCart ={handleClearCart}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {" "}
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
