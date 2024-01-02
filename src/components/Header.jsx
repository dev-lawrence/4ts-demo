import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = ({ isRoomDetailsPage }) => {
  const [navClick, setNavClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // Handle nav Click
  const handleNavClick = () => {
    setNavClick((prevNavClick) => !prevNavClick);
    setOverlay((prevOverlay) => !prevOverlay);
  };

  const handleNavClose = () => {
    setNavClick(false);
    setOverlay(false);
  };

  // Change header background color on scroll
  useEffect(() => {
    if (!isRoomDetailsPage) {
      const handleScroll = () => {
        const scroll = window.scrollY;

        if (scroll > 100) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isRoomDetailsPage]);

  return (
    <>
      <header
        id="header-section"
        className={scrolling ? 'showBg' : isRoomDetailsPage ? 'showBg' : ''}
      >
        <div className={`overlay ${overlay ? 'show-overlay' : ''}`}></div>

        <div className="container">
          <div className="padding-block-1 flex-column relative">
            {/* Logo */}
            <div className="logo-container">
              <Link
                className={`logo ${
                  scrolling ? 'showLogo' : isRoomDetailsPage ? 'showLogo' : ''
                }`}
                to="/"
              >
                4t5
              </Link>
            </div>

            {/* NavBar Menu */}
            <NavBar
              navClick={navClick}
              handleNavClose={handleNavClose}
              scrolling={scrolling}
              isRoomDetailsPage={isRoomDetailsPage}
            />

            {/* <!--NAV BUTTONS--> */}
            <div className="menu-buttons">
              <div className="buttons">
                <button
                  className={`btn-outline cta ${scrolling ? 'showCta' : ''}`}
                >
                  Login
                </button>
                <button className="btn cta">Register</button>
              </div>

              <button
                className="toggle-menu icon-btn"
                onClick={navClick ? handleNavClose : handleNavClick}
              >
                {navClick ? (
                  <i
                    className={`fa-solid fa-x icon-close icon ${
                      scrolling
                        ? 'showIcon'
                        : isRoomDetailsPage
                        ? 'showIcon'
                        : ''
                    }`}
                  ></i>
                ) : (
                  <i
                    className={`fa-solid fa-bars icon-bar icon ${
                      scrolling
                        ? 'showIcon'
                        : isRoomDetailsPage
                        ? 'showIcon'
                        : ''
                    }`}
                  ></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
