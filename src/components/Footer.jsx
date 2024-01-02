import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 1300) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id="footer-section">
        <div className="container">
          <div className="grid">
            <div className="about m-b">
              <Link className="logo" to="/">
                4t5
              </Link>
              <p>
                Say goodbye to missed deadlines and complicated processes. Join
                thousands of satisfied customers who trust 4T5 for their data,
                airtime, eletricity and cable TV bill payments.
              </p>
            </div>

            <div className="quick-menu menu--links m-b">
              <h3>quick link</h3>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/'}>About</Link>
              </li>
              <li>
                <Link to={'/'}>Service</Link>
              </li>
              <li>
                <Link to={'/'}>Register</Link>
              </li>
              <li>
                <Link to={'/'}>Login</Link>
              </li>
              <li>
                <Link to={'/'}>Contact</Link>
              </li>
            </div>

            <div className="social-links m-b">
              <h3>contact</h3>
              <div className="flex">
                <i className="fa-solid fa-user"></i>
                <p>4T5 NG</p>
              </div>

              <div className="flex">
                <i class="fa-solid fa-earth-americas"></i>
                <p>DELTA STATE, NIGERIA</p>
              </div>

              <div className="flex">
                <i className="fa-solid fa-envelope"></i>
                <p>info.4t5ng@gmail.com</p>
              </div>

              <div className="flex">
                <i className="fa-brands fa-instagram"></i>
                <p>4T5.NG</p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>2023 © 2023 All Rights Reserved | 4T5</p>
          </div>
        </div>

        <div onClick={handleScrollToTop} className="page-up">
          <span className={showScrollArrow ? 'showArrow' : ''}>
            <i className="fa-solid fa-arrow-up up-icon"></i>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
