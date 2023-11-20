import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationContext";

const InputCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const handleChange = (e) => {
    if (e.target.value <= stock) {
      setCount(e.target.value);
    }
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={count} />
      <button onClick={() => onAdd(count)} className="btn btn-primary m-2">
        Agregar al carrito
      </button>
    </div>
  );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p className="">{count}</p>
      <button onClick={decrement} className="btn btn-primary">
        -
      </button>
      <button onClick={increment} className="btn btn-primary">
        +
      </button>
      <button onClick={() => onAdd(count)} className="btn btn-primary m-3">
        Agregar al carrito
      </button>
    </div>
  );
};

const ItemDetail = ({ id, name, category, img, price, stock }) => {
  const [inputType, setInputType] = useState("button");

  const ItemCount = inputType === "button" ? ButtonCount : InputCount;

  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      name,
      price,
      quantity,
    };

    addItem(productToAdd);
    setNotification("error", `Se agregaron ${quantity} ${name}`);
  };

  return (
    <article className="card w-50 m-4 text-center">
      <button
        onClick={() => setInputType(inputType === "input" ? "button" : "input")}
        className="btn btn-primary m-3"
      >
        Cambiar contador
      </button>
      <header>
        <h2 className="text-center">{name}</h2>
      </header>
      <picture>
        <img
          src={img}
          alt={name}
          style={{ width: 100 }}
          className="img-thumbnail w-50 border border-0"
        />
      </picture>
      <section>
        <p>Categoria: {category}</p>
        <p>Precio: {price}</p>
        <p>Stock: {stock} </p>
      </section>
      <footer>
        {isInCart(id) ? (
          <Link to="/cart" className="btn btn-primary">
            Finalizar Compra
          </Link>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
