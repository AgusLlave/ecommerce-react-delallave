import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./notification/NotificationContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    greeting={
                      "Bienvenidos! En ProSupp vas a poder encontrar los mejores suplementos al mejor precio"
                    }
                  />
                }
              />
              <Route
                path="/category/:categoryId"
                element={
                  <ItemListContainer
                    greeting={"Productos filtrados por categoria"}
                  />
                }
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
