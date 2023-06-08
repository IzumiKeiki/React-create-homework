import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Homepage
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
