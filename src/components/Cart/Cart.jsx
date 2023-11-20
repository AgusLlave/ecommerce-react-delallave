import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem, total } = useCart();

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  return (
    <div className="text-center m-4">
      <h1 className="p-4">Cart</h1>
      <div className="p-3 border border-info border-start-0 rounded-end">
        {cart.map((prod) => {
          return (
            <div key={prod.id} className="d-flex">
              <h3 className="me-auto p-2">{prod.name}</h3>

              <button
                className="btn btn-primary m-3"
                onClick={() => handleRemoveItem(prod.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <h4 className="m-4"> Total a pagar: ${total} </h4>
      <Link to="/checkout" className="btn btn-primary m-5">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
