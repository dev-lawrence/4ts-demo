import { NavLink } from 'react-router-dom';

const Navbar = ({ navClick, handleNavClose, scrolling, isRoomDetailsPage }) => {
  const handleNavLinkClick = () => {
    handleNavClose();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`nav ${navClick ? 'showMenu' : ''}`}>
        <ul
          className={`menu ${
            scrolling
              ? 'showMenuColor'
              : isRoomDetailsPage
              ? 'showMenuColor'
              : ''
          }`}
        >
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="rooms" onClick={handleNavLinkClick}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="about" onClick={handleNavLinkClick}>
              Service
            </NavLink>
          </li>

          <li>
            <NavLink to="contact" onClick={handleNavLinkClick}>
              Contact
            </NavLink>
          </li>

          <div className="buttons">
            <button className="btn-outline | pry-cta | nav-cta">Login</button>
            <button className="btn | nav-cta">Register</button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
