import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
