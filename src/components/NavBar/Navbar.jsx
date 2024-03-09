import { useState } from "react"; // Import useState hook
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for header styling

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <header className="container-fluid">
      <div className="container">
        {/* desktop menu */}
        <div className="dsktop-header">
          <div className="img-div">Yash Goyal</div>
          <nav>
            <ul className="dsktop-menu-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/experience">Experience</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* mobile menu */}
        <div className="mobile-header">
          <span className="hamburger-menu" onClick={handleMenu}>
            <svg fill="#fff" viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20" rx="10"></rect>
              <rect y="30" width="100" height="20" rx="10"></rect>
              <rect y="60" width="100" height="20" rx="10"></rect>
            </svg>
          </span>
          {menu && (
            <nav>
              <ul className="mobile-menu-list">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/experience">Experience</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
