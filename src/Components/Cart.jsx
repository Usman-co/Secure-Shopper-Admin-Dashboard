import { Link } from "react-router-dom";

const Cart = ({
  handleRemoveProduct,
  cartItems,
  handleAddProduct,
  handleClearCart,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div>
      <div className="navbar">
        <div className="logo">Logo</div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div id="cart-products">
        <h3 className="cart-heading">Cart Items</h3>

        {cartItems.length === 0 && (
          <div className="message">No product added to Cart</div>
        )}
        <div>
          {cartItems.map((item) => (
            <div key={item.id} id="cart-product-card">
              <img src={item.image} />
              <h3>{item.title}</h3>
              <div id="cart-buttons">
                <div>
                  <button
                    id="increment-button"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    id="decrement-button"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
              </div>
              <h4>
                {item.quantity}*${item.price}
              </h4>
            </div>
          ))}
        </div>
        <div className="clear-cart">
          {cartItems.length >= 1 && (
            <button className="clear-cart-bton" onClick={handleClearCart}>
              Clear Cart
            </button>
          )}
        </div>
        <div className="cart-total-price">
          Total Price: <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
