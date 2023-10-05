import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xxxl navbar-light bg-light px-4">
      <h1 className="navbar-brand">ProSupp</h1>
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-outline-dark">Proteinas</button>
        <button className="btn btn-outline-dark">Creatinas</button>
        <button className="btn btn-outline-dark">Multivitaminas</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
