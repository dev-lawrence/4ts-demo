import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="hero">
          <div className="overlay">
            <div className="container">
              <div className="content">
                <h1>WELCOME TO 4T5</h1>
                <p>
                  Here at 4T5, we offer you the cheapest and affordable data
                  plan, airtime, Dstv, Gotv and Startimes subscription.
                </p>

                <div className="buttons">
                  <button className="btn-outline cta">Login</button>
                  <button className="btn cta">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* About Section */}
          <About />

          {/* Features */}
          <Features />

          {/* Services */}
          <Services />
        </div>
      </section>
    </>
  );
};

export default Home;
