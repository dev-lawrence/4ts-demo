import { NavLink } from 'react-router-dom';

const Navbar = ({ navClick, handleNavClose, scrolling, isRoomDetailsPage }) => {
  const handleNavLinkClick = () => {
    handleNavClose();
    window.scrollTo(0, 0);
  };

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
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
            <a
              href="#about"
              onClick={() => {
                handleNavClose();
                smoothScrollTo('about');
              }}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#features"
              onClick={() => {
                handleNavClose();
                smoothScrollTo('features');
              }}
            >
              features
            </a>
          </li>

          <li>
            <a
              href="#service"
              onClick={() => {
                handleNavClose();
                smoothScrollTo('service');
              }}
            >
              service
            </a>
          </li>

          <li>
            <a
              href="#footer-section"
              onClick={() => {
                handleNavClose();
                smoothScrollTo('footer-section');
              }}
            >
              contact
            </a>
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
