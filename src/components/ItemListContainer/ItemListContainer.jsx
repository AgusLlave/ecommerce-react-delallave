import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const asyncFunction = () => getProducts(categoryId);

  const {
    data: products,
    loading,
    error,
  } = useAsync(asyncFunction, [categoryId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Hubo un error al cargar los productos</h1>;
  }

  if (products.length === 0) {
    return <h1>No existen productos para esta categoria</h1>;
  }

  return (
    <div className="container">
      <h2 className="text-center my-5 mx-3">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
