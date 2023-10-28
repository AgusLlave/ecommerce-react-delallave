import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xxxl navbar-light bg-light px-4 border border-black sticky-top">
      <Link to={"/"} className="text-decoration-none">
        <h1 className="navbar-brand">ProSupp</h1>
      </Link>
      <div className="grid gap-0 column-gap-3">
        <Link
          to="/category/proteinas"
          className="p-3 g-col-6 text-decoration-none"
        >
          Proteinas
        </Link>
        <Link
          to="/category/creatinas"
          className="p-3 g-col-6 text-decoration-none"
        >
          Creatinas
        </Link>
        <Link
          to="/category/multivitaminas"
          className="p-3 g-col-6 text-decoration-none"
        >
          Multivitaminas
        </Link>
        <Link
          to="/category/barritas"
          className="p-3 g-col-6 text-decoration-none "
        >
          Barritas
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
