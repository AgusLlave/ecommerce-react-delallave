import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <div className="card-group w-50">
      <div className="card w-50 m-4">
        <header>
          <h2 className="text-center">{name}</h2>
        </header>
        <picture className="card-img-top text-center">
          <img
            src={img}
            alt={name}
            className="img-thumbnail w-50 border border-0"
          />
        </picture>
        <section className="card-body">
          <p className="text-center">Precio: ${price}</p>
        </section>
        <footer className="card-footer text-center">
          <Link to={`/item/${id}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Item;
