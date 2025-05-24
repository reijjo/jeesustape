import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content wrapper">
        <h3>KORJAIN</h3>
        <ul className="nav-links">
          <li>
            <a href="#how-it-works">Ohjeet</a>
          </li>
          <li>
            <Link to="/examples">Esimerkkejä</Link>
          </li>
          {/* <li>
            <Link to="/about">Lisää meistä</Link>
          </li> */}
        </ul>
        <div className="nav-buttons">
          <Link to="/login" className="btn btn-outline">
            Kirjaudu
          </Link>
          <Link to="/login" className="btn btn-filled">
            aloita fiksaus
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
