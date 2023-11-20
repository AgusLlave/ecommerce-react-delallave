import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (stock > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center p-3">
        <button onClick={decrement} className="btn btn-primary rounded-circle">
          -
        </button>
        <h4 className="px-2">{quantity}</h4>
        <button onClick={increment} className="btn btn-primary rounded-circle">
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => onAdd(quantity)}
          disabled={!stock}
          className="btn btn-primary"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
