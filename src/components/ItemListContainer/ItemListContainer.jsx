import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <h2 className="text-center my-5 mx-3">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
