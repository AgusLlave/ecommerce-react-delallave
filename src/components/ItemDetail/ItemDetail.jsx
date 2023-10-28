import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, price, category, img, stock }) => {
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>Categoria: {category} </p>
        <p>Precio: {price} </p>
      </section>
      <footer>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
