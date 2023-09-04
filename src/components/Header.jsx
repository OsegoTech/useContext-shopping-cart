import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand bg-primary">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact activeClassName="active">Products</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/cart" exact activeClassName="active">Cart</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/add-product" exact activeClassName="active">Add Products</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}