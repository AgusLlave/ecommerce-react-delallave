import { db } from "../firebaseConfig";

import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

export const getProducts = (categoryId) => {
  const productsRef = categoryId
    ? query(collection(db, "productos"), where("category", "==", categoryId))
    : collection(db, "productos");

  return getDocs(productsRef)
    .then((querySnapshot) => {
      const adaptedProducts = querySnapshot.docs.map((documentSnapshot) => {
        const fields = documentSnapshot.data();

        return {
          id: documentSnapshot.id,
          ...fields,
        };
      });
      return adaptedProducts;
    })
    .catch((error) => {
      return error;
    });
};

export const getProductById = (itemId) => {
  const productRef = doc(db, "productos", itemId);

  return getDoc(productRef)
    .then((documentSnapshot) => {
      const fields = documentSnapshot.data();
      const adaptedProduct = { id: documentSnapshot.id, ...fields };
      return adaptedProduct;
    })
    .catch((error) => {
      return error;
    });
};
