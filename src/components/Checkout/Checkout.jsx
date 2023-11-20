import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
  getDocs,
  collection,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ContactForm from "../FormWithValidation/FormWithValidation";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useCart();

  const createOrder = async (userData) => {
    try {
      setLoading(true);

      const objOrder = {
        buyer: {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        },
        items: cart,
        total,
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsRef);

      const updatePromises = docs.map(async (documentSnapshot) => {
        const fields = documentSnapshot.data();
        const stockDb = fields.stock;

        const productAddedToCart = cart.find(
          (prod) => prod.id === documentSnapshot.id
        );
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: documentSnapshot.id, ...fields });
        }
      });

      await Promise.all(updatePromises);

      if (outOfStock.length === 0) {
        const ordersRef = collection(db, "orders");

        const { id } = await addDoc(ordersRef, objOrder);
        batch.commit();
        clearCart();
        setOrderId(id);
        console.log(`El id de su orden es ${id}`);
      } else {
        console.log("No hay stock de algun producto");
      }
    } catch (error) {
      console.error("Hubo un error generando la orden");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center m-5">Checkout</h1>
      {loading && (
        <h1 className="text-center m-4">Se esta generando su orden...</h1>
      )}
      {orderId ? (
        <h1 className="text-center m-4">El id de su orden es: {orderId}</h1>
      ) : (
        <ContactForm onCreate={createOrder} />
      )}
    </>
  );
};

export default Checkout;
