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
              <h3>4t5</h3>
              <p>
                Say goodbye to missed deadlines and complicated processes. Join
                thousands of satisfied customers who trust 4T5 for their data,
                airtime, eletricity and cable TV bill payments.
              </p>
              <Link to={'/'} className="btn">
                read more
              </Link>
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
            </div>
          </div>
          <div className="copyright">
            <p>2023 © 2023 All Rights Reserved | 4T5</p>
          </div>
        </div>

        <div onClick={handleScrollToTop} className="page-up">
          <span className={showScrollArrow ? 'showArrow' : ''}>
            <i class="fa-solid fa-arrow-up up-icon"></i>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
