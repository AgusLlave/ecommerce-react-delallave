// SE REEMPLAZO ASYNCMOCK.JS CON BASE DE DATOS DE FIREBASE.
// LAS FUNCIONES DEL MOCK QUEDAN COMENTADAS DENTRO DEL FILE COMO EJEMPLO.

const products = [
  {
    id: "1",
    name: "Whey Protein Vainilla 1kg",
    price: 20000,
    category: "proteinas",
    img: "https://simplicityar.vtexassets.com/arquivos/ids/166779/143033_suplemento-dietario-whey-protein-sabor-vainilla-en-polvo-x-1000-g__imagen-1.jpg?v=638246950157400000",
    stock: "15",
  },

  {
    id: "2",
    name: "Whey Protein Chocolate 1kg",
    price: 20000,
    category: "proteinas",
    img: "https://thefoodmarketar.vtexassets.com/arquivos/ids/160832/203644_suplemento-dietario-ena-whey-protein-sabor-chocolate-x-930-g__imagen-1.jpg?v=638211442309570000",
    stock: "19",
  },

  {
    id: "3",
    name: "Pure Creatine 300gr",
    price: 12000,
    category: "creatinas",
    img: "https://farmacityar.vtexassets.com/arquivos/ids/216625/105863_suplemento-dietario-creatina-monohidrato-en-polvo-x-300-g_imagen-1.jpg?v=637705109733970000",
    stock: "13",
  },

  {
    id: "4",
    name: "Barrita proteica de chocolate",
    price: 500,
    category: "barritas",
    img: "https://www.enasport.com/cdn/shop/products/ProteinBar_brownie_1024x.jpg?v=1662392222",
    stock: "20",
  },

  {
    id: "5",
    name: "Barrita proteica de frutilla",
    price: 500,
    category: "barritas",
    img: "https://www.enasport.com/cdn/shop/products/ProteinBar_frutilla_800x.jpg?v=1662392222",
    stock: "20",
  },

  {
    id: "6",
    name: "Multi vitaminas y minerales",
    price: 8000,
    category: "multivitaminas",
    img: "https://vitatech.com.ar/new/wp-content/uploads/2020/10/multi-vitaminas-2.jpg",
    stock: "14",
  },
];

// export const getProducts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 500);
//   });
// };

// export const getProductsById = (productId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products.find((prod) => prod.id === productId));
//     }, 500);
//   });
// };

// export const getProductsByCategory = (categoryId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products.filter((prod) => prod.category === categoryId));
//     }, 500);
//   });
// };
