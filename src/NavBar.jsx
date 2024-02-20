import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav id="nav-bar">
        <h3>Weird Cat World</h3>
        <div id="menu-items">
          <Link to="./">Home</Link>
          <Link to="./about">About</Link>
          <Link to="./cats">Cats</Link>
        </div>
      </nav>
    </>
  );
}
