import AboutImg from '../assets/about-img.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container pt-section">
        <div className="content grid grid-reverse">
          <div className="about-info">
            <div className="title">
              <h2>about us</h2>
            </div>
            <p>
              4T5 is a web and mobile platform where users can buy internet data
              bundles, VTU Airtime, Pay Eletricity Bills, TV Subscription.
            </p>

            <p>
              We have designed our website to accommodate user needs, Providing
              users of our platform the opportunity to save cost, make fast,
              secured, efficient an rewarding purchases and bill payments.
            </p>

            <p>
              Our internet/mobile data plans work with all devices including
              Andriod, Iphone, Computers, Modems e.t.c. Data can be rollover if
              you re-subscribe before expiry date of current plan.
            </p>
          </div>

          <div className="img">
            <img aria-label="happy-lady" src={AboutImg} alt="chair" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
